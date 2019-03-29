const key = 'ba2e38fabf6949fc8e3a82a7515a925a';
const getLocation = async () => {
    if (navigator.geolocation) {

        await saveCoordinatesToLocalStorage();
        let latitude = localStorage.getItem('latitude')
        let longitude = localStorage.getItem('longitude')

        let city= await getCity(latitude, longitude)
        
        /*HoChiMinhCity
        Hanoi
        Dalat
        Hue */
        return city;
    } else {
        console.log("Geolocation is not supported by this browser.");
        return 'Can not get location';
    }
}
const getCity = async (latitude, longitude) => {
    let request = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${key}`);
    const data = await request.json();
	console.log("TCL: getCity -> data", data)
    let cityName = data.results[0].components.city ? data.results[0].components.city:data.results[0].components.town;
    cityName = cityName.split(' ').join('');
    localStorage.setItem('city', cityName);
    return cityName;
}
const saveCoordinatesToLocalStorage = async () => {
    await navigator.geolocation.getCurrentPosition(position => {
        localStorage.setItem('latitude', position.coords.latitude);
        localStorage.setItem('longitude', position.coords.longitude);
    })
}


