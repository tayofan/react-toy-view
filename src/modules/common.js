import { combineReducers } from "redux";
import board from './board';
import criteria from './criteria';

const rootReducer = combineReducers({
    board,
    criteria
});

export default rootReducer;