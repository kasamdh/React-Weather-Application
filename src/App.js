 // importing from package.json 
import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "1b41d6f15e637580fd1e98a9eb3dc363";


//state is an object lives within the component and responsible for changing data within the component
// state carry Key Value Pairs
 class App extends React.Component {
   
   state = {
     temperature:undefined,
     city:undefined,
     country:undefined,
     humidity:undefined,
     description:undefined,
     error:undefined
     
   }
   getWeather = async(e)=>{
    e.preventDefault();
    //target.elements  for city and its value whatever we type into the input
     const city = e.target.elements.city.value;
     //target.elements  for country and its value whatever we type into the input
     const country = e.target.elements.country.value;
     // http calls web 
    //  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      // const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=${API_KEY}`);
   const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
   
     // convert API to JSON format
     const data = await api_call.json();
     console.log(data)
     
     // setState is a builtin method
     this.setState({
       temperature:data.main.temp,
     });



   }
  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather = {this.getWeather}/>
        <Weather/>
       
        
      </div>
    )
  }
}

export default App

