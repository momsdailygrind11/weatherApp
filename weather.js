
        var locationElem = document.getElementById('location');
        var tempElem = document.getElementById('temp');
        var descElem = document.getElementById('desc');
      
        function showWeather() {
            // TODO: build url and make fetch call here
            var zipCode = document.getElementById('zip');
            fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode.value + ',us&units=imperial&appid=3175e8154c7a7afe312bd0cd6cf6b338')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                        displayWeather(data);                    
                });
        }

        function displayWeather(data) {
            var nameValue = data['name']; //data.name
            locationElem.innerText = nameValue;

            var tempValue = data['main']['temp']; //data.main.temp
            tempElem.innerText = tempValue;


            var descValue = data['weather'][0]['description']; //data.weather[0].id
            descElem.innerText = descValue;

           
             var idValue = data.weather[0].icon;
             var iconId = document.getElementById('icon');
             iconId.innerHTML = 
             "<img src= http://openweathermap.org/img/wn/" + idValue + "@2x.png>";                      
            var weatherIcon =data.weather[0].id;
            if (weatherIcon >= 200 && weatherIcon <= 232) {
                   document.getElementById('weatherShow').className = "thunderstorms";
            }
            else if (weatherIcon >= 300 && weatherIcon <= 332) {
                document.getElementById('weatherShow').className = "drizzle";
            }
            else if (weatherIcon >= 500 && weatherIcon <= 531) {
                document.getElementById('weatherShow').className = "rain";
            }
            else if (weatherIcon >= 600 && weatherIcon <= 622) {
                document.getElementById('weatherShow').className = "snow";
            }
            else if (weatherIcon >= 801 && weatherIcon <= 804) {
                document.getElementById('weatherShow').className = "atmosphere";
            }
            else if (weatherIcon == 800) {
                document.getElementById('weatherShow').className = "clearskies";
            }
          

     }



