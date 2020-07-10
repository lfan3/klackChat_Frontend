export default function formReducer(state, action){
    switch (action.type){
        case 'submit':
            return{
                ...state,
                error: ''
            }
        case 'input':
            return {
                ...state,
                [action.name] : action.value
            }
        case 'checkInput':
            return {
                ...state,
                error: action.error
            }
        case 'registered':{
            return{
                ...state,
                registered:true
            }
        }
        case 'updateMessage':
            return {
                ...state,
                message: action.message
            }
        case 'clearError' :
            return {
                ...state,
                error : ''
            }
        case 'error':
            return{
                ...state,
                loading: false,
                error: action.error
            }
        case 'updateJwtToken':
            return{
                ...state,
                jwtToken : action.data
            }
        default:
            return state
    }
}
