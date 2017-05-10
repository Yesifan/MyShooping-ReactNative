/**
 * Created by y5049 on 2017/5/10.
 */

import { addNavigationHelpers,StackNavigator } from 'react-navigation';

import {createStore,combineReducers,applyMiddleware} from 'redux';

import {connect,Provider} from 'react-redux';

const AppNavigator = StackNavigator(AppRouteConfigs);

//初始State
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

//Reducer
const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

//根Reducer
const appReducer = combineReducers({
    nav: navReducer,
    ...
});

//UI组件
class App extends React.Component {
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}

//容器组件
const mapStateToProps = (state) => ({
    nav: state.nav
});

//组合的完整组件
const AppWithNavigationState = connect(mapStateToProps)(App);

//store
const store = createStore(appReducer);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
