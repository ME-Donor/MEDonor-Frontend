import { createStore,combineReducers,applyMiddleware, compose } from 'redux';
import { DonorSpeaks} from './reducers/donorspeaks';
import UserReducer from './reducers/userReducer';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { NgoBlogs } from './reducers/ngoblogs';
import { Medicines } from './reducers/medicines';
import { NgoBeneficiaries } from './reducers/ngobeneficiary';
import { UserLists } from './reducers/userlists';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
           donorspeaks: DonorSpeaks,
           medicines: Medicines,
           ngobeneficiaries: NgoBeneficiaries,
           ngoblogs:NgoBlogs,
           userlists:UserLists,
           user: UserReducer
        }),
        composeEnhancers(applyMiddleware(thunk, logger))
    );
    return store;
}