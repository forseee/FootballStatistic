import { createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import leagueReducer from "./leagueReducer";
import teamReducer from "./teamReducer";


let reducers = combineReducers({
    leaguePage: leagueReducer,
    teamPage: teamReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store;