import Api from '@/services/Api'

export default {
  getWeather () {
    return Api().get()
  }
}
