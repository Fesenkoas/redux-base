import { errorOn } from "./action"
import { COMMENT_CREATE } from "./types"

const badWords = ['bitch', 'fuck']

export const spamFilter = ({dispatch}) =>{
return function (next){
    return function (action){
        if(action.type === COMMENT_CREATE) {
            const hasBadWords = badWords.some(res => action.data.text.includes(res))
            if(hasBadWords){
                return dispatch(errorOn('Bad Words =('))
            }
        }

        return next(action)
    }
    
}
}