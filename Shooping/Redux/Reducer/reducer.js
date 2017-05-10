/**
 * Created by y5049 on 2017/5/10.
 */
const initialState =
    {
        OnOff:false,
        select:1,
        avatar:'new_friend',
        userName:'点击我登陆',
        money:'0',
        collect:'0',

    };

export const reducer = (state = initialState, action)=>
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
};