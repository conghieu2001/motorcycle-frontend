<template>
    <div class="list-product-wapper">
        <div class="list-product-title pb-1"><span>Danh sách tài khoản</span></div>
        <div class="d-flex justify-content-between mt-3 me-3">
            <router-link to="adminrole" style="text-decoration: none; color: #000; width: auto;" class="pe-2 ms-3 add-inputproduct-form">
                <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <span>Danh sách quyền</span>
            </router-link>
            <div class="d-flex">
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" @click.prevent.stop="exportPdf">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                    </svg>
                    PDF
                </div>
                <div class="exportFileExcel" style="width: 70px;" @click="exportExcel">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                    </svg>
                    Excel
                </div>
            </div>
        </div>
        <div class="user-page-table">
            <div class="row user-page-table-header">
                <div class="col-1">
                    STT
                </div>
                <div class="col-3 dropdown-toggle" @click="clickToggle(1)">
                    Tên
                </div>
                <div class="col-3 dropdown-toggle" @click="clickToggle(2)">
                    Email
                </div>
                <div class="col-1 dropdown-toggle " @click="clickToggle(3)">
                    SĐT
                </div>
                <div class="col-2 dropdown-toggle text-center" @click="clickToggle(4)">
                    Loại
                </div>
                <div class="col-2 text-center">
                    Options
                </div>
            </div>
            <ul class="isdropmenuNameUser" v-if="isDropUserName">
                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                <li class="p-2  sortName" @click="sortedUserName(1)">Từ A - Z</li>
                <li class="p-2 sortName" @click="sortedUserName(2)">Từ Z - A</li>
                <li class="mb-2"><input type="text" v-model="searchText" @input="filteredUserName" placeholder="Tìm kiếm">
                </li>
            </ul>
            <ul class="isdropmenuEmail" v-if="isDropUserEmail">
                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                <li class="p-2  sortName" @click="sortedUserEmail(1)">Từ A - Z</li>
                <li class="p-2 sortName" @click="sortedUserEmail(2)">Từ Z - A</li>
                <li class="mb-2"><input type="text" v-model="searchText" @input="filteredUserEmail" placeholder="Tìm kiếm">
                </li>
            </ul>
            <ul class="isdropmenuPhonenumber" v-if="isDropUserPhonenumber">
                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                <li class="mb-2"><input type="text" v-model="seacrhNumber" @input="filteredUserPhoneNumber"
                        placeholder="Tìm kiếm">
                </li>
            </ul>
            <ul class="isdropmenuStaff" style="width: 200px;" v-if="isDropUserStaff">
                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                <li class="p-2  sortName" @click="filteredUserStaff(1)">Nhân viên</li>
                <li class="p-2  sortName" @click="filteredUserStaff(2)">Người dùng</li>
            </ul>
            <div class="row user-page-table-body" v-for="(user, index) in users" :key="user._id">
                <div class="col-1 table-body-index">
                    {{ index + 1 }}
                </div>
                <div class="col-3">
                    {{ user.fullName }}
                </div>
                <div class="col-3">
                    {{ user.email }}
                </div>
                <div class="col-1 ">
                    {{ user.phoneNumber }}
                </div>
                <div class="col-2 text-center">
                    <p class="mb-0" v-if="user.isStaff == true">Nhân Viên</p>
                    <p class="mb-0" v-else>Khách hàng</p>
                </div>
                <div class="col-2 text-center">
                    <div class="d-flex justify-content-evenly">
                        <!-- <div class="add-role" v-if="user.isStaff == true">
                            <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 448 512">
                                <path
                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div> -->
                        <!-- <div v-else></div> -->
                        <!-- <div class="up-staff" @click="upToStaff(user._id)">
                            <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 512 512">
                                <path
                                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                            </svg>
                        </div> -->
                        <div class="clock-user" @click="lockAccount(user._id)" v-if="user.locked == false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 640 512">
                                <path
                                    d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z" />
                            </svg>
                        </div>
                        <div class="clock-user" @click="lockAccount(user._id)" v-else>
                            <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 512 512">
                                <path
                                    d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
            <div class="pos-nagination">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(1)">&laquo;</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item" v-for="index in lengthPage" :key="index">
                        <span class="page-link" :class="{ active_page: activePage === index }" @click="handlePage(index)">{{
                            index }}</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(lengthPage)">&raquo;</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
import userService from '../../services/user.service'
import * as XLSX from 'xlsx'
export default {

    data() {
        return {
            users: [],
            isDropUserName: false,
            isDropUserEmail: false,
            isDropUserPhonenumber: false,
            isDropUserStaff: false,
            searchText: '',
            seacrhNumber: '',
            isLock: false
        }
    },
    methods: {
        async getProPanigation(pageNumber = 1) {
            try {
                const length = await userService.getPanigation()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await userService.getPanigation(pageNumber, 10)
                this.users = response.data
                console.log(this.users)
            } catch (error) {
                console.log(error);
            }
        },
        async upToStaff(id) {
            const response = await userService.uptoStaff(id)
            if (response.status == true) {
                this.getProPanigation(1)
                alert(response.mes)
            } else {
                alert(response.mes)
            }
        },
        async lockAccount(id) {
            const response = await userService.lockAccount(id)
            if (response.status == true) {
                // this.users[rowNumber].disabled = true;
                this.getProPanigation(1)
                alert(response.mes)
            } else {
                alert(response.mes)
            }
        },
        clickToggle(is) {
            if (is == 1) {
                this.isDropUserName = !this.isDropUserName,
                    this.isDropUserEmail = false,
                    this.isDropUserPhonenumber = false,
                    this.isDropUserStaff = false
            } else if (is == 2) {
                this.isDropUserName = false,
                    this.isDropUserEmail = !this.isDropUserEmail,
                    this.isDropUserPhonenumber = false,
                    this.isDropUserStaff = false
            }
            else if (is == 3) {
                this.isDropUserName = false,
                    this.isDropUserEmail = false,
                    this.isDropUserPhonenumber = !this.isDropUserPhonenumber,
                    this.isDropUserStaff = false
            }
            else if (is == 4) {
                this.isDropUserName = false,
                    this.isDropUserEmail = false,
                    this.isDropUserPhonenumber = false,
                    this.isDropUserStaff = !this.isDropUserStaff
            }

        },
        async filteredUserName() {
            if (!this.searchText) return this.getProPanigation(1);

            else {
                const regex = new RegExp(this.searchText.trim(), 'i');
                await this.getProPanigation(1)
                this.users = this.users.filter((user) =>
                    regex.test(user.fullName)
                );
            }
        },
        sortedUserName(is) {
            if (is == 1) {
                return this.users.sort((a, b) => a.fullName.localeCompare(b.fullName));
            } else {
                return this.users.sort((a, b) => b.fullName.localeCompare(a.fullName));
            }
        },
        sortedUserEmail(is) {
            if (is == 1) {
                return this.users.sort((a, b) => a.email.localeCompare(b.email));
            } else {
                return this.users.sort((a, b) => b.email.localeCompare(a.email));
            }
        },
        async filteredUserEmail() {
            if (!this.searchText) return this.getProPanigation(1);

            else {
                const regex = new RegExp(this.searchText.trim(), 'i');
                await this.getProPanigation(1)
                this.users = this.users.filter((user) =>
                    regex.test(user.email)
                );
            }
        },
        async filteredUserPhoneNumber() {
            if (!this.seacrhNumber) return this.getProPanigation(1);

            else {
                const regex = new RegExp(this.seacrhNumber.trim(), 'i');
                await this.getProPanigation(1)
                this.users = this.users.filter((user) =>
                    regex.test(user.phoneNumber)
                );
            }
        },
        async filteredUserStaff(is) {
            if (is == 1) {
                await this.getProPanigation(1)
                this.users = this.users.filter((user) =>
                    user.isStaff == true
                );
            } else {
                await this.getProPanigation(1)
                this.users = this.users.filter((user) =>
                    user.isStaff == false
                );
            }
        },
        defaultSearch() {
            this.searchText = ''
            this.getProPanigation(1)
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        isCheckExport(is) {
            // console.log(is)
            if (is == true) {
                return is = "Nhân viên"
            } else {
                return is = "Người dùng"
            }
        },
        isCheckExportLocked(is) {
            // console.log(is)
            if (is == true) {
                return is = "Đã khóa"
            } else {
                return is = "Sử dụng"
            }
        },
        exportExcel() {
            const filename = 'listUsers'
            let data = []
            this.users.forEach(e => {
                data.push([
                    e.fullName,
                    e.email,
                    e.phoneNumber,
                    this.isCheckExport(e.isStaff),
                    this.formatDateNoTime(e.createdAt)
                ])
            })

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 30 }, { width: 40 }, { width: 25 }, { width: 25 }, { width: 25 }];
            ws['A1'] = { v: 'Tên tài khoản' };
            ws['B1'] = { v: 'Email' };
            ws['C1'] = { v: 'Số diện thoại' };
            ws['D1'] = { v: 'Loại' };
            ws['E1'] = { v: 'Ngày tạo' };
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);

        },
        async exportPdf() {
            if (this.users.length > 0) {
                let forTable = ''

                this.users.forEach(user => {
                    forTable +=
                        `<tr>
                        <td style="border: 1px solid black; padding: 5px">${user.fullName}</td>
                        <td style="border: 1px solid black; padding: 5px">${user.email}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${user.phoneNumber}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.isCheckExport(user.isStaff)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: center">${this.formatDateNoTime(user.createdAt)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;  width: 70px;">${this.isCheckExportLocked(user.locked)}</td>
                        
                    </tr>`
                })
                // console.log(forTable)
                const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 90px; padding-left: 50px;">Danh sách các tài khoản</h3>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 5px">Tên tài khoản</th>
                    <th style="border: 1px solid black; padding: 5px">Emai</th>
                    <th style="border: 1px solid black; padding: 5px">Số điện thoại</th>
                    <th style="border: 1px solid black; padding: 5px">Loại</th>
                    <th style="border: 1px solid black; padding: 5px">Ngày tạo</th>
                    <th style="border: 1px solid black; padding: 5px"; width: 70px;>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                ${forTable}
            </tbody>
        </table>
        <span style="padding: 40px ; float: right;">....., ngày..., tháng..., năm 20..</span>
      </div>`

                const response = await userService.exportPdf({ data: template })
                const blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                // console.log(blob)
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                // console.log(link)
                link.href = url;
                link.setAttribute('download', 'listproduct.pdf')
                document.body.appendChild(link)
                link.click()
            } else {
                alert('Không có sản phẩm nào được chọn!')
            }
        },
        disableRow(rowNumber) {
            this.rows[rowNumber].disabled = true;
        },
        
    },
    mounted() {
        this.getProPanigation()
    }
}
</script>
<style scoped>@import url(../../assets/adminUser.css);</style>