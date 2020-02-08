import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div className="weather__info">
                {/* now we use condition */}
                {/* <p>Location: {this.props.city}, {this.props.country}</p> */}
                {/* <p>Temperature: {this.props.temperature}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Condition: {this.props.description}</p> */}
                {
                    this.props.city && this.props.country &&<p className="weather__key">Location: <span>{this.props.city}, {this.props.country}</span></p> 
                }
                {
                    this.props.temperature && <p className="weather__key">Temperature: <span>{this.props.temperature}</span></p>
                }
                {
                    this.props.humidity && <p className="weather__key">Humidity:<span> {this.props.humidity}</span></p> 
                }
                {
                    this.props.description &&   <p className="weather__key">Condition:<span> {this.props.description}</span></p>
                }
                {
                    this.props.error && <p className="weather__key"><span>{this.props.error}</span></p>
                }

                
            </div>
        )
    }
}

export default Weather
