import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                {/* now we use condition */}
                {/* <p>Location: {this.props.city}, {this.props.country}</p> */}
                {/* <p>Temperature: {this.props.temperature}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Condition: {this.props.description}</p> */}
                {this.props.city && this.props.country &&<p>Location: {this.props.city}, {this.props.country}</p> }
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
                {this.props.description &&   <p>Condition: {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}

                
            </div>
        )
    }
}

export default Weather
