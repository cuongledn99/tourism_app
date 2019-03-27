const key = 'ba2e38fabf6949fc8e3a82a7515a925a';
const getLocation = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitute = position.coords.latitude;
      const longitude = position.coords.longitude;
      let request = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitute},${longitude}&key=${key}`);
      const data = await request.json();
      console.log(data);
      let cityName = data.results[0].components.city;
      cityName = cityName.split(' ').join('');
      /*HoChiMinhCity
      Hanoi
      Dalat
      Hue */
      console.log(cityName);
    });
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}
getLocation();

