import React from 'react';

const Weather = (props) => {
    return (
        <center>
        <div>
            {props.country && props.city && <p>Location: {props.city},  {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature} °F</p>}
            {props.tempLow && props.tempHigh && <p>High Temp: {props.tempHigh}°F  Low Temp: {props.tempLow}°F</p>}
            {props.humidity && <p>Humidity: {props.humidity} %</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.windSpeed && <p>Wind Speed: {props.windSpeed} mph</p>}
            {props.error && <p>{props.error}</p>}
        </div>
        </center>
    )
}

export default Weather;