<template>
    <div>
        <div class="diagram-wrapper">
            <h6 class="pb-0">Biểu đồ thống kê</h6>
        </div>
        <div class="d-flex justify-content-between">
            <form class="ms-3" @submit.prevent="rederDiagram">
                <div class="d-flex">
                    <input class="input-search-diagram" type="text" v-model="searchDiagram" placeholder="Thống kê theo..." required>
                    <div class="text-center ms-2">
                        <div class="fillter-diagram pt-1 dropdown-toggle" @click="isTime = !isTime">Lọc theo thời gian</div>
                        <ul class="drop-menu-diagram" v-if="isTime">
                            <!-- <li class="p-2 ">Mặc định</li> -->
                            <li class="p-2">Theo tháng - năm
                                <input class="mt-1" style="width: 150px;" type="month" v-model="searchTimeMonth">
                            </li>
                            <li class="p-2">Theo năm
                                <div class="filler-diagram-byyear" action="" >
                                    <input type="number" name="" id="" placeholder="vd: 2023" v-model="searchTimeYear"> 
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button class="button-search-diagram ms-2" type="submit">Tìm kiếm</button>
                </div>
            </form>
            <div class="d-flex justify-content-end me-3">
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" >
                    <svg xmlns="http://www.w3.org/2000/svg" @click="exportPDF" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                    </svg>
                    PDF
                </div>
                <div class="exportFileExcel" style="width: 70px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                    </svg>
                    Excel
                </div>
            </div>
        </div>
        <div class="m-5 mt-3" style="height: 500px;">
            <canvas id="myChart1" width="100%"></canvas>
            <p class="text-center title-diagram fw-bold">{{ titleDiagram }}</p>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';
import orderService from '../../services/order.service';
import orderRepairService from '../../services/orderRepair.service';
import productService from '../../services/product.service';
import accessoryService from '../../services/acesstory.service'
import jsPDF from 'jspdf';
export default {
    data() {
        return {
            isTime: false,
            searchDiagram: 'Tổng doanh thu',
            searchTimeMonth: null,
            searchTimeYear: null,
            myChart1: null,
            products: [],
            accessories: [],
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: [
                    '#A9A9A9',
                    ],
                    borderColor: [
                    '#A9A9A9',
                    ],
                    borderWidth: 1
                },
                {
                    label: '',
                    data: [],
                    backgroundColor: [
                    '#9FBB73',
                    ],
                    borderColor: [
                    '#9FBB73',
                    ],
                    borderWidth: 1
                }
            ]
            },
            titleDiagram: '',
            indexDay: 0
        }
    },
    methods: {
        async rederDiagram() {
            if(this.searchDiagram == 'sản phẩm' || this.searchDiagram == 'xe' || this.searchDiagram == 'product') {
                this.renderByProduct(this.searchTimeMonth, this.searchTimeYear)
                // this.searchDiagram = ''
                // this.searchTimeMonth = null
                // this.searchTimeYear = null
            } else if(this.searchDiagram == 'phụ kiện' || this.searchDiagram == 'phụ tùng' || this.searchDiagram == 'access' || this.searchDiagram == 'accessory') {
                this.renderAccess(this.searchTimeMonth, this.searchTimeYear)
            } else if(this.searchDiagram == 'tổng doanh thu' || this.searchDiagram == 'tong' || this.searchDiagram == 'tổng' || this.searchDiagram == ' ') {
                this.getDate(this.searchTimeMonth, this.searchTimeYear)
            } else if(this.searchDiagram == 'đơn hàng' || this.searchDiagram == 'Hóa đơn' || this.searchDiagram == 'doanh thu') {
                this.renderByOrder(this.searchTimeMonth, this.searchTimeYear)
            } else if(this.searchDiagram == 'sửa chữa' || this.searchDiagram == 'sửa' || this.searchDiagram == 'hóa đơn sửa' ) {
                this.renderByOrderrepair(this.searchTimeMonth, this.searchTimeYear)
            } else if(this.searchDiagram == 'khách hàng') {
                this.renderByCustomer(this.searchTimeMonth, this.searchTimeYear)
            }
            else {
                this.getDate('tong', 2023)
            }
        },
        async getDate(searchMonth, searchYear) {
            if(searchYear != null) {
                this.data.labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
                // const year = 2023
                const response = await orderService.getsales({year: searchYear})
                const dataYearExpense1 = response.data.result3
                const dataYearSale1 = response.data.result2
                const response2 = await orderRepairService.getsales({year: searchYear})
                const dataYearExpense2 = response2.data.result3
                const dataYearSale2 = response2.data.result2
                let dataSumExpense = []
                let dataSumSale = []
                for(let i = 1; i<= 12; i++) {
                    dataSumExpense.push(dataYearExpense1[i] + dataYearExpense2[i])
                    dataSumSale.push(dataYearSale1[i] + dataYearSale2[i])
                }
                // console.log(dataSum)
                this.data.datasets[0].data = dataSumExpense
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = dataSumSale
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ tổng doanh số năm ${searchYear}`
            } else if(searchMonth != null){
                const date = new Date(searchMonth);
                const year = date.getFullYear();
                const month = date.getMonth();
                // Kiểm tra xem tháng 2 có phải là năm nhuận hay không
                const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
                // Lấy số ngày trong tháng
                this.indexDay = 0
                const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (isLeapYear && month == 1) {
                    this.indexDay = daysInMonth[month] + 1
                } else {
                    this.indexDay = daysInMonth[month]
                }
                for (let i = 1; i <= this.indexDay; i++) {
                    this.data.labels[i] = `Ngày ${i}`
                }
                const response = await orderService.getsales({month: searchMonth})
                const dataYearExpense1 = response.data.result3
                const dataYearSale1 = response.data.result2
                const response2 = await orderRepairService.getsales({month: searchMonth})
                const dataYearExpense2 = response2.data.result3
                const dataYearSale2 = response2.data.result2
                let dataSumExpense = []
                let dataSumSale = []
                for(let i = 1; i<= this.indexDay; i++) {
                    dataSumExpense.push(dataYearExpense1[i] + dataYearExpense2[i])
                    dataSumSale.push(dataYearSale1[i] + dataYearSale2[i])
                }
                // console.log(dataSum)
                this.data.datasets[0].data = dataSumExpense
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = dataSumSale
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ tổng doanh số ${searchMonth}`
            } else {
                this.data.labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
                const year = 2023
                const response = await orderService.getsales({year})
                const dataYearExpense1 = response.data.result3
                const dataYearSale1 = response.data.result2
                const response2 = await orderRepairService.getsales({year})
                const dataYearExpense2 = response2.data.result3
                const dataYearSale2 = response2.data.result2
                let dataSumExpense = []
                let dataSumSale = []
                for(let i = 1; i<= 12; i++) {
                    dataSumExpense.push(dataYearExpense1[i] + dataYearExpense2[i])
                    dataSumSale.push(dataYearSale1[i] + dataYearSale2[i])
                }
                // console.log(dataSum)
                this.data.datasets[0].data = dataSumExpense
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = dataSumSale
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ tổng doanh số năm ${year}`
            }
            this.isTime = false
            this.searchTimeMonth = null
            this.searchTimeYear = null
            if (this.myChart1) {
                this.myChart1.destroy()
            }
            const ctx = document.getElementById('myChart1');
            const config = {
                type: 'bar',
                data: this.data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
        },
        test(label, maxlength) {
            if (label.length > maxlength) {
                return label.substring(0, maxlength) + '...';
            }
            return label;
        },
        formatDateByCreatedAt(cre) {
            const day = new Date(cre)
            const month = day.getMonth() + 1
            const year = day.getFullYear()
            return `${year}-${month}`
        },
        async renderByProduct(searchMonth, searchYear) {
            const response = await productService.getAll()
            this.products = response
            if(searchMonth != null) {
                this.products = this.products.filter(e => {
                    // console.log(this.formatDateByCreatedAt(e.createdAt), searchMonth)
                    const macth = searchMonth == this.formatDateByCreatedAt(e.createdAt)
                    return macth
                })
                this.titleDiagram= `Biểu đồ thống kê sản phẩm ${searchMonth}`
            } else if(searchYear != null){
                this.products = this.products.filter(e => {
                    // console.log(this.formatDateByCreatedAt(e.createdAt), searchMonth)
                    const day = new Date(e.createdAt)
                    const macth = searchYear == day.getFullYear()
                    return macth
                })
                this.titleDiagram= `Biểu đồ thống kê sản phẩm ${searchYear}`
            } else {
                this.titleDiagram= `Biểu đồ thống kê sản phẩm`
            }
            this.isTime = false
            this.searchTimeMonth = null
            this.searchTimeYear = null
            // console.log(this.products)
            if (this.myChart1) {
                this.myChart1.destroy()
            }
            // console.log(this.myChart1)
            // console.log(this.data)
            this.data.labels= []
            this.data.datasets[0].data = []
            this.data.datasets[1].data = []
            for(let i=0 ; i < this.products.length ; i++) {
                this.data.labels[i] = this.test(this.products[i].name, 10)
                this.data.datasets[0].data[i] = this.products[i].inputQuantity
                this.data.datasets[1].data[i] = this.products[i].saleQuantity
            }
            this.data.datasets[0].label = `Tồn kho`
            this.data.datasets[1].label = `Đã bán`
            const ctx = document.getElementById('myChart1');
            const config = {
                type: 'bar',
                data: this.data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
        },
        async renderAccess(searchMonth, searchYear) {
            const response = await accessoryService.getAll()
            this.accessories = response.data

            if(searchMonth != null) {
                this.accessories = this.accessories.filter(e => {
                    // console.log(this.formatDateByCreatedAt(e.createdAt), searchMonth)
                    const macth = searchMonth == this.formatDateByCreatedAt(e.createdAt)
                    return macth
                })
                this.titleDiagram= `Biểu đồ thống kê phụ kiện & phụ tùng ${searchMonth}`
            } else if(searchYear != null){
                this.accessories = this.accessories.filter(e => {
                    // console.log(this.formatDateByCreatedAt(e.createdAt), searchMonth)
                    const day = new Date(e.createdAt)
                    const macth = searchYear == day.getFullYear()
                    return macth
                })
                this.titleDiagram= `Biểu đồ thống kê phụ kiện & phụ tùng ${searchYear}`
            } else {
                this.titleDiagram= `Biểu đồ thống kê phụ kiện & phụ tùng `
            }
            this.isTime = false
            this.searchTimeMonth = null
            this.searchTimeYear = null
            // console.log(this.products)
            if (this.myChart1) {
                this.myChart1.destroy()
            }
            // console.log(this.myChart1)
            // console.log(this.data)
            this.data.labels= []
            this.data.datasets[0].data = []
            this.data.datasets[1].data = []
            for(let i=0 ; i < this.accessories.length ; i++) {
                this.data.labels[i] = this.test(this.accessories[i].name, 10)
                this.data.datasets[0].data[i] = this.accessories[i].inputQuantity
                this.data.datasets[1].data[i] = this.accessories[i].saleQuantity
            }
            this.data.datasets[0].label = `Tồn kho`
            this.data.datasets[1].label = `Đã bán`
            const ctx = document.getElementById('myChart1');
            const config = {
                type: 'bar',
                data: this.data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
        },
        async renderByOrder(searchMonth, searchYear) {
            if(searchYear != null) {
                this.data.labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
                // const year = 2023
                const response = await orderService.getsales({year: searchYear})
                const dataYearExpense1 = response.data.result3
                const dataYearSale1 = response.data.result2
                // console.log(dataYearExpense1, dataYearSale1)
                let data1 = []
                let data2 = []
                for( let i = 1; i<= 12; i++) {
                    data1.push(dataYearExpense1[i])
                    data2.push(dataYearSale1[i])
                }
                // console.log(data1)
                // console.log(dataSum)
                this.data.datasets[0].data = data1
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = data2
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ doanh số bán hàng năm ${searchYear}`
            } else if(searchMonth != null){
                const date = new Date(searchMonth);
                const year = date.getFullYear();
                const month = date.getMonth();
                // Kiểm tra xem tháng 2 có phải là năm nhuận hay không
                const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
                // Lấy số ngày trong tháng
                this.indexDay = 0
                const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (isLeapYear && month == 1) {
                    this.indexDay = daysInMonth[month] + 1
                } else {
                    this.indexDay = daysInMonth[month]
                }
                for (let i = 1; i <= this.indexDay; i++) {
                    this.data.labels[i] = `Ngày ${i}`
                }
                const response = await orderService.getsales({month: searchMonth})
                const dataYearExpense1 = response.data.result3
                const dataYearSale1 = response.data.result2
                // console.log(dataSum)
                this.data.datasets[0].data = dataYearExpense1
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = dataYearSale1
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ doanh số bán hàng ${searchMonth}`
            } else {
                this.data.labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
                const year = 2023
                const response = await orderService.getsales({year})
                const dataYearExpense1 = response.data.result3
                const dataYearSale1 = response.data.result2
                // console.log(dataYearExpense1, dataYearSale1)
                let data1 = []
                let data2 = []
                for( let i = 1; i<= 12; i++) {
                    data1.push(dataYearExpense1[i])
                    data2.push(dataYearSale1[i])
                }
                // console.log(data1)
                // console.log(dataSum)
                this.data.datasets[0].data = data1
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = data2
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ doanh số bán hàng năm ${year}`
            }
            this.isTime = false
            this.searchTimeMonth = null
            this.searchTimeYear = null
            if (this.myChart1) {
                this.myChart1.destroy()
            }
            const ctx = document.getElementById('myChart1');
            const config = {
                type: 'bar',
                data: this.data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
        },
        async renderByOrderrepair(searchMonth, searchYear) {
            if(searchYear != null) {
                this.data.labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
                const response2 = await orderRepairService.getsales({year: searchYear})
                const dataYearExpense2 = response2.data.result3
                const dataYearSale2 = response2.data.result2
                let data1 = []
                let data2 = []
                for( let i = 1; i<= 12; i++) {
                    data1.push(dataYearExpense2[i])
                    data2.push(dataYearSale2[i])
                }
                // console.log(dataSum)
                this.data.datasets[0].data = data1
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = data2
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ doanh số sửa chữa năm ${searchYear}`
            } else if(searchMonth != null){
                const date = new Date(searchMonth);
                const year = date.getFullYear();
                const month = date.getMonth();
                // Kiểm tra xem tháng 2 có phải là năm nhuận hay không
                const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
                // Lấy số ngày trong tháng
                this.indexDay = 0
                const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (isLeapYear && month == 1) {
                    this.indexDay = daysInMonth[month] + 1
                } else {
                    this.indexDay = daysInMonth[month]
                }
                for (let i = 1; i <= this.indexDay; i++) {
                    this.data.labels[i] = `Ngày ${i}`
                }
                const response2 = await orderRepairService.getsales({month: searchMonth})
                const dataYearExpense2 = response2.data.result3
                const dataYearSale2 = response2.data.result2
                // console.log(dataSum)
                this.data.datasets[0].data = dataYearExpense2
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = dataYearSale2
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ doanh số sửa chữa ${searchMonth}`
            } else {
                this.data.labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
                const year = 2023
                const response2 = await orderRepairService.getsales({year})
                const dataYearExpense2 = response2.data.result3
                const dataYearSale2 = response2.data.result2
                let data1 = []
                let data2 = []
                for( let i = 1; i<= 12; i++) {
                    data1.push(dataYearExpense2[i])
                    data2.push(dataYearSale2[i])
                }
                // console.log(dataSum)
                this.data.datasets[0].data = data1
                this.data.datasets[0].label = `Chi phí`
                this.data.datasets[1].data = data2
                this.data.datasets[1].label = `Doanh số`
                this.titleDiagram = `Biểu đồ doanh số sửa chữa năm ${year}`
            }
            this.isTime = false
            this.searchTimeMonth = null
            this.searchTimeYear = null
            if (this.myChart1) {
                this.myChart1.destroy()
            }
            const ctx = document.getElementById('myChart1');
            const config = {
                type: 'bar',
                data: this.data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
        },
        async renderByCustomer(searchMonth, searchYear) {
            if(searchYear != null) {
                const response2 = await orderService.getCustomer({year: searchYear})
                const dataName = response2.data.result3
                const dataPrice = response2.data.test

                this.data.labels = dataName
                this.data.datasets[0].data = dataPrice
                this.data.datasets[0].label = `Số tiền đã mua`
                this.titleDiagram = `Biểu đồ mức chi tiêu của khách hàng năm ${searchYear}`
            } else if(searchMonth != null) {
                const response2 = await orderService.getCustomer({month: searchMonth})
                const dataName = response2.data.result3
                const dataPrice = response2.data.test

                this.data.labels = dataName
                this.data.datasets[0].data = dataPrice
                this.data.datasets[0].label = `Số tiền đã mua`
                this.titleDiagram = `Biểu đồ mức chi tiêu của khách hàng theo ${searchMonth}`
            } else {
                const year = 2023
                const response2 = await orderService.getCustomer({year})
                const dataName = response2.data.result3
                const dataPrice = response2.data.test

                this.data.labels = dataName
                this.data.datasets[0].data = dataPrice
                this.data.datasets[0].label = `Số tiền đã mua`
                this.titleDiagram = `Biểu đồ mức chi tiêu của khách hàng năm ${year}`
            }
            this.data.datasets[1].label = ''
            this.isTime = false
            this.searchTimeMonth = null
            this.searchTimeYear = null
            if (this.myChart1) {
                this.myChart1.destroy()
            }
            const ctx = document.getElementById('myChart1');
            const config = {
                type: 'bar',
                data: this.data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
        },
        exportPDF() {
            const canvas1 = document.getElementById('myChart1');
            const image1 = canvas1.toDataURL("image/png", 1.0);
            const pdf = new jsPDF();
            pdf.text("Bieu do thong ke", 80, 20)
            pdf.addImage(image1, 'JPEG', 15, 30, 180, 100);

            pdf.save('chart.pdf');
        },
    },
    mounted() {
        this.getDate('Tổng doanh thu', 2023)
        // this.renderAccess()
    }
}
</script>
<style>
.diagram-wrapper>h6 {
    font-size: 25px;
    font-family: "Gill Sans", sans-serif;
    font-weight: 500;
    padding-right: 5.5rem;
    text-align: center;
    padding: 20px;
}
.input-search-diagram {
    outline: none;
    border: 1px solid rgb(190, 190, 190);
    border-radius: 5px;
    padding: 3px 10px;
}
.button-search-diagram {
    border: none;
    padding: 5px;
    background-color: blue;
    color: #fff;
    border-radius: 3px;
    outline: none;
}
</style>