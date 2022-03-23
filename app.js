//Weather Map API endpoints
//Define cards

const card_0 = document.createElement("div");
const card_1 = document.createElement("div");
const card_2 = document.createElement("div");
const card_3 = document.createElement("div");
const card_4 = document.createElement("div");
const card_5 = document.createElement("div");
const card_6 = document.createElement("div");
const card_7 = document.createElement("div");
const card_8 = document.createElement("div");
const card_9 = document.createElement("div");
const card_10 = document.createElement("div");
const card_11 = document.createElement("div");
const card_12 = document.createElement("div");

//Add classes to cards

card_0.classList.add("card-0");
card_1.classList.add("card-1");
card_2.classList.add("card-2");
card_3.classList.add("card-3");
card_4.classList.add("card-4");
card_5.classList.add("card-5");
card_6.classList.add("card-6");
card_7.classList.add("card-7");
card_8.classList.add("card-8");
card_9.classList.add("card-9");
card_10.classList.add("card-10");
card_11.classList.add("card-11");
card_12.classList.add("card-12");

//Define constants
const root = document.querySelector("#root");
const array = [];

//Define more constants
const longitude = document.createElement("p");
const latitude = document.createElement("p");
//get the array of objects
const arr_stations = document.createElement("div");
const arr_id = document.createElement("p");
const arr_main = document.createElement("p");
const arr_description = document.createElement("p");
const arr_icon = document.createElement("p");
const arr_temp = document.createElement("p");
const arr_temp_min = document.createElement("p");
const arr_temp_max = document.createElement("p");
const arr_feels_like = document.createElement("p");
const arr_humidity = document.createElement("p");
const arr_4 = document.createElement("p");
const arr_speed = document.createElement("p");
const arr_deg = document.createElement("p");
const arr_gust = document.createElement("p");
const arr_all = document.createElement("p");
const arr_7 = document.createElement("p");
const arr_id_8 = document.createElement("p");
const arr_type = document.createElement("p");
const arr_sunrise = document.createElement("p");
const arr_sunset = document.createElement("p");
const arr_country = document.createElement("p");
const arr_9 = document.createElement("p");
const arr_10 = document.createElement("p");
const arr_11 = document.createElement("p");
const arr_12 = document.createElement("p");

const weather_api_res = async () => {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=93dde9f3522583d6a4a162552949e8fe&units=metric"
    );
    console.log("res in json format is:", res);
    const data = await res.json();
    console.log("data about weather: ", data);
    //Get some data from the json o/new Promise(function(resolve, reject) {
    console.log("data.base: ", data.base);
    console.log("data.main: ", data.main);
    console.log("data.main.temp ", data.main.temp);
    console.log("data.weather.length: ", data.weather.length);
    // Get data printed on the browser
    //convert the object into an array
    const data_arr = Object.values(data);
    console.log("data_arr", data_arr);
    console.log("Stations: ", data_arr[2]);
    //Loop through the array obtained from above
    data_arr.forEach((arr, index, data_arr) => {
      console.log("index", index);
      console.log("The array:", arr);
      console.log("data_arr[index]", data_arr[index]);
      if (index !== undefined) {
        if (index === 0) {
          if (arr !== undefined) {
          } //if index 0 ends
          //Get latitude & Longitude, index=0

          longitude.classList.add("longitude");
          if (arr.lon !== undefined) {
            longitude.textContent = `Longitude: ${arr.lon}`;
          }
          latitude.classList.add("latitude");
          if (arr.lat !== undefined) {
            latitude.textContent = `Latitude: ${arr.lat}`;
          }
        } //if index=0 ends
        //Get index=1
        if (index === 1) {
          for (let arr_obj in arr) {
            console.log("arr[arr_obj]is: ", arr[arr_obj]);
            console.log("arr[arr_obj].id", arr[arr_obj].id);
            arr_id.classList.add("arr-id");
            arr_id.textContent = `Id: ${arr[arr_obj].id} `;
            arr_main.classList.add("arr-main");
            arr_main.textContent = `Main: ${arr[arr_obj].main} `;
            arr_description.classList.add("arr-description");
            arr_description.textContent = `Desc: ${arr[arr_obj].description} `;
            arr_icon.classList.add("arr-icon");
            arr_icon.textContent = `Icon: ${arr[arr_obj].icon} `;
          }
        }
        //Get Object from index=2
        if (index === 2) {
          arr_stations.classList.add("arr-stations");
          arr_stations.textContent = `Base: ${arr}`;
        }
        if (index === 3) {
          arr_temp.classList.add("arr-temp-min");
          arr_temp.textContent = `Temp: ${arr.temp} `;
          arr_temp_min.classList.add("arr-temp-min");
          arr_temp_min.textContent = `Temp_Min: ${arr.temp_min} `;
          arr_temp_max.classList.add("arr-temp-max");
          arr_temp_max.textContent = `Temp_Max: ${arr.temp_max} `;
          arr_feels_like.classList.add("arr-feels-like");
          arr_feels_like.textContent = `Feels_Like: ${arr.feels_like} `;
          arr_humidity.classList.add("arr-humidity");
          arr_humidity.textContent = `Humidity: ${arr.humidity} `;
          console.log("arr.temp", arr.temp);
        }
        //index=4
        if (index === 4) {
          arr_4.classList.add("arr-4");
          arr_4.textContent = `Visibility: ${arr}`;
        }
        //index=5
        if (index === 5) {
          arr_speed.classList.add("arr-speed");
          arr_speed.textContent = `Wind Speed: ${arr.speed} `;
          arr_deg.classList.add("arr-deg");
          arr_deg.textContent = `Deg: ${arr.deg}`;
          arr_gust.classList.add("arr-gust");
          arr_gust.textContent = `Gust: ${arr.gust}`;
        }
        if (index === 6) {
          arr_all.classList.add("arr-all");
          arr_all.textContent = `Clouds: ${arr.all}`;
        }
        if (index === 7) {
          arr_7.classList.add("arr-7");
          arr_7.textContent = `Coord dt: ${arr}`;
        }
        if (index === 8) {
          arr_id_8.classList.add("arr-id-8");
          arr_id_8.textContent = `Id: ${arr.id} `;
          arr_type.classList.add("arr-type");
          arr_type.textContent = `Type: ${arr.type} `;
          arr_sunrise.classList.add("arr-sunrise");
          arr_sunrise.textContent = `Sunrise: ${arr.sunrise} `;
          arr_sunset.classList.add("arr-sunset");
          arr_sunset.textContent = `Sunset: ${arr.sunset} `;
          arr_country.classList.add("arr-country");
          arr_country.textContent = `Country: ${arr.country} `;
        }
        if (index === 9) {
          arr_9.classList.add("arr-9");
          arr_9.textContent = `Time Zone: ${arr}`;
          console.log(arr_9);
        }
        if (index === 10) {
          arr_10.classList.add("arr-10");
          arr_10.textContent = `Coord Id: ${arr}`;
          console.log(arr_10);
        }
        if (index === 11) {
          arr_11.classList.add("arr-11");
          arr_11.textContent = `City: ${arr}`;
          console.log(arr_11);
        }
        if (index === 12) {
          arr_12.classList.add("arr-12");
          arr_12.textContent += `Clouds Coord: ${arr}`;
          console.log(arr_12);
        }
        //Append to cards
        card_0.append(longitude, latitude);
        card_1.append(arr_id, arr_main, arr_description, arr_icon);
        card_2.append(arr_stations);
        card_3.append(
          arr_temp,
          arr_temp_min,
          arr_temp_max,
          arr_feels_like,
          arr_humidity
        );
        card_4.append(arr_4);
        card_5.append(arr_speed, arr_deg, arr_gust);
        card_6.append(arr_all);
        card_7.append(arr_7);
        card_8.append(arr_id_8, arr_type, arr_sunrise, arr_sunset, arr_country);
        card_9.append(arr_9);
        card_10.append(arr_10);
        card_11.append(arr_11);
        card_12.append(arr_12);
        root.append(
          card_0,
          card_1,
          card_2,
          card_3,
          card_4,
          card_5,
          card_6,
          card_7,
          card_8,
          card_9,
          card_10,
          card_11,
          card_12
        );
      } //if index undefined ends
    }); //forEach ends
  } catch (e) {
    console.log("Error occured", e);
  }
};
weather_api_res();
