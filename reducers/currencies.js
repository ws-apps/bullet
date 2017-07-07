
import constants from '../constants/currencies';

export default function (

	state 	= {
		error 	: null 	,
		items 	: {} 	,
		loading : true
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.error 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: action.error ,
					loading : false
				}
			);

		case constants.set 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					items 	: action.items ,
					loading : false
				}
			);

		case constants.get 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : true
				}
			);

		default :
			return state;
	}
};