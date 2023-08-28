import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Belgrade</p>
                <p className="weather-description">Sunny</p>
            </div>
            <img alt="weather" className="weather-icon" src=""/>
        </div>
    );
}
export default CurrentWeather;