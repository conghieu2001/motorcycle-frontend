<template>
    <div class="mt-3">
        <div class="d-flex justify-content-between">
            <div class="col-1 text-center ms-5">
                <div class="fillter-diagram pt-1 dropdown-toggle" @click="toggleDiagram = !toggleDiagram">Lọc theo thời gian</div>
                <ul class="drop-menu-diagram" v-if="toggleDiagram">
                    <li class="p-2 " @click="defaultFillter">Mặc định</li>
                    <li class="p-2">Theo tháng - năm
                        <input class="mt-1" style="width: 150px;" type="month" v-model="variable" @input="getNumberOfDaysInMonth(variable)">
                    </li>
                    <li class="p-2">Theo năm
                        <form class="filler-diagram-byyear" action="" @submit.prevent="send">
                            <input type="number" name="" id="" v-model="variable">
                            <button type="submit">
                                <svg class="pb-1" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-end me-3">
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" @click="exportPdf = !exportPdf">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                    </svg>
                    PDF
                </div>
                <div class="exportFileExcel" style="width: 70px;" @click="clickExportExcel">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                    </svg>
                    Excel
                </div>
            </div>
        </div>
        <Diagramtotal :check="index" :type="type" :exportExcel="exportExcel" :exportPdf="exportPdf"></Diagramtotal>
    </div>
</template>
  
<script>
import Diagramtotal from './diagramTotal.vue'
export default {
    components: {
        Diagramtotal
    },
    data() {
        return {
            index: '',
            tests: [],
            variable: '',
            type: '',
            toggleDiagram: false,
            exportExcel: false,
            exportPdf: false
        }
    },
    methods: {
        getNumberOfDaysInMonth(variable) {
            this.type = 'month'
            this.index = variable
            // console.log(this.index)
            return this.index
        },
        send() {
            this.type = 'year'
            this.index = this.variable
        },
        defaultFillter() {
            this.type = 'default'
            this.index = ''
            this.variable = ''
            this.toggleDiagram = false
        },
        clickExportExcel() {
            this.exportExcel = !this.exportExcel
        }
    }
};
</script>
<style scoped>
@import url(../../assets/diagram.css);
</style>