import { combineReducers } from "redux";
import {loginReducer} from "./LoginReducer"
import {ComicsReducer} from "./ComicsReducer"


const rootReducer = combineReducers({
    loginReducer,
    ComicsReducer
})

export default rootReducer
