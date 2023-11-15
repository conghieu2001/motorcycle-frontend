<template>
    <div>
        <div class="m-5 mt-3" style="height: 550px;">
            <canvas id="myChart1"></canvas>
            <p class="text-center title-diagram">Biểu đồ tổng doanh số</p>
        </div>
        <div class="d-flex mt-5 ms-2">
            <div class="mt-1" style="width: 600px; height: 400px;">
                <canvas id="myChart2" style="max-height: 300px;"></canvas>
                <p class="text-center title-diagram">Biểu đồ tổng doanh số đơn bán hàng</p>
            </div>
            <div class="mt-1" style="width: 600px; height: 400px;">
                <canvas id="myChart3" style="max-height: 300px;"></canvas>
                <p class="text-center title-diagram">Biểu đồ tổng doanh số đơn sửa chữa</p>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';
import orderService from '../../services/order.service';
import orderRepairService from '../../services/orderRepair.service';
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf';
export default {
    data() {
        return {
            tests: [],
            datas: [],
            myChart1: null,
            myChart2: null,
            myChart3: null,
            dataOrder: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            },
            dataRepair: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            },
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            },
            pdf: null
        };
    },
    props: {
        check: { type: String },
        type: { type: String },
        exportPdf: { type: Boolean },
        exportExcel: { type: Boolean },
    },
    watch: {
        async check() {
            if (this.type == 'year') {
                this.dataOrder.labels = []
                this.dataOrder.datasets[0].data = []
                this.dataRepair.labels = []
                this.dataRepair.datasets[0].data = []
                this.data.labels = []
                this.data.datasets[0].data = []
                for (let i = 1; i <= 12; i++) {
                    this.dataOrder.labels[i] = `Tháng ${i}`
                    this.dataRepair.labels[i] = `Tháng ${i}`
                    this.data.labels[i] = `Tháng ${i}`
                }
                this.data.datasets[0].label = `Biểu đồ thống kê năm ${this.check}`
                this.dataOrder.datasets[0].label = `Biểu đồ thống kê năm ${this.check}`
                this.dataRepair.datasets[0].label = `Biểu đồ thống kê năm ${this.check}`
                const respose = await orderService.getsales({ year: this.check, type: this.type })
                this.dataOrder.datasets[0].data = respose.data.result2
                const resposerepair = await orderRepairService.getsales({ year: this.check, type: this.type })
                this.dataRepair.datasets[0].data = resposerepair.data.result2
                let dataTotal = []
                for (let i = 0; i < this.dataOrder.datasets[0].data.length; i++) {
                    dataTotal.push(this.dataOrder.datasets[0].data[i] + this.dataRepair.datasets[0].data[i])
                }
                this.data.datasets[0].data = dataTotal
                this.waiting()
            } else if (this.type == 'month') {
                // console.log(this.check)
                const date = new Date(this.check);
                const year = date.getFullYear();
                const month = date.getMonth();
                // Kiểm tra xem tháng 2 có phải là năm nhuận hay không
                const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
                // Lấy số ngày trong tháng
                let index = 0
                const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (isLeapYear && month == 1) {
                    index = daysInMonth[month] + 1
                } else {
                    index = daysInMonth[month]
                }
                this.dataOrder.labels = []
                this.dataOrder.datasets[0].data = []
                this.dataRepair.labels = []
                this.dataRepair.datasets[0].data = []
                this.data.labels = []
                this.data.datasets[0].data = []
                for (let i = 1; i <= index; i++) {
                    this.dataOrder.labels[i] = `Ngày ${i}`
                    this.dataRepair.labels[i] = `Ngày ${i}`
                    this.data.labels[i] = `Ngày ${i}`
                }
                // console.log(this.data.labels)
                this.dataOrder.datasets[0].label = `Biểu đồ thống kê tháng ${month + 1} (năm ${year})`
                this.dataRepair.datasets[0].label = `Biểu đồ thống kê tháng ${month + 1} (năm ${year})`
                this.data.datasets[0].label = `Biểu đồ thống kê tháng ${month + 1} (năm ${year})`
                const respose = await orderService.getsales({ month: this.check, type: this.type })
                this.dataOrder.datasets[0].data = respose.data.result2
                const resposerepair = await orderRepairService.getsales({ month: this.check, type: this.type })
                this.dataRepair.datasets[0].data = resposerepair.data.result2
                let dataTotal = []
                for (let i = 0; i < this.dataOrder.datasets[0].data.length; i++) {
                    dataTotal.push(this.dataOrder.datasets[0].data[i] + this.dataRepair.datasets[0].data[i])
                }
                this.data.datasets[0].data = dataTotal
                this.waiting()
            } else {
                this.getDate()
            }
        },
    },
    methods: {
        waiting() {
            if (this.myChart1 && this.myChart2 && this.myChart3) {
                this.myChart1.destroy()
                this.myChart2.destroy()
                this.myChart3.destroy()
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
            const ctx1 = document.getElementById('myChart2');
            const config1 = {
                type: 'line',
                data: this.dataOrder,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            const ctx2 = document.getElementById('myChart3');
            const config2 = {
                type: 'line',
                data: this.dataRepair,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
            this.myChart2 = new Chart(ctx1, config1)
            this.myChart3 = new Chart(ctx2, config2)
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async getDate() {
            const today = new Date()
            // console.log(today)
            const m = today.getMonth();
            const y = today.getFullYear();
            const isLeapYear = y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);

            // Lấy số ngày trong tháng
            let index = 0
            const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (isLeapYear && m == 1) {
                index = daysInMonth[m]
            } else {
                index = daysInMonth[m]
            }
            // console.log(index)
            for (let i = 1; i <= index; i++) {
                this.dataOrder.labels[i] = `Ngày ${i}`
                this.dataRepair.labels[i] = `Ngày ${i}`
                this.data.labels[i] = `Ngày ${i}`
            }
            const month = y + '-' + (m + 1)
            // console.log(month)
            const respose = await orderService.getsales({ month: month })
            this.dataOrder.datasets[0].data = respose.data.result2
            this.dataOrder.datasets[0].label = `Biểu đồ thống kê tháng ${m + 1} (năm ${y})`
            this.data.datasets[0].label = `Biểu đồ thống kê tháng ${m + 1} (năm ${y})`

            const resposeRepairt = await orderRepairService.getsales({ month: month })
            this.dataRepair.datasets[0].data = resposeRepairt.data.result2
            this.dataRepair.datasets[0].label = `Biểu đồ thống kê tháng ${m + 1} (năm ${y})`

            let dataTotal = []
            for (let i = 0; i < this.dataOrder.datasets[0].data.length; i++) {
                dataTotal.push(this.dataOrder.datasets[0].data[i] + this.dataRepair.datasets[0].data[i])
            }
            this.data.datasets[0].data = dataTotal
            // console.log(dataTotal)
            if (this.myChart1 && this.myChart2 && this.myChart3) {
                this.myChart1.destroy()
                this.myChart2.destroy()
                this.myChart3.destroy()
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
            const ctx1 = document.getElementById('myChart2');
            const config1 = {
                type: 'line',
                data: this.dataOrder,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            const ctx2 = document.getElementById('myChart3');
            const config2 = {
                type: 'line',
                data: this.dataRepair,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            };
            this.myChart1 = new Chart(ctx, config)
            this.myChart2 = new Chart(ctx1, config1)
            this.myChart3 = new Chart(ctx2, config2)
        },
        exportExcelDiagram() {
            const filename = 'diagrams'
            const response = this.data.datasets[0].data
            let data = []
            for (let i = 1; i < response.length; i++) {
                const newRow = [i, this.formatCurrency(response[i]), this.formatCurrency(this.dataOrder.datasets[0].data[i]), this.formatCurrency(this.dataRepair.datasets[0].data[i])]
                data.push(newRow)
            }
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 10 }, { width: 25 }, { width: 25 }, { width: 25 }];
            if (this.type == 'year') {
                ws['A1'] = { v: `Tháng` };
            } else {
                ws['A1'] = { v: 'Ngày' };
            }
            ws['B1'] = { v: 'Doanh thu tổng' };
            ws['C1'] = { v: 'Doanh thu bán hàng' };
            ws['D1'] = { v: 'Doanh thu sửa chữa' };
            // ws['B1'] = { v: 'Doanh thu tổng bán hàng' };
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
        exportPDF() {
            const canvas1 = document.getElementById('myChart1');
            const image1 = canvas1.toDataURL("image/png", 1.0);
            const canvas2 = document.getElementById('myChart2');
            const image2 = canvas2.toDataURL("image/png", 1.0);
            const canvas3 = document.getElementById('myChart3');
            const image3 = canvas3.toDataURL("image/png", 1.0);
            const pdf = new jsPDF();
            pdf.text("Bieu do thong ke tong doanh thu", 60, 20)
            pdf.addImage(image1, 'JPEG', 15, 30, 180, 100);

            pdf.text("Bieu do thong ke tong hoa don ban hang", 60, 150)
            pdf.addImage(image2, 'JPEG', 15, 160, 180, 100);

            pdf.addPage();
            pdf.text("Bieu do thong ke tong hoa don sua chua", 60, 20)
            pdf.addImage(image3, 'JPEG', 15, 30, 180, 100);

            pdf.save('chart.pdf');
        },
    },
    mounted() {
        this.getDate()
        this.$watch('exportExcel', () => {
            // console.log(this.exportExcel)
            this.exportExcelDiagram()
        })
        this.$watch('exportPdf', () => {
            // console.log(this.exportExcel)
            this.exportPDF()
        })
    }
}
</script>
<style scoped>
.title-diagram {
    font-style: italic;
    font-size: 14px;
    font-weight: 500;
}
</style>