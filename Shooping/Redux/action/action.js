/**
 * Created by y5049 on 2017/5/10.
 */

export const onOff = ()=>(
    {
    type:'ON_OFF',
    }
);

export const select = (data)=>(
    {
        type:'SELECT',
        select:data,
    }
);

export function swiper(data) {
    return {
        type: data.type,
        select:data.index,
    }
}

export const dataSource = (data)=>(
    {
        type:'DATA_SOURCE',
        dataSource:data,
    }
);

export const avatar = (data)=>(
    {
        type:'AVATAR',
        avatar:data,

    }
);

export const userName = (data)=>(
    {
        type:'USER_NAME',
        userName:data,
    }
);

export const money = (data)=>(
    {
        type:'MONEY',
        money:data,

    }
);

export const collect = (data)=>(
    {
        type:'COLLECT',
        collect:data,
    }
);

export function Go(data) {
    return {
        type: 'Navigation/NAVIGATE',
        routeName:data.routeName,
        params: data.params,
        action: data.action,
    }
}



// export function Set(data) {
//     return {
//         type: 'Navigation/NAVIGATE',
//         routeName:data.routeName,
//         params: data.params,
//     }
// }