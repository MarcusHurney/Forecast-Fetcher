import * as types from '../actions/ActionTypes';

export default function(state = [], action) {

	switch(action.type) {

		case types.FETCH_WEATHER:
			return [action.payload.data, ...state];
      // This ES6 syntax is the same as return state.concat([action.payload.state]);
			// State will look like [city, city, city] not [city, [city, city]]
			// The reason concat is used instead of state.push()
      //is because you want to return a new state instead of mutating it directly
    default:
      return state;
	}
}
