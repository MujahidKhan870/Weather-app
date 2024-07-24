
const apiKey=`365f0669d4ca0abbb43051b4b069999c`;




 async function  fetchwhetherData(city){
     const response=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
     const data= await response.json();
     console.log(data);
     realData(data);
}



const temprature=document.querySelector(".temp");
const cityname=document.querySelector(".cityname");
const windSpeed=document.querySelector(".k-m");
const humidity=document.querySelector(".humidity-per");
const visibility=document.querySelector(".km");
const date=document.querySelector(".date");
const cityinput=document.querySelector(".city");
const whether_image =document.querySelector(".whether-image");
const description=document.querySelector(".description");
const search_form=document.querySelector(".search-form");
const input_box=document.querySelector(".city-input");


function realData(data){
    temprature.textContent=`${Math.round(data.main.temp-273.15)}°C `;
    cityname.textContent=data.name;
    windSpeed.textContent=`${data.wind.speed}km/h`;
    humidity.textContent=`${data.main.humidity}%`;
    visibility.textContent=`${data.visibility/1000}km/h`;
    const currentdate=new Date();
    date.textContent=currentdate.toDateString();
    description.textContent=data.weather[0].description;
    if(data.weather[0].main=='Clouds')
    {
       whether_image.src="cloudy.jpg";
    }
    else if(data.weather[0].main=='Clear')
    {
       whether_image.src="sun.jpg";
    }
    else{

       whether_image.src="cloud.jpg";
    }
   
}

search_form.addEventListener('submit',function(e){
   e.preventDefault();
   const city=input_box.value;
   if(city!=='')
   {
      fetchwhetherData(city);
   }
});