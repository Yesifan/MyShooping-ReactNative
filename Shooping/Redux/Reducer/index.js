/**
 * Created by y5049 on 2017/5/10.
 */

import { NavigationActions } from 'react-navigation';

import { StackRoot } from '../../Main';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = StackRoot.router.getActionForPathAndParams('Main');

const tempNavState = StackRoot.router.getStateForAction(firstAction);

const secondAction = StackRoot.router.getActionForPathAndParams('Food');

const initialNavState = StackRoot.router.getStateForAction(tempNavState);

console.log('firstAction',firstAction);
console.log('2',tempNavState);
console.log('3',secondAction);
console.log('4',initialNavState);

//跳转Reducer
export function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = StackRoot.router.getStateForAction(NavigationActions.back(), state);
            break;

        case 'Navigation/NAVIGATE':
            nextState = StackRoot.router.getStateForAction(NavigationActions.navigate({ routeName: action.routeName,params:action.params,action:action.action }), state);
            break;

        // case 'Food':
        //     nextState = StackRoot.router.getStateForAction(NavigationActions.navigate({ routeName: 'Food' }), state);
        //     break;
        default:
            nextState = StackRoot.router.getStateForAction(action, state);
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

const initialAuthState =
    {
        OnOff:false,
        select:1,
        _select:1,
        avatar:'new_friend',
        userName:'点击我登陆',
        money:'0',
        collect:'0',
        event:10
    };

//变量Reducer
export function reducer(state = initialAuthState, action)
{
    switch(action.type)
    {
        case 'ON_OFF':
            return Object.assign({}, state, {
                OnOff: !state.OnOff
            });

        case 'SELECT':
            return Object.assign({}, state, {
                select: action.select
            });

        case '_SELECT':
            return Object.assign({}, state, {
                _select: action.select
            });

        case 'DATA_SOURCE':
            return Object.assign({}, state, {
                dataSource: action.dataSource
            });

        case 'AVATAR':
            return Object.assign({}, state, {
                avatar: action.avatar
            });

        case 'USER_NAME':
            return Object.assign({}, state, {
                userName: action.userName
            });

        case 'MONEY':
            return Object.assign({}, state, {
                money: action.money
            });

        case 'COLLECT':
            return Object.assign({}, state, {
                collect: action.collect
            });

        default:
            return state;
    }
}

