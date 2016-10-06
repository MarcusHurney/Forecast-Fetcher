import axios from 'axios';
import * as types from './ActionTypes';

const API_KEY = '4da55b76fff8900a19483e261af4a928';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: types.FETCH_WEATHER,
		payload: request
	};

}
