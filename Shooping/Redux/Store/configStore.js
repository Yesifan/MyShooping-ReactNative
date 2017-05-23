/**
 * Created by y5049 on 2017/5/10.
 */

import {createStore,combineReducers,applyMiddleware} from 'redux';

import {nav,reducer} from '../Reducer/index';

const rootReducer = combineReducers(
    {
        nav,
        reducer,
    }
);

//中间件
const logger = store => next => action => {
    // if(action.type==='_SELECT')
    // {
    //     return next(action);
    // }
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result
};



let store =createStore(
    rootReducer,
    applyMiddleware(logger)
);

export const getStore=()=>{
    return store;
};