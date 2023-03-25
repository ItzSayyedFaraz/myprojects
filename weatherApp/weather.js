const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f681e5a2emsh8c97369954f5588p147d77jsnf2b5ca54fb15',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityName.innerHTML=city;
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct;
		temp.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		wind_speed.innerHTML = response.wind_speed;
		wind_degrees.innerHTML = response.wind_degrees;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
	})
	.catch(err => console.error(err));
}

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		const data=Object.values(response);
		console.log(data);
		var td="";
		document.getElementById("s0").innerHTML=data[0];
		document.getElementById("s1").innerHTML=data[1];
		document.getElementById("s2").innerHTML=data[2];
		document.getElementById("s3").innerHTML=data[4];
		document.getElementById("s4").innerHTML=data[5];
		document.getElementById("s5").innerHTML=data[6];
		document.getElementById("s6").innerHTML=data[7];
		document.getElementById("s7").innerHTML=data[8];
	})
	.catch(err => console.error(err));

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		const Bost =Object.values(response);
		console.log(Bost);
		for(i=0;i<Bost.length;i++)
		document.getElementsByClassName("bost")[i].innerHTML=Bost[i];

		
	})
	.catch(err => console.error(err));

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		const Luck =Object.values(response);
		console.log(Luck);
		for(i=0;i<Luck.length;i++)
		document.getElementsByClassName("luck")[i].innerHTML=Luck[i];

		
	})
	.catch(err => console.error(err));

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		const Kol =Object.values(response);
		console.log(Kol);
		for(i=0;i<Kol.length;i++)
		document.getElementsByClassName("kol")[i].innerHTML=Kol[i];

		
	})
	.catch(err => console.error(err));


submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})
getWeather("Delhi");