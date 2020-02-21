 // importing from package.json 
import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// const API_KEY = "1b41d6f15e637580fd1e98a9eb3dc363";


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
     // to access the data we need data and anything we want to access
 
    //If both cities and country is true show the value
     if (city && country){
      this.setState({
        //data.main.temp is coming from API console
         temperature:data.main.temp,
         city:data.name,
         country:data.sys.country,
         humidity:data.main.humidity,
         description:data.weather[0].description,
         error:""
 
      });


     }else{
      this.setState({
        //data.main.temp is coming from API console
         temperature:undefined,
         city:undefined,
         country:undefined,
         humidity:undefined,
         description:undefined,
         error:'Please Enter City and Country Name'
 
      });

     }



   }
  render() {
    return (
      <div>
        <div className= "wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles/>

                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather = {this.getWeather}/>
                    <Weather
                        // this are the properties aka Props
                      temperature= {this.state.temperature}
                      city = {this.state.city}
                      country = {this.state.country}
                      humidity = {this.state.humidity}
                      description = {this.state.description}
                      error = {this.state.error}
                      />
                

                </div>

              </div>
            </div>

          </div>

        </div>

        
        
        
        
      </div>
    )
  }
}

export default App

