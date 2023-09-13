<script>
export default {
  name: 'MapView',
  data() {
    return {
      locations: [
        {
          stt: 1,
          ten: 'Khu Nhập Đạo',
          mota: 'Đây là mô tả khu nhập đạo',
          image: 'src/assets/image/home/map/img1.png',
          toadodiem: {
            toadoX: 800,
            toadoY: 540,
            text: 'matrix(1 0 0 1 795 545)'
          },
          toadoanh: {
            toadoX: 534,
            toadoY: 429,
            kichthuocX: 603,
            kichthuocY: 295.39,
            duongdananh: 'src/assets/image/home/map/1.png',
            vitri: 'matrix(1 0 0 1 534 429)'
          }
        },
        {
          stt: 2,
          ten: 'Khu Thành Đạt',
          mota: 'Đây là mô tả Khu Thành Đạt',
          image: 'src/assets/image/home/map/img1.png',
          toadodiem: {
            toadoX: 1065,
            toadoY: 450,
            text: 'matrix(1 0 0 1 1060 455)'
          },
          toadoanh: {
            toadoX: 843,
            toadoY: 371.58,
            kichthuocX: 472,
            kichthuocY: 192.05,
            duongdananh: 'src/assets/image/home/map/2.png',
            vitri: 'matrix(1 0 0 1 843 371.58)'
          }
        },
        {
          stt: 3,
          ten: 'Khu vườn bia Tiến sĩ',
          mota: 'Đây là mô tả Khu vườn bia Tiến sĩ',
          image: 'src/assets/image/home/map/img1.png',
          toadodiem: {
            toadoX: 1230,
            toadoY: 380,
            text: 'matrix(1 0 0 1 1225 385)'
          },
          toadoanh: {
            toadoX: 1029,
            toadoY: 320.5,
            kichthuocX: 436,
            kichthuocY: 153.52,
            duongdananh: 'src/assets/image/home/map/3.png',
            vitri: 'matrix(1 0 0 1 1029 320.5)'
          }
        },
        {
          stt: 4,
          ten: 'Khu Đại Thành',
          mota: 'Đây là mô tả Khu Đại Thành',
          image: 'src/assets/image/home/map/img1.png',
          toadodiem: {
            toadoX: 1372,
            toadoY: 318,
            text: 'matrix(1 0 0 1 1367 323)'
          },
          toadoanh: {
            toadoX: 1181,
            toadoY: 266,
            kichthuocX: 435,
            kichthuocY: 132.9,
            duongdananh: 'src/assets/image/home/map/4.png',
            vitri: 'matrix(1 0 0 1 1181 266)'
          }
        },
        {
          stt: 5,
          ten: 'Khu Thái Học',
          mota: 'Đây là mô tả Khu Thái Học',
          image: 'src/assets/image/home/map/img1.png',
          toadodiem: {
            toadoX: 1549,
            toadoY: 251,
            text: 'matrix(1 0 0 1 1544 256)'
          },
          toadoanh: {
            toadoX: 1365,
            toadoY: 203.84,
            kichthuocX: 396,
            kichthuocY: 115.99,
            duongdananh: 'src/assets/image/home/map/5.png',
            vitri: 'matrix(1 0 0 1 1365 203.84)'
          }
        }
      ],
      locationShowing: {
        stt: 1,
        ten: 'Khu Nhập Đạo',
        mota: 'Đây là mô tả khu nhập đạo',
        image: 'src/assets/image/home/map/img1.png',
        toadodiem: {
          toadoX: 800,
          toadoY: 540,
          text: 'matrix(1 0 0 1 795 545)'
        },
        toadoanh: {
          toadoX: 534,
          toadoY: 429,
          kichthuocX: 603,
          kichthuocY: 295.39,
          duongdananh: 'src/assets/image/home/map/1.png',
          vitri: 'matrix(1 0 0 1 534 429)'
        }
      }
    }
  },
  methods: {
    showLocationMap(location) {
      this.locationShowing = location
      this.locations.map((location) => {
        document.getElementById('location' + location.stt).classList.remove('active')
        document.getElementById('item-location' + location.stt).classList.remove('active')
      })
      document.getElementById('location' + location.stt).classList.add('active')
      document.getElementById('item-location' + location.stt).classList.add('active')
    }
  },
  created() {},
  mounted() {
    document.getElementById('location1').classList.add('active')
  }
}
</script>

<template>
  <div id="map-location" class="map-view">
    <div class="map-header" style="position: absolute; width: 100%">
      <h2>Bản đồ</h2>
      <h3>Khu vực tham quan</h3>
    </div>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1920 850"
      style="enable-background: new 0 0 1920 850"
      xml:space="preserve"
    >
      <g id="Background">
        <image
          style="overflow: visible"
          width="1920"
          height="850"
          id="BG"
          xlink:href="/src/assets/image/home/map/bg-map.png"
        ></image>
      </g>

      <g id="Pin" class="dot-location">
        <g
          :data-num="item.stt"
          class="item-location dot"
          v-for="(item, index) in locations"
          :key="index"
          @click="showLocationMap(item)"
        >
          <circle class="st0" :cx="item.toadodiem.toadoX" :cy="item.toadodiem.toadoY" r="13" />
          <text :transform="item.toadodiem.text" class="st1 st2 st3">
            {{ item.stt }}
          </text>
        </g>
      </g>
      <g id="Active_1_">
        <g
          :id="'location' + item.stt"
          :class="'location location' + item.stt"
          v-for="(item, index) in locations"
          :key="index"
        >
          <image
            style="overflow: visible"
            :width="item.toadoanh.kichthuocX"
            :height="item.toadoanh.kichthuocY"
            :xlink:href="item.toadoanh.duongdananh"
            :transform="item.toadoanh.vitri"
          ></image>
          <g>
            <circle class="st0" :cx="item.toadodiem.toadoX" :cy="item.toadodiem.toadoY" r="13" />
            <text :transform="item.toadodiem.text" class="st1 st2 st3">
              {{ item.stt }}
            </text>
          </g>
        </g>
      </g>
    </svg>
    <div class="map-list-locations">
      <h3>Điểm tham quan</h3>
      <h5
        v-for="(item, index) in locations"
        :key="index"
        :id="'item-location' + item.stt"
        class="item-location"
        :data-num="item.stt"
        @click="showLocationMap(item)"
      >
        <span>{{ item.stt }}</span
        ><span>{{ item.ten }}</span>
      </h5>
    </div>
    <div class="map-location-detail">
      <img :src="locationShowing.image" />
      <h3>{{ locationShowing.ten }}</h3>
      <p>{{ locationShowing.mota }}</p>
    </div>
  </div>
</template>
<style scoped>
.st0 {
  fill: #ac3501;
}

.st1 {
  fill: #fff;
}

.st3 {
  font-size: 16px;
}

/*.d-none {
            display: none !important;
        }*/

.item-location {
  transition: 0.3s;
  cursor: pointer;
}

#map-location .location {
  display: none;
}

#map-location .location.active {
  display: block;
  pointer-events: none;
}

#map-location {
  position: relative;
}
#map-location .map-header {
  position: absolute;
  width: 100%;
  text-align: center;
}
#map-location .map-header h2 {
  font-family: Qwigley;
  color: #ac3501;
  font-size: 80px;
  margin-top: 48px;
  line-height: 80%;
  font-weight: 400;
}
#map-location .map-header h3 {
  font-size: 36px;
  font-weight: 600;
}

.map-list-locations {
  position: absolute;
  width: 360px;
  bottom: 0;
  background-color: #fff;
  padding: 0 0 40px 40px;
}
.map-list-locations h3 {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.map-list-locations h5.item-location {
  margin-top: 80px;
  font-style: 20px;
  user-select: none;
}
.map-list-locations h5.item-location span:first-child {
  padding: 8px 14px;
  background-color: transparent;
  border: 1px solid #ac3501;
  border-radius: 50%;
  color: #ac3501;
  margin-right: 10px;
  font-weight: 700;
}
.map-list-locations h5.item-location span:nth-child(2) {
  color: #000;
  font-weight: 700;
}

.item-location.active span:first-child {
  background-color: #ac3501 !important;
  color: #fff !important;
}
.item-location.active span:nth-child(2) {
  color: #ac3501 !important;
}

.map-location-detail {
  position: absolute;
  width: 360px;
  bottom: 40px;
  right: 5%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
}
.map-location-detail img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.map-location-detail h3 {
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  color: #121215;
}
.map-location-detail p {
  width: 100%;
  border-radius: 10px 10px 0 0;
  font-weight: 400;
  font-size: 18px;
  color: #5e5e5e;
}
</style>
