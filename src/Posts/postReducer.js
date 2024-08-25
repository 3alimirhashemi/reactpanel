

export const init = {

    postData : {
        userId : "",
        id : "",
        title:"",
        body:"",
    },
    user:[]
}

export const reducer = (state,action)=>{

    switch (action.type) {
        case 'changeUser' :
            return {...state, user : action.payload}

        case 'isUpdate' :
            return {...state, postData : action.payload}

        case 'setInputValue':
            return {
                ...state,
                 postDate:{
                ...state.postData,
                [action.propName] : action.propValue,
            }
        }

        default:
            return state;
    }
}