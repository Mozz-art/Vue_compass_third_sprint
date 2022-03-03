import Regions from '@/constants/regions.js'
export default function weatherAPI(){

  navigator.geolocation.getCurrentPosition(function(position){

    const lat = position.coords.latitude
    const long = position.coords.longitude
        
    fetch(`https://api.weatherapi.com/v1/current.json?key=3a8e38945c8048d4a22134953221002&q=${lat}, ${long}&aqi=no`)
    .then((respondes)=> respondes.json()).then(result =>{

      const city = result.location.name
      const region = Regions(result.location.region)
      const temp = result.current.temp_c
      
      let icons = result.current.condition.icon
      
      document.querySelector("#city").innerHTML = city + " - " + region;
      document.querySelector("#temperature").innerHTML = temp + "º";
      let Icons =  document.querySelector("#icon")
      Icons.src = icons
    })

  })

}