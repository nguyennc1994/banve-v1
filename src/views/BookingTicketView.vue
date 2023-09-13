<script>
import axios from 'axios'
export default {
  data() {
    return {
      stepChosen: 1,
      dataShow: [],
      showChosen: null,
      dataChair: [],
      dateSelected: '',
      timeSelected: '',
      chairsChossing: [],
      totalTicket: 0,
      totalMoney: 0
    }
  },
  created() {
    axios
      .get(`http://localhost:5173/public/data0.json`)
      .then((response) => {
        this.dataShow = response.data.dataShow
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
        // this.errors.push(e)
      })
  },
  methods: {
    choosingShowHandle(show) {
      this.stepChosen = 2
      this.showChosen = show
    },

    chunkArray(myArray, chunk_size) {
      let tempArray = []
      for (let index = 0; index < myArray.length; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size)
        tempArray.push(myChunk)
      }
      return tempArray
    },

    buyTicket() {
      this.totalMoney = this.showChosen.price * this.totalTicket
    },

    choosingChairHandle(chair) {
      if (this.chairsChossing.includes(chair)) {
        this.chairsChossing = this.chairsChossing.filter((item) => item !== chair)
        this.totalMoney -= chair.price
      } else {
        this.chairsChossing.push(chair)
        this.totalMoney += chair.price
      }
    },

    checkOut() {
      this.stepChosen = 3
    },

    backStepToDetail() {
      this.stepChosen = 2
    },
    backStepToChooseShow() {
      this.resetData()
    },

    resetData() {
      this.stepChosen = 1
      this.showChosen = null
      this.dateSelected = ''
      this.timeSelected = ''
      this.dataChair = []
      this.chairsChossing = []
      this.totalMoney = 0
      this.totalTicket = 0
    },
    async getChairsByTime() {
      this.chairsChossing = []
      this.totalMoney = 0
      await axios
        .get(`http://localhost:5173/public/${this.timeSelected}.json`)
        .then((response) => {
          this.dataChair = response.data.dataChair
          for (let i = 0; i < response.data.dataChair.length; i++) {
            this.dataChair[i].chairss = this.chunkArray(response.data.dataChair[i].chairs, 5)
          }
        })
        .catch((e) => {
          console.log(e)
          // this.errors.push(e)
        })
    }
  },
  mounted() {}
}
</script>

<template>
  <main>
    <div class="booking">
      <div class="header row">
        <div class="col-md-1 col-12 d-flex align-items-center flex-column">
          <router-link to="/">
            <img src="../assets/image/booking/logo3.png" height="60" width="60" alt="" />
          </router-link>
        </div>
        <div class="col-md-11 col-12 d-flex justify-content-around align-items-center">
          <div @click="backStepToChooseShow()">
            <img src="../assets/image/booking/chonve.png" />
            <span>Chọn vé</span>
          </div>
          <div v-if="stepChosen == 3" @click="backStepToDetail()">
            <img
              :src="
                stepChosen >= 2
                  ? '../src/assets/image/booking/thongtinve2.png'
                  : '../src/assets/image/booking/thongtinve.png'
              "
            />
            <span>Thông tin vé</span>
          </div>
          <div v-if="stepChosen != 3">
            <img
              :src="
                stepChosen >= 2
                  ? '../src/assets/image/booking/thongtinve2.png'
                  : '../src/assets/image/booking/thongtinve.png'
              "
            />
            <span>Thông tin vé</span>
          </div>
          <div>
            <img
              :src="
                stepChosen == 3
                  ? '../src/assets/image/booking/thanhtoan2.png'
                  : '../src/assets/image/booking/thanhtoan.png'
              "
            />
            <span>Thanh toán</span>
          </div>
        </div>
      </div>
      <div class="booking-main container">
        <div v-if="stepChosen == 1" class="booking-main-step-1">
          <div class="booking-main-step-1-header">
            <h3>Chọn loại vé</h3>
            <i
              >* Quý khách lưu ý, vé sau khi mua không thể thay đổi thời gian, không thể hoàn
              trả.</i
            >
          </div>
          <div class="booking-main-step-1-content">
            <div class="row">
              <div v-for="(show, index) in dataShow" :key="index" class="col-md-6 col-12">
                <div @click="choosingShowHandle(show)">
                  <img :src="show.urlImage" />
                  <h4>{{ show.name }}</h4>
                  <h5>Giá vé: {{ show.price }} vnd</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="stepChosen == 2" class="booking-main-step-2">
          <div class="booking-main-step-2-header">
            <div class="booking-main-step-2-choose-time-header">
              {{ showChosen.name }}
            </div>
            <div v-if="showChosen.type == 1">
              <div class="booking-main-step-2-choose-time">
                <div class="row">
                  <div class="col-md-6 col-12">
                    <h4>Ngày xem</h4>
                    <input type="date" v-model="dateSelected" />
                  </div>
                  <div class="col-md-6 col-12">
                    <h4>Khung giờ</h4>
                    <select
                      v-if="!dateSelected"
                      disabled
                      id="time-show"
                      v-on:change="getChairsByTime(this.value)"
                      v-model="timeSelected"
                    >
                      <option selected value="Hãy chọn khung giờ xem trình chiếu">
                        Hãy chọn khung giờ xem trình chiếu
                      </option>
                      <option
                        v-for="(time, index) in showChosen.detail[0].time"
                        :key="index"
                        :value="time.name"
                      >
                        {{ time.time }}
                      </option>
                    </select>
                    <select
                      v-if="dateSelected"
                      id="time-show"
                      v-on:change="getChairsByTime(this.value)"
                      v-model="timeSelected"
                    >
                      <option selected value="Hãy chọn khung giờ xem trình chiếu">
                        Hãy chọn khung giờ xem trình chiếu
                      </option>
                      <option
                        v-for="(time, index) in showChosen.detail[0].time"
                        :key="index"
                        :value="time.name"
                      >
                        {{ time.time }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div v-if="dataChair.length > 0" class="booking-main-step-2-choose-chairs">
                <div class="booking-main-step-2-choose-chairs-header">
                  <h3>Chọn vị trí xem biểu diễn</h3>
                  <div></div>
                </div>
                <div class="booking-main-step-2-choose-chairs-main">
                  <div
                    class="booking-main-step-2-choose-chairs-main-row"
                    v-for="(row, index) in dataChair"
                    :key="index"
                  >
                    <div
                      v-for="(chairs, index) in row.chairss"
                      class="booking-main-step-2-choose-chairs-main-group"
                      :key="index"
                    >
                      <div class="booking-main-step-2-choose-chairs-main-group-table"></div>
                      <div class="booking-main-step-2-choose-chairs-main-group-chairs">
                        <div
                          :class="{
                            'bought-chair': chair.status,
                            'selected-chair': chairsChossing.includes(chair)
                          }"
                          @click="choosingChairHandle(chair)"
                          v-for="(chair, index) in chairs"
                          :key="index"
                        >
                          {{ chair.chairID }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="showChosen.type == 0">
              <div class="booking-main-step-2-choose-time">
                <div class="row">
                  <div class="col-md-6 col-12">
                    <h4>Ngày xem</h4>
                    <input type="date" v-model="dateSelected" />
                  </div>
                  <div class="col-md-6 col-12">
                    <h4>Số lượng</h4>
                    <input
                      v-if="!dateSelected"
                      disabled
                      type="number"
                      v-model="totalTicket"
                      v-on:change="buyTicket()"
                    />
                    <input
                      v-if="dateSelected"
                      type="number"
                      v-model="totalTicket"
                      v-on:change="buyTicket()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="booking-main-step-2-footer">
            <h3>Tổng cộng: {{ totalMoney }}</h3>
            <span v-on:click="checkOut()">Thanh toán</span>
          </div>
        </div>
        <div v-if="stepChosen == 3" class="booking-main-step-3">
          <div class="booking-main-step-3-header">
            <div class="row">
              <div class="col-md-7 col-12">
                <h2>Thông tin khách hàng</h2>
                <h4>Họ tên:</h4>
                <input type="text" placeholder="Nhập họ tên của bạn" />
                <h4>Email:</h4>
                <input type="text" placeholder="nguyenvana@gmail.com" />
                <h4>Số điện thoại:</h4>
                <input type="text" placeholder="0987654321" />
                <h4>Số CMND/CCCD:</h4>
                <input type="text" placeholder="00000000000" />
                <h4>Địa chỉ:</h4>
                <input type="text" placeholder="71 Láng Hạ, Thành Công, Ba Đình, Hà Nội" />
              </div>
              <div class="col-md-5 col-12">
                <h2>Đơn hàng</h2>
                <h2>{{ showChosen.name }}</h2>
                <span>{{ dateSelected }}</span>
                <span>{{ timeSelected }}</span>
                <h3>Chi phí</h3>
                <h4>Số lượng vé: {{ totalTicket > 0 ? totalTicket : chairsChossing.length }}</h4>
                <h4>Giá vé: {{ showChosen.price }}</h4>
                <h4>Tổng cộng: {{ totalMoney }}</h4>
                <h4>Thanh toán</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.header {
  height: 80px;
  background-color: #f89345;
}
.booking-footer {
  margin-top: 50px;
}
.booking-footer span {
  background-color: #f89345;
  padding: 10px 20px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
}

.booking-main-step-2-choose-chairs-header div {
  background-image: url(../assets/image/booking/manhinh.png);
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 2.35%;
}

.booking-main-step-2-choose-chairs-main {
  margin-top: 48px;
}
.booking-main-step-2-choose-chairs-main-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
  gap: 0 10px;
  margin-bottom: 20px;
}

.booking-main-step-2-choose-chairs-main-group {
  margin-top: 10px;
}
.booking-main-step-2-choose-chairs-main-group-table {
  width: 100%;
  height: 20px;
  background-color: #2b3016;
}
.booking-main-step-2-choose-chairs-main-group-chairs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 8px;
  gap: 2px;
}
.booking-main-step-2-choose-chairs-main-group-chairs div {
  padding: 2px;
  font-size: 10px;
  font-weight: 500;
  color: #121215;
  text-transform: uppercase;
  border: 1px solid #f89345;
  user-select: none;
}
.bought-chair {
  background-color: #c5c5c5;
  color: #fff !important;
  border: 1px solid #c5c5c5 !important;
  pointer-events: none;
}
.selected-chair {
  background-color: #ac3501;
  color: #fff !important;
  border: 1px solid #ac3501 !important;
}

.booking-main-step-2-footer {
  height: 80px;
  background-color: #fff4ef;
}
.booking-main-step-2-footer span {
  height: 48px;
  background-color: #ac3501;
  text-transform: uppercase;
  padding: 12px 15px;
  font-style: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
}
</style>
