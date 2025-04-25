        const apiURL = "https://api.weatherapi.com/v1/current.json?q=cancun&key=4e5e576e864142e780a45600252403";
          fetch(apiURL)
              .then(response => {
                  if(!response.ok) {
                      throw new Error("Network response was not OK");
                  }
                  return response.json();
              })
              .then(data => {
                  var weatherInfo = data;
                  console.log(weatherInfo);
                  city.innerHTML = weatherInfo.location.name;
                  temp.innerHTML = weatherInfo.current.temp_c;
                  temp2.innerHTML = weatherInfo.current.temp_f;
                  cond.innerHTML = weatherInfo.current.condition.text;
                  icon.src = "https:" + weatherInfo.current.condition.icon;
              })
              .catch(error => {
                  console.error("Error:", error);
              })
