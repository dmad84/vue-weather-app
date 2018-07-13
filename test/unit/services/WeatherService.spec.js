import WeatherService from '@/services/WeatherService'
import moxios from 'moxios'

describe('getWeather() using Promises', () => {

  beforeEach(function() {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  moxios.wait(function() {
    let request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: [{
        "cnt": 2,
        "list": [{
            "weather": [{
              "id": 1,
              "main": "Rain",
            }],
            "main": {
              "temp": 19,
            },
            "name": "Edinburgh"
          },
          {
            "weather": [{
              "id": 2,
              "main": "Rain",
            }],
            "main": {
              "temp": 18,
            },
            "name": "Glasgow"
          }
        ]
      }]
    }).then(function() {
      done()
    })
  })

  it('should load user data', () => {
    return WeatherService.getWeather()
      .then(response => {
        expect(response).toBeDefined()
       expect(response.data[0].cnt).toEqual(2)
      })
  })
})
