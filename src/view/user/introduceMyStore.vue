<template>
    <div>
        <userHeader :indexCart="indexCart"></userHeader>
    <div class="introduce-page">
        <div class="introduce-page-mystore">
            <div class="introduce-page-session1">
                <div class="session1-img">
                    <img src="https://www.honda.com.vn/images/myhonda/overview-1.png" alt="">
                </div>
                <div class="session1-info">
                    <div class="session1-info-title">
                        <p class="mb-0">Xe bạn luôn tốt</p>
                        <p>bạn yên tâm</p>
                    </div>
                    <div class="session1-info-des">
                        <p class="mb-0">ứng dụng trợ giúp bạn</p>
                        <p>nâng tầm trải nghiệm di chuyển của bạn</p>
                    </div>
                    <div class="session1-info-download">
                        <img src="https://www.honda.com.vn/images/myhonda/tai-ngay.png" alt="">
                    </div>
                    <div class="session1-info-store mt-2">
                        <img src="https://www.honda.com.vn/images/myhonda/google-play.png" alt="">
                        <img class="ms-2" src="https://www.honda.com.vn/images/myhonda/app-store.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="session2">
            <div class="session2-1">
                <div class="session2-1-left">
                    <img src="https://www.honda.com.vn/images/myhonda/app-bhdt.png" alt="">
                </div>
                <div class="session2-1-right">
                    <img class="image-icon" src="https://www.honda.com.vn/images/myhonda/icon_setting.png">
                    <h6>Bảo hành điện từ</h6>
                    <p>
                        Xuất phát từ mong muốn đem lại sự tiện lợi nhất cho khách hàng, cùng với sự giúp sức của công nghệ,
                        Honda Việt Nam triển khai áp dụng bảo hành điện tử cho toàn bộ sản phẩm ô tô và xe máy trên toàn
                        quốc. Thay vì phải lưu trữ và ghi chép thông tin trên sổ bảo hành, ứng dụng My Honda+ cho phép xem
                        các thông tin bảo hành, bảo dưỡng của xe ngay trên điện thoại di động của bạn.
                    </p>
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-right">
                    <img class="image-icon" src="https://www.honda.com.vn/images/myhonda/icon_calendar.png">
                    <h6>XE CỦA TÔI</h6>
                    <p>
                        Chỉ với một tính năng, người dùng có thể dễ dàng nắm bắt được toàn bộ thông tin xe, thông tin bảo
                        hành và lịch sử sửa chữa, bảo dưỡng của xe mình một cách đơn giản và đầy đủ nhất.
                    </p>
                </div>
                <div class="session2-1-left" style="margin-left: 170px;">
                    <img src="https://www.honda.com.vn/images/myhonda/app-nlbd.png" alt="">
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-left">
                    <img src="https://www.honda.com.vn/images/myhonda/app-knvx.png" alt="">
                </div>
                <div class="session2-1-right">
                    <img class="image-icon" style="width: auto;"
                        src="https://www.honda.com.vn/images/myhonda/icon_connect.png">
                    <h6>KẾT NỐI VỚI XE</h6>
                    <p>
                        Với một số mẫu xe mới của Honda Việt Nam (Ví dụ: SH150i, SH350i,...), My Honda+ hỗ trợ thêm tính
                        năng kết nối với xe. Sau khi kết nối, bạn có thể xem được các thông tin tốc độ xe, mức nhiên liệu
                        tiêu hao, nhiệt độ động cơ… trong mỗi chuyến đi.
                        Ứng dụng còn hỗ trợ nhắc lịch thay dầu sau mỗi 2000km. Nếu muốn, bạn hoàn toàn có thể thay đổi thiết
                        lập này tùy theo mong muốn và tình trạng sử dụng xe.
                    </p>
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-right">
                    <img class="image-icon" src="https://www.honda.com.vn/images/myhonda/icon_update.png">
                    <h6>CẬP NHẬT
                        THÔNG TIN XE MỚI</h6>
                    <p>
                        Bạn muốn mua xe?
                    </p>
                    <p>Bạn muốn tìm hiểu các sản phẩm của Honda?</p>
                    <p>Bạn muốn biết giá đề xuất của mỗi dòng xe?</p>
                    <p>Bạn muốn biết giá lăn bánh của xe?</p>
                    <p>Bạn muốn so sánh đặc điểm của các xe với nhau?</p>
                    <p>Bạn muốn có thông tin cập nhật về các dòng xe mới nhất của Honda?</p>
                    <p>Cửa hàng của chúng tôi cung cấp cho bạn những thông tin đầy đủ và nhanh chóng nhất.
                        Với cách thức đơn giản và dễ dàng nhất.</p>
                </div>
                <div class="session2-1-left" style="margin-left: 170px;">
                    <img src="https://www.honda.com.vn/images/myhonda/app-cnttx.png" alt="">
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-left">
                    <img src="https://www.honda.com.vn/images/myhonda/app-dklt.png" alt="">
                </div>
                <div class="session2-1-right">
                    <img class="image-icon" style="width: auto;"
                        src="https://www.honda.com.vn/images/myhonda/icon_register.png">
                    <h6>KẾT NỐI VỚI XE</h6>
                    <p>
                        Tính năng dành cho khách hàng quan tâm tới các dòng xe 4 bánh. Việc đăng ký lái thử trở nên dễ dàng
                        hơn bao giờ hết.
                        Bạn đăng ký qua My Honda+. Đại lý của chúng tôi sẽ nhận thông tin, gọi điện xác nhận và xếp lịch lái
                        thử cho bạn.
                    </p>
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-right">
                    <img class="image-icon" src="https://www.honda.com.vn/images/myhonda/icon_search.png">
                    <h6>TÌM ĐẠI LÝ GẦN NHẤT</h6>
                    <p>
                        Sử dụng công nghệ định vị hiện đại, tích hợp thông tin dữ liệu từ hơn 800 đại lý xe máy và gần 40
                        đại lý ô tô, My Honda+ giúp bạn tìm kiếm các đại lý gần bạn nhất trong trường hợp bạn muốn mua xe
                        hoặc bảo dưỡng.
                    </p>
                </div>
                <div class="session2-1-left" style="margin-left: 170px;">
                    <img src="https://www.honda.com.vn/images/myhonda/app-tdlgn.png" alt="">
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-left">
                    <img src="https://www.honda.com.vn/images/myhonda/app-cntt.png" alt="">
                </div>
                <div class="session2-1-right">
                    <!-- <img class="image-icon" style="width: auto;"
                        src="https://www.honda.com.vn/images/myhonda/icon_register.png"> -->
                    <h6>
                        CẬP NHẬT THÔNG TIN
                        MỚI TỪ HONDA</h6>
                    <p>
                        Có thể bạn không biết:
                    </p>
                    <ul>
                        <li>Honda có những sự kiện ra mắt xe vô cùng sôi động cùng các
                            nghệ sĩ hàng đầu Việt Nam. Và hoàn toàn miễn phí.</li>
                        <li>Honda có những sự kiện hỗ trợ cộng đồng, và cần sự hỗ trợ của bạn</li>
                        <li>Những cuộc thi với giải thưởng siêu hoành tráng từ Honda</li>
                        <li>Các thông tin khuyến mại siêu hấp dẫn từ các đại lý của Honda</li>
                    </ul>
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-right">
                    <img class="image-icon" src="https://www.honda.com.vn/images/myhonda/Icon_BookingService.png">
                    <h6>ĐẶT LỊCH SỬA CHỮA</h6>
                    <p>
                        Đặt lịch sửa chữa là một trong những tính năng đem lại nhiều tiện ích cho người dùng của My Honda+.
                    </p>
                    <p>Khi đặt lịch qua ứng dụng, bạn có thể tùy chọn kỹ thuật viên chăm sóc cho xe của bạn, cũng như lựa
                        chọn thời gian thích hợp mang xe qua đại lý, từ đó tiết kiệm thời gian chờ đợi khi
                        sửa xe.</p>
                </div>
                <div class="session2-1-left" style="margin-left: 170px;">
                    <img src="https://www.honda.com.vn/images/myhonda/app_datdichvu.png" alt="">
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-left">
                    <img src="https://www.honda.com.vn/images/myhonda/App_RatingService.png" alt="">
                </div>
                <div class="session2-1-right">
                    <img class="image-icon" style="width: auto;"
                        src="https://www.honda.com.vn/images/myhonda/icon_rating.png">
                    <h6>ĐÁNH GIÁ DỊCH VỤ</h6>
                    <p>
                        Với mong muốn nâng cao chất lượng dịch vụ tại các đại lý, Honda Việt Nam phát triển tính năng Đánh
                        giá dịch vụ, bao gồm đánh giá đại lý và đánh giá thợ sửa chữa/cố vấn; từ đó ghi nhận được các ý kiến
                        đóng góp của Khách hàng để hoàn thiện quy trình dịch vụ, nâng cao trải nghiệm Khách hàng.
                    </p>
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-right">
                    <img class="image-icon" src="https://www.honda.com.vn/images/myhonda/Icon_SafetyDriving.png">
                    <h6>LÁI XE AN TOÀN</h6>
                    <p>
                        Cài đặt My Honda+, người dùng có thể được tiếp cận rất nhiều tài liệu hướng dẫn lái xe an toàn, nâng
                        cao kỹ thuật lái xe.
                    </p>
                    <p>Bên cạnh đó, người dùng cũng có thể đăng ký tham gia các khóa học lái xe an toàn của Honda Việt Nam.
                    </p>
                    <p>Khóa học được hướng dẫn bởi các giảng viên đào tạo lái xe chuyên nghiệp nhất Việt Nam.</p>
                </div>
                <div class="session2-1-left" style="margin-left: 170px;">
                    <img src="https://www.honda.com.vn/images/myhonda/app_laixeantoan.png" alt="">
                </div>
            </div>
            <div class="session2-1">
                <div class="session2-1-left">
                    <img src="https://www.honda.com.vn/images/myhonda/app_chatbot.png" alt="">
                </div>
                <div class="session2-1-right">
                    <img class="image-icon" style="width: auto;"
                        src="https://www.honda.com.vn/images/myhonda/Icon_Chatbot.png">
                    <h6>TRỢ LÝ ẢO – CHATBOT</h6>
                    <p>
                        Để tiện lợi cho người sử dụng tra cứu, tìm hiểu các thông tin của Honda Việt Nam, trợ lý ảo –
                        Chatbot được ra đời.
                    </p>
                    <p>Chatbot được đào tạo để nắm thông tin về sản phẩm, dịch vụ và nhiều thông tin khác của Honda Việt
                        Nam, hỗ trợ trả lời nhanh chóng, chính xác các câu hỏi từ Khách hàng.</p>
                    <p>Với Chatbot, Honda Việt Nam hy vọng sẽ mang đến cho người dùng những trải nghiệm mới đầy thú vị, hữu
                        ích.</p>
                </div>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
import userHeader from '../../components/user/userHeader.vue'
import cartService from '../../services/cart.service'
export default {
    components: {
        userHeader
    },
    data() {
        return {
            indexCart: 0
        }
    },
    methods: {
        async getIndexProduct() {
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                const id = user.user._id
                const response = await cartService.findById({id})
                const userCart = response.data.result
                // console.log(userCart[0].products)
                if(userCart[0] != undefined) {
                    let sumU = 0
                    userCart[0].products.forEach(e => {
                        sumU = sumU + e.quantity
                    })
                    this.indexCart = sumU
                } else {
                    this.indexCart = 0
                }
            } else {
                const arrCart = JSON.parse(localStorage.getItem("cartItems"));
                if(arrCart != null) {
                    let sum = 0
                    arrCart.forEach(e => {
                        sum = sum + e.quantity
                    })
                    this.indexCart = sum || 0
                } else {
                    this.indexCart = 0
                }
            }
        }
    },
    mounted() {
        this.getIndexProduct()
    }
}
</script>
<style scoped>@import url(../../assets/client/introduce.css);</style>