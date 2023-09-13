<script>
export default {
  name: 'AboutHomeView'
}
</script>

<template>
  <div class="about">
    <div class="container margin_60">
      <div class="row small-gutters categories_grid">
        <div class="col-sm-12 col-md-6 about-text">
          <h2>Giới thiệu</h2>
          <h3>Tham quan Văn Miếu Đêm</h3>
          <p>
            Tour đêm Văn Miếu dự kiến ra mắt tháng 7. Giám đốc Trung tâm kỳ vọng sản phẩm này trở
            thành điểm nhấn gắn với phố đi bộ Văn Miếu - Quốc Tử Giám sắp tới, cả ban ngày lẫn hoạt
            động về đêm. Không gian đi bộ này có điểm nhấn chính là di tích Văn Miếu - Quốc Tử Giám.
            Không có lợi thế cảnh quan tự nhiên như phố đi bộ Hồ Gươm, nhưng không gian này có sản
            phẩm văn hóa - du lịch khác biệt do di tích tạo nên.
          </p>
          <div class="about-button">
            <router-link to="/kham-pha" class="show-submenu">Khám phá ngay</router-link>
            <router-link to="/booking" class="show-submenu">Đặt vé Online</router-link>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="row small-gutters mt-md-0 mt-sm-2">
            <img src="../assets/image/home/about.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
      <!--/categories_grid-->
    </div>
    <!-- /container -->
  </div>
  <!-- /white_bg -->
</template>
<style scoped>
.about .about-text {
  padding-right: 10%;
}
.about .about-text h2 {
  color: #ac3501;
  margin: 0;
  line-height: 80%;
}
.about .about-text h3 {
  margin: 0 0 32px 0;
}
.about .about-button a {
  min-width: 200px;
  width: fit-content;
  padding: 14px 14px;
  display: inline-block;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.about .about-button a:first-child {
  background-color: #f89345;
  margin-right: 28px;
}
.about .about-button a:nth-child(2) {
  background-color: #ac3501;
}
</style>
