<template>
    <div class="staff-page-wrapper">
        <div class="list-product-title pb-1"><span>Danh sách nhân viên</span></div>
        <div class="d-flex justify-content-between mt-2 me-3">
            <div class="pe-2 ps-2 ms-3 add-inputproduct-form" style="width: auto;" @click="isFormAddStaff = true">
                <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <span>Thêm mới</span>
            </div>
            <div class="d-flex">
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" @click="exportPdf">
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
        <div class="content-staff mt-2">
            <div class="user-page-table table-staff mt-0">
                <div class="row user-page-table-header">
                    <div class="col-1">
                        Hành động
                    </div>
                    <div class="col-2">
                        <div class="table-head-page-staff">
                            <div  class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Email đăng nhập</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="p-2 sortName" @click="sortedEmail(1)">Từ Z - A</li>
                                <li class="p-2 sortName" @click="sortedEmail(2)">Từ Z - A</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchText" @input="filteredUserEmail" placeholder="Tìm kiếm"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="table-head-page-staff">
                            <div  class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Họ & Tên</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="p-2 sortName" @click="sortedFullName(1)">Từ Z - A</li>
                                <li class="p-2 sortName" @click="sortedFullName(2)">Từ Z - A</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchFullname" @input="filteredFullName" placeholder="Tìm kiếm"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1">
                        <div class="table-head-page-staff">
                            <div  class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Giới tính</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="p-2 sortName" @click="sortedGender(1)">Nam</li>
                                <li class="p-2 sortName" @click="sortedGender(2)">Nữ</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1">
                        <div class="table-head-page-staff">
                            <div  class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Phòng ban</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchDepartment" @input="filteredDepartment" placeholder="Tìm kiếm"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1">
                        <div class="table-head-page-staff">
                            <div  class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Chức vụ</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchPosition" @input="filteredPosition" placeholder="Tìm kiếm"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1 ">
                        <div class="table-head-page-staff">
                            <div  class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">SĐT</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchSDT" @input="filteredPhoneNumber" placeholder="Tìm kiếm"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-2 ">
                        <div class="table-head-page-staff">
                            <div  class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Địa chỉ</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchAddress" @input="filteredAddress" placeholder="Tìm kiếm"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1 ">
                        <div class="table-head-page-staff">
                            <div  >Ngày sinh</div>
                            
                        </div>
                    </div>
                </div>
                <div class="row user-page-table-body" v-for="staff in staffs" :key="staff._id">
                    <div class="col-1 text-center d-flex">

                        <div class="add-role ms-1" @click="getStaffByIdUpdate(staff._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                            </svg>
                        </div>
                        <div class="up-staff ms-2" @click="getStaffById(staff._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
                            </svg>
                        </div>

                    </div>
                    <div class="col-2">
                        {{ staff.userId.email }}
                    </div>
                    <div class="col-2">
                        {{ staff.userId.fullName }}
                    </div>
                    <div class="col-1">
                        {{ staff.gender }}
                    </div>
                    <div class="col-1">
                        {{ staff.departmentId.name }}
                    </div>
                    <div class="col-1">
                        {{ staff.position }}
                    </div>
                    <div class="col-1 ">
                        {{ staff.userId.phoneNumber }}
                    </div>
                    <div class="col-2 ">
                        {{ staff.address }}
                    </div>
                    <div class="col-1 ">
                        {{ formatDateNoTime(staff.birthday) }}
                    </div>

                </div>
                <div class="pos-nagination ">
                    <ul class="pagination d-flex justify-content-center">
                        <li class="page-item">
                            <span class="page-link" @click="handlePage(1)">&laquo;</span>
                        </li>
                        <li class="page-item">
                            <span class="page-link">...</span>
                        </li>
                        <li class="page-item" v-for="index in lengthPage" :key="index">
                            <span class="page-link" :class="{ active_page: activePage === index }"
                                @click="handlePage(index)">{{
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
        <div class="overlay" v-if="isFormAddStaff">
            <div class="form-add-staff p-0">
                <form action="" @submit.prevent="addStaff">
                    <div class="form-add-staff-title">
                        <div class="d-flex justify-content-between">
                            <h5>Thêm mới nhân viên</h5>
                            <div class="d-flex submit-remove-addstaff">
                                <button type="submit" class="submit-addstaff">Lưu</button>
                                <div class="close-addstaff" @click="closeFormAddStaff">Trở về</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-add-staff-content">
                        <div class="title-infor-staff">
                            <span>Thông tin nhân viên</span>
                        </div>
                        <div class="row p-3">
                            <div class="col-4">
                                <div class="add-staff-content-row">
                                    <label for="">Email đăng nhập<span class="span-requied">*</span></label>
                                    <input type="email" v-model="dataCreate.email" placeholder="Nhập email..." required>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">SĐT<span class="span-requied">*</span></label>
                                    <input type="text" v-model="dataCreate.phoneNumber" placeholder="Nhập sdt..." required>
                                </div>
                                <span class="err-pass show-error-phoneNumber" v-if="!!valid.phoneNumber">{{
                                    valid.phoneNumber }}</span>
                                <div class="add-staff-content-row">
                                    <label for="">Mật khẩu<span class="span-requied">*</span></label>
                                    <input type="password" v-model="dataCreate.password" placeholder="Nhập mật khẩu..."
                                        required>
                                </div>
                                <span class="err-pass show-error-phoneNumber" v-if="!!valid.passWord">{{ valid.passWord
                                }}</span>
                                <div class="add-staff-content-row">
                                    <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                    <input type="text" v-model="dataCreate.fullName" placeholder="Nhập họ & tên..."
                                        required>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày sinh<span class="span-requied">*</span></label>
                                    <input type="date" v-model="dataCreate.birthday" required>
                                </div>
                                <div class="add-staff-content-row">
                                    <div class="d-flex">
                                        <label for="">Phòng ban<span class="span-requied">*</span></label>
                                        <div class="ms-1" @click="isFormDepartment = true"><svg style="fill: blue;"
                                                xmlns="http://www.w3.org/2000/svg" height="1em"
                                                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                <path
                                                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
                                            </svg></div>
                                        <select name="" id="" v-model="dataCreate.departmentId" required>
                                            <option value="" selected>Chọn phòng ban</option>
                                            <option v-for="department in departments" :key="department._id"
                                                :value="department._id">{{ department.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Vị trí<span class="span-requied">*</span></label>
                                    <input type="text" v-model="dataCreate.position" placeholder="Nhập vị trí..." required>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Trình độ học vấn<span class="span-requied">*</span></label>
                                    <input type="text" v-model="dataCreate.academic" placeholder="Nhập học vị..." required>
                                </div>
                            </div>
                            <div class="col-4">

                                <div class="add-staff-content-row">
                                    <label for="">Ngày vào công ty<span class="span-requied">*</span></label>
                                    <input type="date" v-model="dataCreate.dateOfJoin" required>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày thử việc<span class="span-requied">*</span></label>
                                    <input type="date" v-model="dataCreate.probationaryDate" required>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày chính thức<span class="span-requied">*</span></label>
                                    <input type="date" v-model="dataCreate.officialDate" required>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Địa chỉ thường trú<span class="span-requied">*</span></label>
                                    <input type="text" v-model="dataCreate.address" placeholder="Nhập địa chỉ..." required>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Email cá nhân<span class="span-requied">*</span></label>
                                    <input type="text" v-model="dataCreate.personalEmail" placeholder="Nhập đĩa chỉ..."
                                        required>
                                </div>
                                <div class="add-staff-content-row d-flex">
                                    <label for="">Nam/Nữ<span class="span-requied">*</span></label>
                                    <div class="check-nam-nu">
                                        <input type="radio" name="gender" value="Nam" v-model="dataCreate.gender" required>
                                        <label for="">Nam</label>
                                    </div>
                                    <div class="ms-4">
                                        <input type="radio" name="gender" value="Nu" v-model="dataCreate.gender" required>
                                        <label for="">Nữ</label>
                                    </div>
                                </div>
                                <div class="add-staff-content-row d-flex">
                                    <label for="">Phân quyền</label>
                                    <div>
                                        <input class="decentralization-input" type="checkbox"
                                            @change="(event) => toggleFormRole(event)">
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 add-staff-content-showrole" v-if="isFormRole">
                                <div>
                                    <span>Tất cả các quyền</span>
                                </div>
                                <div class="">
                                    <input type="checkbox" style="width: 16px; height: 16px;"
                                        @change="(event) => checkedAll(event)">
                                    <label class="ms-2" for="">chọn tất cả</label>
                                </div>
                                <div class="row-role-scroll">
                                    <div class="row h-25">
                                        <div class="col-6 mt-1 d-flex align-items-center" v-for="role in roles"
                                            :key="role._id">
                                            <div>{{ role.name }}</div>
                                            <input class="ms-2" style="width: 16px; height: 16px;" type="checkbox"
                                                v-model="role.ischecked">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="overlay" v-if="isFormDepartment">
            <div class="form-addCategory">
                <form action="" @submit.prevent="createDepartment">
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Thêm mới phòng ban</h4>
                        <div class="mb-1" style="cursor: pointer;" @click="isFormDepartment = false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="p-3  d-grid name-category">
                        <label for="">Tên phòng ban <span class="span-requied">*</span></label>
                        <input type="text" class="set-right-input" v-model="department" placeholder="Nhập tên phòng ban">
                    </div>
                    <button class="submit-add-brand">Create</button>
                </form>
            </div>
        </div>
        <div class="overlay" v-if="isScreenDetailStaff">
            <div class="form-add-staff p-0">
                <div action="">
                    <div class="form-add-staff-title">
                        <div class="d-flex justify-content-between">
                            <h5>Chi tiết</h5>
                            <div class="d-flex submit-remove-addstaff">
                                <div class="exportFilePDF" @click="exportPdfDetail">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                                    </svg>
                                    PDF
                                </div>
                                <div class="close-addstaff" @click="isScreenDetailStaff = false">Trở về</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-add-staff-content">
                        <div class="title-infor-staff">
                            <span>Thông tin nhân viên</span>
                        </div>
                        <div class="row p-3">
                            <div class="col-4">
                                <div class="add-staff-content-row">
                                    <label for="">Email đăng nhập<span class="span-requied">*</span></label>
                                    <input type="email" v-model="staffById.userId.email" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">SĐT<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffById.userId.phoneNumber" disabled>
                                </div>
                                <!-- <span class="err-pass show-error-phoneNumber" v-if="!!valid.phoneNumber">{{ valid.phoneNumber }}</span> -->

                                <!-- <span class="err-pass show-error-phoneNumber" v-if="!!valid.passWord">{{ valid.passWord }}</span> -->
                                <div class="add-staff-content-row">
                                    <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffById.userId.fullName" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày sinh<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffById.birthday" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <div class="d-flex">
                                        <label for="">Phòng ban<span class="span-requied">*</span></label>
                                        <select style="margin-left: 85px;" name="" id="" v-model="staffById.departmentId"
                                            disabled>
                                            <option :value="staffById.departmentId" selected>Chọn phòng ban</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Vị trí<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffById.position" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Trình độ học vấn<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffById.academic" disabled>
                                </div>
                            </div>
                            <div class="col-4">

                                <div class="add-staff-content-row">
                                    <label for="">Ngày vào công ty<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffById.dateOfJoin" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày thử việc<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffById.probationaryDate" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày chính thức<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffById.officialDate" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Địa chỉ thường trú<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffById.address" disabled>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Email cá nhân<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffById.personalEmail" disabled>
                                </div>
                                <div class="add-staff-content-row d-flex">
                                    <label for="">Nam/Nữ<span class="span-requied">*</span></label>
                                    <div class="check-nam-nu">
                                        <input type="radio" name="gender" value="Nam" v-model="staffById.gender" disabled>
                                        <label for="">Nam</label>
                                    </div>
                                    <div class="ms-4">
                                        <input type="radio" name="gender" value="Nu" v-model="staffById.gender" disabled>
                                        <label for="">Nữ</label>
                                    </div>
                                </div>
                                <div class="add-staff-content-row d-flex">
                                    <label for="">Phân quyền</label>
                                    <div>
                                        <input class="decentralization-input" type="checkbox" :checked="true" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 add-staff-content-showrole">
                                <div>
                                    <span>Tất cả các quyền</span>
                                </div>

                                <div class="row-role-scroll">
                                    <div class="row h-25">
                                        <div class="col-6 mt-1 d-flex align-items-center" v-for="role in roles"
                                            :key="role._id">
                                            <div>{{ role.name }}</div>
                                            <input class="ms-2" style="width: 16px; height: 16px;" type="checkbox"
                                                v-model="role.ischecked"
                                                :checked="staffById.userId.roles.some(e => e.roleId == role._id)" disabled>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isEditDetailStaff">
            <div class="form-add-staff p-0">
                <form action="" @submit.prevent="updateStaff">
                    <div class="form-add-staff-title">
                        <div class="d-flex justify-content-between">
                            <h5>Sửa thông tin</h5>
                            <div class="d-flex submit-remove-addstaff">
                                <button type="submit" class="submit-addstaff">Lưu</button>
                                <div class="close-addstaff" @click="isEditDetailStaff = false">Trở về</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-add-staff-content">
                        <div class="title-infor-staff">
                            <span>Thông tin nhân viên</span>
                        </div>
                        <div class="row p-3">
                            <div class="col-4">
                                <div class="add-staff-content-row">
                                    <label for="">Email đăng nhập<span class="span-requied">*</span></label>
                                    <input type="email" v-model="staffByIdUpdate.userId.email">
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">SĐT<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffByIdUpdate.userId.phoneNumber">
                                </div>
                                <!-- <span class="err-pass show-error-phoneNumber" v-if="!!valid.phoneNumber">{{ valid.phoneNumber }}</span> -->

                                <!-- <span class="err-pass show-error-phoneNumber" v-if="!!valid.passWord">{{ valid.passWord }}</span> -->
                                <div class="add-staff-content-row">
                                    <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffByIdUpdate.userId.fullName">
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày sinh<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffByIdUpdate.birthday">
                                </div>
                                <div class="add-staff-content-row">
                                    <div class="d-flex">
                                        <label for="">Phòng ban<span class="span-requied">*</span></label>
                                        <div class="ms-1" @click="isFormDepartment = true"><svg style="fill: blue;"
                                                xmlns="http://www.w3.org/2000/svg" height="1em"
                                                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                <path
                                                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
                                            </svg></div>
                                        <select name="" id="" v-model="staffByIdUpdate.departmentId._id">
                                            <!-- <option value="" selected>Chọn phòng ban</option> -->
                                            <option v-for="department in departments" :key="department._id"
                                                :value="department._id">{{ department.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Vị trí<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffByIdUpdate.position">
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Trình độ học vấn<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffByIdUpdate.academic">
                                </div>
                            </div>
                            <div class="col-4">

                                <div class="add-staff-content-row">
                                    <label for="">Ngày vào công ty<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffByIdUpdate.dateOfJoin">
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày thử việc<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffByIdUpdate.probationaryDate">
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Ngày chính thức<span class="span-requied">*</span></label>
                                    <input type="date" v-model="staffByIdUpdate.officialDate">
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Địa chỉ thường trú<span class="span-requied">*</span></label>
                                    <input type="text" v-model="staffByIdUpdate.address">
                                </div>
                                <div class="add-staff-content-row">
                                    <label for="">Email cá nhân<span class="span-requied">*</span></label>
                                    <input type="email" v-model="staffByIdUpdate.personalEmail">
                                </div>
                                <div class="add-staff-content-row d-flex">
                                    <label for="">Nam/Nữ<span class="span-requied">*</span></label>
                                    <div class="check-nam-nu">
                                        <input type="radio" name="gender" value="Nam" v-model="staffByIdUpdate.gender">
                                        <label for="">Nam</label>
                                    </div>
                                    <div class="ms-4">
                                        <input type="radio" name="gender" value="Nu" v-model="staffByIdUpdate.gender">
                                        <label for="">Nữ</label>
                                    </div>
                                </div>
                                <div class="add-staff-content-row d-flex">
                                    <label for="">Phân quyền</label>
                                    <div>
                                        <input class="decentralization-input" type="checkbox">
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 add-staff-content-showrole">
                                <div>
                                    <span>Tất cả các quyền</span>
                                </div>
                                <div class="">
                                    <input type="checkbox" style="width: 16px; height: 16px;"
                                        @change="(event) => checkedAll(event)">
                                    <label class="ms-2" for="">chọn tất cả</label>
                                </div>
                                <div class="row-role-scroll">
                                    <div class="row h-25">
                                        <div class="col-6 mt-1 d-flex align-items-center" v-for="role in roles"
                                            :key="role._id">
                                            <div>{{ role.name }}</div>
                                            <input class="ms-2" style="width: 16px; height: 16px;" type="checkbox"
                                                @change="(event) => checkedAcess(role._id, event)"
                                                :checked="staffByIdUpdate.userId.roles.some(staff => staff.roleId == role._id)">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import roleService from '../../services/role.service'
import departmentService from '../../services/department.service'
import staffService from '../../services/staff.service'
import * as XLSX from 'xlsx'
import dayjs from 'dayjs';
export default {
    data() {
        return {
            isFormRole: false,
            roles: {},
            departments: {},
            ischecked: false,
            dataCreate: {
                departmentId: '',
                roles: []
            },
            department: '',
            isFormDepartment: false,
            isFormAddStaff: false,
            valid: {
                phoneNumber: '',
                passWord: ''
            },
            staffs: {},
            staffById: {},
            staffByIdUpdate: {
            },
            isScreenDetailStaff: false,
            isEditDetailStaff: false,
            isCheckedUpdate: false,
            activePage: 1,
            lengthPage: 1,
            searchText: '',
            searchFullname: '',
            searchDepartment: '',
            searchPosition: '',
            searchSDT: '',
            searchAddress: '',
        }
    },
    methods: {
        toggleFormRole(event) {
            if (event.target.checked) {
                this.isFormRole = true
            } else {
                this.isFormRole = false
            }
        },
        async getAllRole() {
            const response = await roleService.getAll()
            this.roles = response.data
        },
        checkedAll(event) {
            if (event.target.checked) {
                this.roles.forEach(role => {
                    role.ischecked = true
                })
            } else {
                this.roles.forEach(role => {
                    role.ischecked = false
                })
            }
        },
        async getAllDepartment() {
            const response = await departmentService.getAll()
            // console.log(response)
            this.departments = response
        },
        async createDepartment() {
            const name = this.department
            const response = await departmentService.create({ name })
            if (response.data.status) {
                alert(response.data.mes)
                this.isFormDepartment = false
                this.department = ''
            } else {
                alert(response.data.mes)
                this.department = ''
            }
        },
        async addStaff() {
            // this.roles.forEach(role => {
            //         if (role.ischecked == true) {
            //             this.dataCreate.roles.push({
            //                 roleId: role._id
            //             })
            //             // console.log(role._id)
            //         }
            //     })
            //     console.log(this.dataCreate)
            // console.log(this.validate(this.dataCreate))
            this.roles.forEach(role => {
                if (role.ischecked == true) {
                    this.dataCreate.roles.push({
                        roleId: role._id
                    })
                    // console.log(role._id)
                }
            })
            // console.log(this.dataCreate)
            if (this.validate(this.dataCreate) == true) {
                const response = await staffService.create(this.dataCreate)
                if (response.data.status) {
                    alert(response.data.mes)
                    this.dataCreate = {
                        departmentId: '',
                        roles: []
                    }
                    // console.log(this.dataCreate)
                    this.isFormAddStaff = false
                    this.roles.forEach(role => {
                        role.ischecked = false
                    })
                    this.getAllStaff(1)
                } else {
                    alert(response.data.mes)
                }
            } else {
                this.dataCreate.roles = []
            }
        },
        closeFormAddStaff() {
            this.isFormAddStaff = false
            this.dataCreate = {
                departmentId: '',
                roles: []
            }
            this.isFormRole = false
            this.roles.forEach(role => {
                role.ischecked = false
            })
        },
        validate({ password, phoneNumber }) {

            if (
                !phoneNumber ||
                !phoneNumber.match(/^(03[2-9]|05[2-9]|07[0-9]|08[1-9]|09[0-9]|01[2|6|8|9])+([0-9]{7})\b$/)
            ) {
                this.valid.phoneNumber = 'Số điện thoại không hợp lệ';
            } else {
                this.valid.phoneNumber = false;
            }
            if (!password || !password.match(/^[A-Za-z0-9]{8,}$/)) {
                this.valid.passWord = 'Mật khẩu ít nhất 8 kí tự';
            } else {
                this.valid.passWord = false;
            }
            if (this.valid.phoneNumber == false && this.valid.passWord == false) {
                return true
            } else {
                return false
            }
            // return this.isValid
            // console.log(this.isValid)
        },
        async getAllStaff(pageNumber = 1) {
            try {
                const length = await staffService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await staffService.getAll(pageNumber, 10)
                this.staffs = response.data
                // console.log(this.products)
            } catch (error) {
                console.log(error);
            }
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        handlePage(index) {
            this.activePage = index
            this.getAllStaff(index)
        },
        exportExcel() {
            const filename = 'listStaff'
            let data = []
            this.staffs.forEach(e => {
                data.push([
                    e.userId.email,
                    e.userId.fullName,
                    e.gender,
                    e.departmentId.name,
                    e.position,
                    e.userId.phoneNumber,
                    e.address,
                    e.personalEmail,
                    e.academic,
                    this.formatDateNoTime(e.birthday),
                    this.formatDateNoTime(e.dateOfJoin),
                    this.formatDateNoTime(e.probationaryDate),
                    this.formatDateNoTime(e.officialDate),
                ])
            })

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 30 }, { width: 30 }, { width: 10 }, { width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }];
            ws['A1'] = { v: 'Email đăng nhập' };
            ws['B1'] = { v: 'Họ & Tên' };
            ws['C1'] = { v: 'Giới tính' };
            ws['D1'] = { v: 'Phòng ban' };
            ws['E1'] = { v: 'Chức vụ' };
            ws['F1'] = { v: 'SĐT' };
            ws['G1'] = { v: 'Địa chỉ' };
            ws['H1'] = { v: 'Email cá nhân' };
            ws['I1'] = { v: 'Trình độ học vấn' };
            ws['J1'] = { v: 'Ngày sinh' };
            ws['K1'] = { v: 'Ngày vào cty' };
            ws['L1'] = { v: 'Ngày thực tập' };
            ws['M1'] = { v: 'Ngày chính thức' };
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
            if (this.staffs.length > 0) {
                let forTable = ''

                this.staffs.forEach(staff => {
                    forTable +=
                        `<tr>
                        <td style="border: 1px solid black; padding: 5px">${staff.userId.email}</td>
                        <td style="border: 1px solid black; padding: 5px">${staff.userId.fullName}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${staff.gender}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${staff.departmentId.name}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: center">${staff.position}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${staff.userId.phoneNumber}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${staff.address}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatDateNoTime(staff.birthday)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatDateNoTime(staff.dateOfJoin)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatDateNoTime(staff.probationaryDate)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatDateNoTime(staff.officialDate)}</td>
                        
                    </tr>`
                })
                // console.log(forTable)
                const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 297mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 50px; padding-left: 50px;">Danh sách nhân viên</h3>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 5px">Email đăng nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Họ & Tên</th>
                    <th style="border: 1px solid black; padding: 5px">Giới tính</th>
                    <th style="border: 1px solid black; padding: 5px">Phòng ban</th>
                    <th style="border: 1px solid black; padding: 5px">Chức vụ</th>
                    <th style="border: 1px solid black; padding: 5px";>SĐT</th>
                    <th style="border: 1px solid black; padding: 5px";>Địa chỉ</th>
                    <th style="border: 1px solid black; padding: 5px";>Ngày sinh</th>
                    <th style="border: 1px solid black; padding: 5px";>Ngày vào cty</th>
                    <th style="border: 1px solid black; padding: 5px";>Ngày thực tập</th>
                    <th style="border: 1px solid black; padding: 5px";>Ngày chính thức</th>
                </tr>
            </thead>
            <tbody>
                ${forTable}
            </tbody>
        </table>
        <span style="padding: 40px ; float: right;">....., ngày..., tháng..., năm 20..</span>
      </div>`

                const response = await staffService.exportPdf({ data: template })
                const blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                // console.log(blob)
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                // console.log(link)
                link.href = url;
                link.setAttribute('download', 'listStaff.pdf')
                document.body.appendChild(link)
                link.click()
            } else {
                alert('Không có nhân viên nào được chọn!')
            }
        },
        async getStaffById(id) {
            const response = await staffService.findById({ id })
            // this.staffById = response.data.result
            if (response.data.status) {
                this.staffById = response.data.result
                this.isScreenDetailStaff = true
                // console.log(this.staffById.birthday)
                this.staffById.birthday = dayjs(`${this.staffById.birthday}`);
                this.staffById.birthday = this.staffById.birthday.format('YYYY-MM-DD');

                this.staffById.dateOfJoin = dayjs(`${this.staffById.dateOfJoin}`);
                this.staffById.dateOfJoin = this.staffById.dateOfJoin.format('YYYY-MM-DD');

                this.staffById.probationaryDate = dayjs(`${this.staffById.probationaryDate}`);
                this.staffById.probationaryDate = this.staffById.probationaryDate.format('YYYY-MM-DD');

                this.staffById.officialDate = dayjs(`${this.staffById.officialDate}`);
                this.staffById.officialDate = this.staffById.officialDate.format('YYYY-MM-DD');

                // console.log(this.staffById.userId.roles)
            } else {
                alert(response.data.mes)
            }
        },
        async getStaffByIdUpdate(id) {
            const response = await staffService.findById({ id })
            // this.staffById = response.data.result
            if (response.data.status) {
                this.staffByIdUpdate = response.data.result
                this.isEditDetailStaff = true
                // console.log(this.staffByIdUpdate.birthday)
                this.staffByIdUpdate.birthday = dayjs(`${this.staffByIdUpdate.birthday}`);
                this.staffByIdUpdate.birthday = this.staffByIdUpdate.birthday.format('YYYY-MM-DD');

                this.staffByIdUpdate.dateOfJoin = dayjs(`${this.staffByIdUpdate.dateOfJoin}`);
                this.staffByIdUpdate.dateOfJoin = this.staffByIdUpdate.dateOfJoin.format('YYYY-MM-DD');

                this.staffByIdUpdate.probationaryDate = dayjs(`${this.staffByIdUpdate.probationaryDate}`);
                this.staffByIdUpdate.probationaryDate = this.staffByIdUpdate.probationaryDate.format('YYYY-MM-DD');

                this.staffByIdUpdate.officialDate = dayjs(`${this.staffByIdUpdate.officialDate}`);
                this.staffByIdUpdate.officialDate = this.staffByIdUpdate.officialDate.format('YYYY-MM-DD');

                // console.log(this.staffByIdUpdate)

            } else {
                alert(response.data.mes)
            }
        },
        async updateStaff() {

            const response = await staffService.update(this.staffByIdUpdate)
            if (response.data.status == true) {
                alert(response.data.mes)
                this.isEditDetailStaff = false
                this.getAllStaff(1)

            } else {
                alert(response.data.mes)
            }
        },
        checkedAcess(ProId, event) {
            // console.log(ProId)
            if (event.target.checked) {
                this.staffByIdUpdate.userId.roles.push({ roleId: ProId })
            } else {
                // const aaa = roleId.ProId
                const result = this.staffByIdUpdate.userId.roles.findIndex((item) => item.roleId === ProId)
                console.log(result)
                this.staffByIdUpdate.userId.roles = this.staffByIdUpdate.userId.roles.filter((item, index) => index !== result)

            }
            // console.log(this.staffByIdUpdate.userId.roles)
            return this.staffByIdUpdate.userId.roles

        },
        async exportPdfDetail() {

            let forRole = 0
            this.staffById.userId.roles.forEach(() => {
                forRole += 1
            })
            const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 50px; padding-left: 50px;">Thông tin nhân viên</h3>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            
            <tbody>
                <tr>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;">Email đăng nhập</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.userId.email}</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;" >Ngày vào Cty</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.dateOfJoin}</td>                   
                </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;">Số điện thoại</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.userId.phoneNumber}</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;" >Ngày thử việc</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.probationaryDate}</td>                   
                </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;">Họ & Tên</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.userId.fullName}</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;" >Ngày chính thức</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.officialDate}</td>                   
                </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;">Ngày sinh</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.birthday}</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;" >Địa chỉ</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.address}</td>                   
                </tr>
            </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;">Phòng ban</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.departmentId.name}</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;" >Email cá nhân</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.personalEmail}</td>                   
                </tr>
            </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;">Vị trí</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.position}</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;" >Giới tính</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.gender}</td>                   
                </tr>
            </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;">Trình độ học vấn</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${this.staffById.academic}</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%;  font-weight: 600;" >Số lượng quyền</td>
                    <td style="border: 1px solid black; padding: 5px; width: 25%; text-align: right">${forRole}</td>                   
                </tr>
            </tbody>
        </table>
        <span style="padding: 40px ; float: right;">....., ngày..., tháng..., năm 20..</span>
      </div>`

            const response = await staffService.exportPdfDetail({ data: template })
            const blob = new Blob([response.data], {
                type: 'application/pdf'
            })
            // console.log(blob)
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            // console.log(link)
            link.href = url;
            link.setAttribute('download', 'detailStaff.pdf')
            document.body.appendChild(link)
            link.click()

        },
        async filteredUserEmail() {
            if (!this.searchText) return this.getAllStaff(1);

            else {
                const regex = new RegExp(this.searchText.trim(), 'i');
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    regex.test(staff.userId.email)
                );
            }
        },
        defaultSearch() {
            this.searchText = ''
            this.searchFullname = ''
            this.searchDepartment = ''
            this.searchPosition = ''
            this.searchSDT = ''
            this.searchAddress = ''
            this.getAllStaff(1)
        },
        sortedEmail(is) {
            if (is == 1) {
                return this.staffs.sort((a, b) => a.userId.email.localeCompare(b.userId.email));
            } else {
                return this.staffs.sort((a, b) => b.userId.email.localeCompare(a.userId.email));
            }
        },
        sortedFullName(is) {
            if (is == 1) {
                return this.staffs.sort((a, b) => a.userId.fullName.localeCompare(b.userId.fullName));
            } else {
                return this.staffs.sort((a, b) => b.userId.fullName.localeCompare(a.userId.fullName));
            }
        },
        async filteredFullName() {
            if (!this.searchFullname) return this.getAllStaff(1);

            else {
                const regex = new RegExp(this.searchFullname.trim(), 'i');
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    regex.test(staff.userId.fullName)
                );
            }
        },
        async sortedGender(is) {
            if (is == 1) {
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    staff.gender == 'Nam'
                );
            } else {
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    staff.gender == 'Nu'
                );
            }
        },
        async filteredDepartment() {
            if (!this.searchDepartment) return this.getAllStaff(1);

            else {
                const regex = new RegExp(this.searchDepartment.trim(), 'i');
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    regex.test(staff.departmentId.name)
                );
            }
        },
        async filteredPosition() {
            if (!this.searchPosition) return this.getAllStaff(1);

            else {
                const regex = new RegExp(this.searchPosition.trim(), 'i');
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    regex.test(staff.position)
                );
            }
        },
        async filteredPhoneNumber() {
            if (!this.searchSDT) return this.getAllStaff(1);

            else {
                const regex = new RegExp(this.searchSDT.trim(), 'i');
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    regex.test(staff.userId.phoneNumber)
                );
            }
        },
        async filteredAddress() {
            if (!this.searchAddress) return this.getAllStaff(1);

            else {
                const regex = new RegExp(this.searchAddress.trim(), 'i');
                await this.getAllStaff(1)
                this.staffs = this.staffs.filter((staff) =>
                    regex.test(staff.address)
                );
            }
        },
    },
    mounted() {
        this.getAllRole()
        this.getAllDepartment()
        this.getAllStaff()
    }
}
</script>





<style scoped>@import url(../../assets/adminStaff.css);</style>