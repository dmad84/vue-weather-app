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
import WeatherService from '@/services/WeatherService'

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
    this.getWeather()
  },
  methods: {
    async getWeather () {
      const response = await WeatherService.getWeather()
      this.weathersList = response.data.list
    }
  }
}

</script>
