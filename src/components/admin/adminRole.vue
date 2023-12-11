<template>
    <div class="list-role-wrapper">
        <div class="list-role-wrapper-title">
            <h4>Bảng phân quyền</h4>
        </div>
        <div class="d-flex justify-content-between">
            <div class="ms-3 button-create-role" @click="formAddRole = true">
                <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" height="0.8em"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <span class="ms-1">Thêm quyền</span>
            </div>

        <div class="d-flex justify-content-end  handle-click-role">
            <svg class="me-2" @click="handleRoles('previous')" xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"/></svg>
            <p class="test">..Quyền..</p>
            <svg class="ms-2" @click="handleRoles('next')" xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"/></svg>
        </div>
        </div>
        <div class="role-page-content">
            <table class="table">
                <thead class="table-secondary">
                    <tr class="row h-50">
                        <th class="col-1 ps-0 pe-0 text-center d-flex align-items-center justify-content-center">STT</th>
                        <th class="col-3 ps-0 pe-0 d-flex align-items-center ">Tài khoản</th>
                        <th class="col-1 ps-0 pe-0 text-center d-flex align-items-center justify-content-center" v-for="role in roles" :key="role._id">{{ role.name }}</th>
                    </tr>
                </thead>
                <tbody class="">
                    <tr class="row h-25" v-for="(user, index) in users" :key="index">
                        <td class="col-1 text-center">{{index+1}}</td>
                        <td class="col-3">{{ user.email }}</td>
                        <td class="col-1 text-center" v-for="role in roles" :key="role._id"><input :disabled="user.isStaff == false" type="checkbox" @change="(event) => updateRoleUser(role._id, user._id, event)" :checked="user.roles.some(e => e.roleId == role._id)"></td>
                    </tr>
                </tbody>
            </table>
            <div class="pos-nagination">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(1)">&laquo;</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item" v-for="index in lengthPageUser" :key="index">
                        <span class="page-link" :class="{ active_page: activePage === index }" @click="handlePage(index)">{{
                            index }}</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(lengthPageUser)">&raquo;</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="overlay" v-if="formAddRole">
            <div class="form-addbrand form-add-role">
                <form action="" @submit.prevent="addRole">
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Thêm quyền</h4>
                        <div class="mb-2" style="cursor: pointer;" @click="closeAddRole">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="p-3 pb-0 d-grid name-brand">
                        <label for="">Tên quyền <span class="span-requied">*</span></label>
                        <input type="text" v-model="addRoleName" required placeholder="Nhập tên thương hiệu">
                    </div>
                    <button class="submit-add-brand mt-4">Thêm</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import roleService from '../../services/role.service'
import userService from '../../services/user.service'
export default {
    data() {
        return {
            roles: {},
            users: {},
            formAddRole: false,
            addRoleName: '',
            activePage: 1,
            activeRole: 1,
            lengthPage: 0,
            ischecked: false,
            lengthPageUser: 1
        }
    },
    methods: {
        async getAllRoles(pageNumber = 1) {
            try {
                // console.log(pageNumber)
                // const pageNumber = index
                const length = await roleService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 8)
                // console.log(this.lengthPage)
                const response = await roleService.getAll(pageNumber, 8)
                this.roles = response.data
                // console.log(this.roles)
            } catch (error) {
                console.log(error);
            }
        },
        handlePage(index) {
            this.activePage = index
            this.getAllUser(index)
            // this.getAllRoles(1)
        },
        handleRoles(index) {
            // console.log(index)
            if(index == 'next') {
                if(this.activeRole < this.lengthPage) {
                    this.activeRole = this.activeRole + 1;
                    // console.log(this.activeRole, '1')
                    this.getAllUser(1)
                    this.getAllRoles(this.activeRole)
                    // console.log()
                } else {
                    this.activeRole =  1;
                    // console.log(this.activeRole, '2')
                    this.getAllRoles(this.activeRole)
                }
            } else {
                if(this.activeRole > 1) {
                    this.activeRole = this.activeRole -1;
                    // console.log(this.activeRole, '3')
                    this.getAllUser(1)
                    this.getAllRoles(this.activeRole)
                } else {
                    this.activeRole = this.lengthPage
                    // console.log(this.activeRole, '4')
                    this.getAllUser(1)
                    this.getAllRoles(this.activeRole)
                }
            }
        },
        async getAllUser(pageNumber = 1) {
            try {
                const length = await userService.getPanigation()
                // console.log(length)
                this.lengthPageUser = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await userService.getPanigation(pageNumber, 10)
                this.users = response.data
                //console.log(this.users)
            } catch (error) {
                console.log(error);
            }
        },
        closeAddRole() {
            this.formAddRole = false
            this.addRoleName = ''
        },
        async addRole() {
            const name = this.addRoleName
            const response = await roleService.create({ name })
            if (response.data.status) {
                this.getAllRoles()
                alert(response.data.mes)
                this.closeAddRole()
            } else {
                alert(response.data.mes)
                this.addRoleName = ''
            }
        },
        async updateRoleUser(roleId, userId, event) {
            if(event.target.checked) {
                const data = {
                    roleId: roleId,
                    userId: userId,
                    type: 'addrole'
                }
                await roleService.updateRoleUser(data)
            } else {
                const data = {
                    roleId: roleId,
                    userId: userId,
                    type: 'removerole'
                }
                await roleService.updateRoleUser(data)
            }

            // console.log(event.target.checked)
        }
        
    },
    mounted() {
        this.getAllRoles()
        this.getAllUser()
    }
}
</script>

<style scoped>
@import url(../../assets/adminUser.css);
</style>