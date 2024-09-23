import { combineReducers } from "redux";

import Counter from "./counterReducer";
import crudReducer from "./crudReducer";

const rootReducer = combineReducers({
    cnt: Counter,
    crud: crudReducer
})

export default rootReducer;