import { combineReducers } from "redux";
import ListReducer from "./ListReducer";

const reducer = combineReducers({
    ListReducer: ListReducer,
});

export default reducer;