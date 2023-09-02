import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  const [city, setCity] = useState([])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=baku&appid=3b0a8c2fe2e1d86791eef81c71efbf9d`)
      .then(res => res.json())
      .then(data => setCity({
        name: data.name, weather: data.main.temp, ok: data.weather.main
      }, []))
  })
  return (
    <>
      <div class="main container">
        <div class="row">
          <div class="col-xs-12">
            <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
              <div class="col-xs-6">
                <h2>{city.name}<br /><small>May 24, 2016</small></h2>
                <p class="h3"><i class="mi mi-fw mi-lg mi-rain-heavy"></i> {city.ok.main} </p>
              </div>
              <div class="col-xs-6 text-center">
                <div class="h1 temperature">
                  <span>{Math.floor(city.weather - 273)}</span>

                  <small>8° / 13°</small>
                </div>
              </div>
              <div class="col-xs-12">
                <ul class="list-inline row forecast">
                  <li class="col-xs-4 col-sm-2 text-center">
                    <h3 class="h5">Wed</h3>
                    <p><i class="mi mi-fw mi-2x mi-cloud-sun"></i><br />9°/18°</p>
                  </li>
                  <li class="col-xs-4 col-sm-2 text-center">
                    <h3 class="h5">Thu</h3>
                    <p><i class="mi mi-fw mi-2x mi-sun"></i><br />12°/23°</p>
                  </li>
                  <li class="col-xs-4 col-sm-2 text-center">
                    <h3 class="h5">Fri</h3>
                    <p><i class="mi mi-fw mi-2x mi-cloud-sun"></i><br />14°/24°</p>
                  </li>
                  <li class="col-xs-4 col-sm-2 text-center">
                    <h3 class="h5">Sat</h3>
                    <p><i class="mi mi-fw mi-2x mi-rain"></i><br />15°/23°</p>
                  </li>
                  <li class="col-xs-4 col-sm-2 text-center">
                    <h3 class="h5">Sun</h3>
                    <p><i class="mi mi-fw mi-2x mi-rain-heavy"></i><br />15°/22°</p>
                  </li>
                  <li class="col-xs-4 col-sm-2 text-center">
                    <h3 class="h5">Mon</h3>
                    <p><i class="mi mi-fw mi-2x mi-clouds"></i><br />12°/17°</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
