<template>
    <div class="addorder-page-wrapper">
        <div class="addorder-page-title">
            <h4>Hóa đơn bán hàng</h4>
        </div>
        <div class="d-flex choose-order ms-4">
            <router-link to="/admin/addorder" class="active-order-page">
                <div class="pt-1">Bán hàng
                </div>
            </router-link>
            <router-link to="/admin/addorderrepair" class="ms-2"><div class=" pt-1">Sửa chữa</div></router-link>

        </div>
        <div class="addorder-page-content mt-2">
            <div class="addorder-content-title">
                <h6>Tạo hóa đơn (bán hàng)</h6>
            </div>
            <form action="" @submit.prevent="createOrder">
                <div class="addorder-form-infor-customer">
                    <div class="form-infor-customer-title">Thông tin khách hàng</div>
                    <div class="d-flex choose-customer">
                        <div class="pt-1" @click="noCustomer" :class="{ activecustomer: !isCheckCustomer }">Chưa có
                        </div>
                        <div class="ms-3 pt-1" @click="clickChooseCustomer" :class="{ activecustomer: isCheckCustomer }">Đã
                            có</div>
                        <select v-model="dataCreateOrder.customerID" v-if="isCheckCustomer"
                            @change="getIDCustomer(dataCreateOrder.customerID)" required>
                            <option value="" selected>Chọn tài khoản</option>
                            <option v-for="customer in customers" :key="customer._id" :value="customer._id">{{
                                customer.name }} - {{ customer.phoneNumber }}</option>
                        </select>
                    </div>
                    <div class="row mt-2">
                        <div class="col-5">
                            <div class="form-infor-customer-input">
                                <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                <input type="text" v-model="dataCreateOrder.name" placeholder="Nhập họ & tên" required>
                            </div>
                            <div class="form-infor-customer-input">
                                <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                <input type="text" v-model="dataCreateOrder.phoneNumber" placeholder="Nhập sđt" required>
                            </div>
                            <span class="mesPhoneFail" v-if="!!mesPhoneFail">{{ mesPhoneFail }}</span>
                            <div class="form-infor-customer-input">
                                <label for="">Email</label>
                                <input type="email" v-model="dataCreateOrder.email" placeholder="Nhập email">
                            </div>
                            <div class="form-infor-customer-input">
                                <label for="">Địa chỉ</label>
                                <input type="text" v-model="dataCreateOrder.address" placeholder="Nhập địa chỉ">
                            </div>
                        </div>
                        <div class="col form-customer-note">
                            <label for="">Ghi chú:</label>
                            <textarea cols="80" v-model="dataCreateOrder.notes" placeholder="Ghi chú (nếu có)"></textarea>
                        </div>
                    </div>

                </div>
                <div class="m-3" v-for="(div, index) in dataCreateOrder.ListProducts" :key="index">
                    <div class="addorder-form-products row">
                        <div class="col-2 d-grid">
                            <label for="">Loại sản phẩm</label>
                            <select v-model="div.productType" required>
                                <option value="" selected>Chọn loại</option>
                                <option value="product">Xe</option>
                                <option value="accessory">Phụ kiện</option>
                            </select>
                        </div>
                        <div class="col-4 d-grid" v-if="div.productType == 'product'">
                            <label for="">Tên sản phẩm</label>
                            <select v-model="div.productId" @change="getId(div.productId, 'product', index)" required>
                                <option value="" selected>Chọn sản phẩm</option>
                                <option v-for="product in products" :key="product._id" :value="product._id">{{
                                    product.name
                                }}</option>
                            </select>
                        </div>
                        <div class="col-4 d-grid" v-else>
                            <label for="">Tên sản phẩm</label>
                            <select v-model="div.productId" @change="getId(div.productId, 'accessory', index)" required>
                                <option value="" selected>Chọn sản phẩm</option>
                                <option v-for="accessory in accessories" :key="accessory._id" :value="accessory._id">{{
                                    accessory.name }}</option>
                            </select>
                        </div>
                        <div class="col-3 d-grid">
                            <label for="">Giá bán</label>
                            <input type="text" v-model="div.salePrice" disabled placeholder="VND">
                        </div>
                        <div class="col-3 d-grid">
                            <label for="">Số lượng</label>
                            <input type="number" v-model="div.saleQuantity"
                                @input="checkSaleQuantity(index, div.saleQuantity)" placeholder="0" required>
                        </div>
                        <div class="error-checkquantity" v-if="!!div.mesMaxQuantity">
                            <div style="width: 265px;">{{ div.mesMaxQuantity }}</div>
                        </div>
                    </div>
                </div>
                <div class="add-remove-button-addorder">
                    <svg @click="addDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <svg @click="removeDiv" class="p-1 ms-4" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </div>
                <div class="m-3 form-paymethods">
                    <label for="">Phương thức thanh toán</label>
                    <div class="metods-pay">
                        <div class=" pay-cash">
                            <input type="radio" name="paymethod" value="paycash" v-model="dataCreateOrder.methodPay"
                                required>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96z" />
                            </svg>
                            <label for="">Thanh toán bằng tiền mặt</label>
                        </div>
                        <div class=" pay-vnpay">
                            <input type="radio" name="paymethod" value="vnpay" v-model="dataCreateOrder.methodPay" required>
                            <img src="https://vnpayqr.vn/wp-content/uploads/2021/10/Logo-VNPAY-QR.png" alt="">
                            <label for="">Thanh toán bằng ví VN Pay</label>
                        </div>
                        <div class="pay-momo">
                            <input type="radio" name="paymethod" value="momo" v-model="dataCreateOrder.methodPay"
                                required>
                            <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="jsx-ddfb0b416b0db288 mx-auto block h-10 w-10">
                                <path
                                    d="M0 8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8Z"
                                    fill="#A50064" class="jsx-ddfb0b416b0db288"></path>
                                <path
                                    d="M51.859 10C45.6394 10 40.5057 15.0349 40.5057 21.3533C40.5057 27.5729 45.5407 32.7065 51.859 32.7065C58.0786 32.7065 63.2123 27.6716 63.2123 21.3533C63.2123 15.1337 58.1774 10 51.859 10ZM51.859 26.1908C49.1935 26.1908 47.0215 24.0188 47.0215 21.3533C47.0215 18.6877 49.1935 16.5158 51.859 16.5158C54.5246 16.5158 56.6965 18.6877 56.6965 21.3533C56.6965 24.0188 54.5246 26.1908 51.859 26.1908Z"
                                    fill="white" class="jsx-ddfb0b416b0db288"></path>
                                <path
                                    d="M28.7576 10C26.8818 10 25.1048 10.5923 23.6239 11.6783C22.2418 10.5923 20.4648 10 18.4903 10C13.7515 10 10 13.8502 10 18.4903V32.7065H16.5158V18.4903C16.5158 17.4043 17.4043 16.6145 18.3915 16.6145C19.4775 16.6145 20.2673 17.503 20.2673 18.4903V32.7065H26.7831V18.4903C26.7831 17.4043 27.6716 16.6145 28.6589 16.6145C29.7448 16.6145 30.5346 17.503 30.5346 18.4903V32.7065H37.0504V18.589C37.2479 13.8502 33.4963 10 28.7576 10Z"
                                    fill="white" class="jsx-ddfb0b416b0db288"></path>
                                <path
                                    d="M51.859 37.6427C45.6394 37.6427 40.5057 42.6776 40.5057 48.996C40.5057 55.2156 45.5407 60.3492 51.859 60.3492C58.0786 60.3492 63.2123 55.3143 63.2123 48.996C63.2123 42.6776 58.1774 37.6427 51.859 37.6427ZM51.859 53.7347C49.1935 53.7347 47.0215 51.5628 47.0215 48.8972C47.0215 46.2317 49.1935 44.0598 51.859 44.0598C54.5246 44.0598 56.6965 46.2317 56.6965 48.8972C56.6965 51.6615 54.5246 53.7347 51.859 53.7347Z"
                                    fill="white" class="jsx-ddfb0b416b0db288"></path>
                                <path
                                    d="M28.7576 37.6427C26.8818 37.6427 25.1048 38.235 23.6239 39.321C22.2418 38.235 20.4648 37.6427 18.4903 37.6427C13.7515 37.6427 10 41.4929 10 46.133V60.3492H16.5158V46.0342C16.5158 44.9483 17.4043 44.1585 18.3915 44.1585C19.4775 44.1585 20.2673 45.047 20.2673 46.0342V60.2505H26.7831V46.0342C26.7831 44.9483 27.6716 44.1585 28.6589 44.1585C29.7448 44.1585 30.5346 45.047 30.5346 46.0342V60.2505H37.0504V46.133C37.2479 41.3942 33.4963 37.6427 28.7576 37.6427Z"
                                    fill="white" class="jsx-ddfb0b416b0db288"></path>
                            </svg>
                            <label for="">Thanh toán bằng ví MoMo</label>
                        </div>
                    </div>
                </div>
                <div class="form-addorder-submit">
                    <div class="d-flex">
                        <div>Tổng hóa đơn:</div>
                        <span>{{ dataCreateOrder.totalBill }}</span>
                    </div>
                    <button>Tạo</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import accessoryService from '../../services/acesstory.service';
import orderService from '../../services/order.service';
import productService from '../../services/product.service';
import customerService from '../../services/customer.service'
export default {
    data() {
        return {
            dataCreateOrder: {
                customerID: '',
                type: '',
                totalBill: 0,
                notes: '',
                ListProducts: [{
                    productType: '',
                    productId: '',
                    salePrice: null,
                    inputPrice: null,
                    saleQuantity: null,
                    quantityInStock: 0,
                    mesMaxQuantity: ''
                }]
            },
            products: {},
            accessories: {},
            salePrice: '',
            mesPhoneFail: '',
            checkQuantity: [],
            isQuantity: true,
            exportHTMLById: {},
            customers: {},
            isCheckCustomer: false,
            activeOrder: false,
        }
    },
    methods: {
        async createOrder() {
            // console.log(this.dataCreateOrder)
            this.checkQuantity.forEach(e => {
                if (e === false) {
                    this.isQuantity = false
                }
            })
            // console.log(this.isQuantity)
            this.dataCreateOrder.ListProducts.forEach(e => {
                this.dataCreateOrder.totalBill += e.salePrice * e.saleQuantity
            })
            // console.log(this.checkQuantity)
            if (!this.dataCreateOrder.phoneNumber || !this.dataCreateOrder.phoneNumber.match(/^(03[2-9]|05[2-9]|07[0-9]|08[1-9]|09[0-9]|01[2|6|8|9])+([0-9]{7})\b$/)) {
                this.mesPhoneFail = 'X'
            } else if (this.isQuantity === false) {
                alert('Vui lòng kiểm tra lại số lượng!')
                this.isQuantity = true
            } else if(this.dataCreateOrder.methodPay == 'momo' && (this.dataCreateOrder.totalBill <= 1000 || this.dataCreateOrder.totalBill > 50000000)) {
                alert('Tổng hóa đơn hiện vượt quá hạn mức. Quý khách hàng vui lòng thanh toán bằng phương thức khác. Xin cảm ơn!')
            }
            else {
                // alert('thanh toán thành công')
                this.mesPhoneFail = ''
                const response = await orderService.create(this.dataCreateOrder)
                if (this.dataCreateOrder.methodPay == 'paycash') {
                    if (response.data.status) {
                        alert(response.data.mes)
                        this.dataCreateOrder = {
                            totalBill: 0,
                            notes: '',
                            ListProducts: [{
                                productType: '',
                                productId: '',
                                salePrice: null,
                                saleQuantity: null,
                                inputPrice: null
                            }]
                        }
                    } else {
                        alert(response.data.mes)
                    }
                }
                else if(this.dataCreateOrder.methodPay == 'momo') {
                    // console.log(response.data)
                    const link = document.createElement('a')
                    // console.log(link)
                    link.href = response.data.payUrl;
                    // link.setAttribute('download', 'listproduct.pdf')
                    document.body.appendChild(link)
                    link.click()
                }
                else {
                    const link = document.createElement('a')
                    // console.log(link)
                    link.href = response.data;
                    // link.setAttribute('download', 'listproduct.pdf')
                    document.body.appendChild(link)
                    link.click()
                }
            }
        },
        addDiv() {
            this.dataCreateOrder.ListProducts.push({
                productType: '',
                productId: '',
                salePrice: '',
                saleQuantity: ''

            });
            // this.isPop = true
        },
        removeDiv() {
            if (this.dataCreateOrder.ListProducts.length > 1) {
                this.dataCreateOrder.ListProducts.pop();
            }
            // this.divs.pop();
        },
        async getAllProducts() {
            const response = await productService.getByQuantity()
            this.products = response
            // console.log(this.products)
        },
        async getAllAccessory() {
            const response = await accessoryService.getByQuantity()
            this.accessories = response
            // console.log(this.accessories)
        },
        // checkSaleQuantity() {
        //     if(this.dataCreateOrder.ListProducts.saleQuantity > this.dataCreateOrder.ListProducts.productId)
        // },
        checkSaleQuantity(index, data) {
            // console.log(data, this.dataCreateOrder.ListProducts[index].quantityInStock)
            if (data > this.dataCreateOrder.ListProducts[index].quantityInStock) {
                // Show an error message to the user
                this.dataCreateOrder.ListProducts[index].mesMaxQuantity = 'Số lượng bán không thể vượt quá số lượng sản phẩm có trong cửa hàng'
                this.checkQuantity[index] = false
                // Set the saleQuantity property of the div object to the quantityInStock property
                // this.div.saleQuantity = this.div.quantityInStock;
            } else {
                this.checkQuantity[index] = true
                this.dataCreateOrder.ListProducts[index].mesMaxQuantity = ''
            }
        },
        getId(id, type, index) {
            if (type == 'product') {
                this.products.forEach(e => {
                    // console.log(e)
                    if (e._id == id) {
                        this.dataCreateOrder.ListProducts[index].salePrice = e.salePrice
                        this.dataCreateOrder.ListProducts[index].inputPrice = e.inputPrice
                        this.dataCreateOrder.ListProducts[index].quantityInStock = e.inputQuantity
                        // this.totalBill()
                    }
                })
            } else {
                this.accessories.forEach(e => {
                    if (e._id == id) {
                        this.dataCreateOrder.ListProducts[index].salePrice = e.salePrice
                        this.dataCreateOrder.ListProducts[index].inputPrice = e.inputPrice
                        this.dataCreateOrder.ListProducts[index].quantityInStock = e.inputQuantity
                        // this.totalBill()
                    }
                })
            }
            // const productOrAccessory = type === 'product' ? this.products.find(product => product._id === id) : this.accessories.find(accessory => accessory._id === id);
            // this.dataCreateOrder.ListProducts.quantityInStock = productOrAccessory.inputQuantity;
            // console.log(this.dataCreateOrder.ListProducts.quantityInStock)
        },
        async checkPay() {
            const params = new URLSearchParams(window.location.search);
            if (params.get('isPay') == 'true') {
                // alert('Đơn')
                const isExport = await confirm(`Thanh toán hóa đơn thành công! Mã hóa đơn ${params.get('id')}. Bạn có muốn xuất hóa đơn cho đơn hàng này?`);
                if (isExport) {
                    const id = params.get('id')
                    const response = await orderService.findById({ id })
                    // console.log(response)
                    this.exportHTMLById = response.data.result
                    // window.open('https://example.com/cancel-order');
                    this.exportHTML()
                    // console.log(this.exportHTMLById)
                } else {
                    console.log('2')
                }
                // console.log(params.get('isPay'))
                // console.log(params.get('id'))
            } else if (params.get('isPay') == 'false') {
                alert(`Đơn hàng đã hủy và chuyển về trạng thái chờ thanh toán. Bạn có thể tiếp tục thanh toán với mã đơn hàng ${params.get('id')}.`)
            }
        },
        async exportHTML() {


            let forTable = ''
            let index = 1
            this.exportHTMLById.products.forEach(e => {
                forTable += `
                    <tr>
                        <td>${index}</td>
                        <td>${e.productId.name}</td>
                        <td>${this.formatCurrency(e.salePrice)}</td>
                        <td>${e.saleQuantity}</td>
                        <td>${this.formatDateNoTime(this.exportHTMLById.createdAt)}</td>
                    </tr>
                `
                index++
            })
            const template = `
                    <div style="font-family: Arial, Helvetica, sans-serif; width: 210mm">
                <h4 style="text-align: center; padding-top: 30px; font-size: 18px;">Chi tiết hóa đơn</h4>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 270px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Thông tin khách hàng
                </div>
                <div style="display: flex">
                    <div style="width: 390px">
                    <div style="margin: 15px">
                        <label style="font-weight: 500; color: #000"
                        >Họ & tên<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.customerId.name}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000"
                        >Số điện thoại<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.customerId.phoneNumber}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000"
                        >Email<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px; 
                        "
                        type="text" value="${this.exportHTMLById.customerId.email}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000">Địa chỉ</label>
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.customerId.address}"
                        />
                    </div>
                    </div>
                    <div style="width: 360px; margin-top: 18px">
                    <label for="">Ghi chú</label>
                    <textarea
                        style="
                        width: 100%;
                        border: 1px solid #ced4da;
                        border-radius: 0.2rem;
                        padding: 7px 14px;
                        margin-top: 15px;
                        "
                        rows="8" placeholder="${this.exportHTMLById.notes}"
                    ></textarea>
                    </div>
                </div>
                </div>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 120px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Thông tin người lập
                </div>
                <div style="display: flex; margin: 20px;">
                    <div style="width: 380px;">
                    <label style="font-weight: 500; color: #000">Họ & Tên</label>
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.userId.fullName}"
                        />
                    </div>
                    <div style="width: 380px;">
                    <label style="font-weight: 500; color: #000">Email</label>
                        <input
                        style="
                            width: 300px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.userId.email}"
                        />
                    </div>
                </div>
                </div>
                <div style="margin: 20px 100px;">
                <table style="width: 600px;" border="1">
                    <thead style="text-align: left; height: 40px; background-color: #e2e3e5;">
                    <tr >
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Ngày lập</th>
                    </tr>
                    </thead>
                    <tbody style="height: 40px;">
                    ${forTable}
                    </tbody>
                </table> 
                </div>
                <div style="text-align: end; margin-right: 70px;">
                <div>Tổng hóa đơn: <span style="color: red; font-weight: 600;">${this.formatCurrency(this.exportHTMLById.totalBill)}</span></div>
                </div>
            </div>
            `

            let mywindow = window.open('', 'PRINT', 'height=1123,width=900,top=100,left=150');

            // mywindow.document.write(`<html><head><title>Hoa-Don-${this.exportHTMLById?.createdAt}</title>`);
            mywindow.document.write('</head><body >');
            mywindow.document.write(`${template}`);
            mywindow.document.write('</body></html>');

            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print();
            // mywindow.close();
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        async getAllCustomer() {
            this.customers = await customerService.getAll()
            // console.log(response)
        },
        clickChooseCustomer() {
            this.isCheckCustomer = true
            this.getAllCustomer()
        },
        noCustomer() {
            this.isCheckCustomer = false
            this.dataCreateOrder.name = ''
            this.dataCreateOrder.phoneNumber = ''
            this.dataCreateOrder.email = ''
            this.dataCreateOrder.address = ''
            this.dataCreateOrder.type = ''
            this.dataCreateOrder.customerID = ''
        },
        async getIDCustomer(id) {
            const response = await customerService.findById({ id })
            this.dataCreateOrder.name = response.data.name
            this.dataCreateOrder.phoneNumber = response.data.phoneNumber
            this.dataCreateOrder.email = response.data.email
            this.dataCreateOrder.address = response.data.address
            this.dataCreateOrder.customerID = id
            this.dataCreateOrder.type = 'update'
        },
    },
    mounted() {
        this.getAllProducts()
        this.getAllAccessory()
        this.checkPay()
        // this.getAllCustomer()
    }
}
</script>
<style>
@import url(../../assets/adminOrder.css);

.error-checkquantity {
    /* position: absolute; */
    /* top: 83%; */
    /* left: 50%; */
    /* bottom: 10px;
    left: 10px; */
    /* width: 500px !important; */
    display: flex;
    justify-content: end;
    font-size: 12px;
    color: red;
}

.activecustomer {
    background-color: blue;
    color: #fff;
}

</style>