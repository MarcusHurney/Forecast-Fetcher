import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMaps';

class WeatherList extends Component {

	renderWeather(cityData) {

		if (cityData.cod === '404') {

			return;

		}

		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (9/5)*(temp-273)+32);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart data={temps} color="orange" units="°F" />
				</td>
				<td>
					<Chart data={pressures} color="blue" units="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="green" units="%" />
				</td>
			</tr>
		);
	}



	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) { // This is using ES6 syntax
	return { weather };
}

//Here is what it would look like without ES6

// function mapStateToProps(state) {
	//return {weather: state.weather}
//}

export default connect(mapStateToProps)(WeatherList); // This actually makes the mapStateToProps function available to WeatherList
