<template>
  <div v-if="weathersList" class="container">
    <h1>{{ message }}</h1>
    <div v-for="weather in weathersList" v-bind:key="weather.id" >
      <div v-if="weather.weather" class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-4">
          <div class="card">
            <div class="card-head">
              <h5 class="card-title">{{ weather.name }} <img :src="'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'" /></h5>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ weather.weather[0].description }}</h5>
              <p class="card-text">Current Temp: {{ weather.main.temp }}</p>
              <p class="card-text">Min Temp: {{ weather.main.temp_min }}</p>
              <p class="card-text">Max Temp: {{ weather.main.temp_max }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      weathersList: {},
      message: 'weather app',
      url: ''
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$http.get('https://api.openweathermap.org/data/2.5/group?id=2650225,2673730&units=metric&APPID=2224f0fb90f0d015e442ca2c30f99d9d').then(function (response) {
        // get body data
        this.weathersList = response.body.list
      }).catch(function (error) {
        this.message = error
        console.log(error.body.message)
      })
    }
  }
}

</script>
