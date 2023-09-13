<script>
export default {
  name: 'HeaderView'
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div id="logo_home">
            <h1>
              <a href="/" style="background-image: url('../src/assets/image/home/logo3.png')"> </a>
            </h1>
          </div>
        </div>
        <nav class="col-10">
          <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"
            ><span>Menu mobile</span></a
          >
          <div class="main-menu">
            <div id="header_menu">
              <img src="../assets/image/home/logo3.png" width="40" height="40" alt="City tours" />
            </div>
            <a href="#" class="open_close" id="close_in"><i class="icon_set_1_icon-77"></i></a>
            <ul>
              <li class="submenu">
                <router-link to="/" class="show-submenu">Trang chủ</router-link>
              </li>
              <li class="submenu">
                <router-link to="/about" class="show-submenu">Giới thiệu</router-link>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);" class="show-submenu">Khám phá</a>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);" class="show-submenu">Tin tức </a>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);" class="show-submenu">Giá vé</a>
              </li>
              <li class="megamenu submenu">
                <a href="javascript:void(0);" class="show-submenu-mega">Thư viện ảnh</a>
              </li>
            </ul>
          </div>
          <!-- End main-menu -->
          <ul id="top_tools">
            <li>
              <router-link to="/booking">
                <div><img src="../assets/image/home/ticket.png" /><span>ĐẶT VÉ ONLINE</span></div>
              </router-link>

              <!-- <img src="../assets/image/home/datve.png" height="60"
              /> -->
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- container -->
  </header>
  <!-- End Header -->
</template>
<style scoped>
header {
  background-color: #121215;
}

header .main-menu ul {
  display: flex;
  gap: 3%;
}

header .main-menu li a {
  color: #fff;
}
header .main-menu .router-link-active {
  color: #f89345;
  /* background-image: linear-gradient(0deg, transparent 100%),
    linear-gradient(90deg, transparent 100%), linear-gradient(180deg, transparent 100%),
    linear-gradient(270deg, transparent 15%, #f89345 15%, #f89345 85%, transparent 85%);
  background-position:
    0 0,
    0 0,
    100% 0,
    0 100%;
  background-size:
    0 100%,
    100% 0,
    0 100%,
    100% 3px;
  background-repeat: no-repeat;
  border-bottom: 3px solid #f89345; */
}

header .main-menu .router-link-active::before {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  height: 3px;
  z-index: 1;
  width: 40%;
  background: #f89345;
}

.main-menu ul li.submenu:hover > a:before,
.main-menu ul li.submenu:hover > a:after {
  bottom: 0;
  opacity: 1;
}
#top_tools {
  position: absolute;
  top: -10px;
}

#top_tools div {
  background: linear-gradient(180deg, #ac3501 -10.23%, #f89345 53.27%, #ac3501 113.64%);
  box-shadow: 0px 0px 32px 0px #f89345b2;
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}
#top_tools span {
  font-size: 18px;
  color: #fff;
  font-weight: 700;
}
#top_tools img {
  height: 24px;
}
</style>
