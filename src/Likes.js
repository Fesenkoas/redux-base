import React from 'react'
import {connect} from 'react-redux'
import { decrementLike, incrementLike } from './redux/action';

const Likes = ({like, onIncrementLike, onDecrementLike}) => {
  //  console.log({like});
  return (
    <div className='button-controls'>
        <button onClick={onIncrementLike}>❤{like}</button>
        <button onClick={onDecrementLike}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state){
    const{likesReducer} = state
    return{
        like: likesReducer.like
    }
}

function mapDispatchToProps(dispatch){

    return{
        onIncrementLike: () => {return dispatch(incrementLike())},
        onDecrementLike: () => {return dispatch(decrementLike())}
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes)

