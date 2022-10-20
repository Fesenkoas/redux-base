import { DECREMENT, INCREMENT } from './types';

const intialState = {

  like: 0,
};

export const likesReducer = (state = intialState, action) => {
    switch(action.type){
        case INCREMENT:
            return{
                ...state, like: state.like + 1
            }
            case DECREMENT:
                return{
                    ...state, like: state.like - 1
                }
            default:
                return state;
    }
};
