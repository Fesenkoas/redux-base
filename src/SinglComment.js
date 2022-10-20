import React, { useEffect } from 'react'
import { useState } from 'react';
import { commentDelete, commentUpdate } from './redux/action';
import { useDispatch } from 'react-redux';

const SinglComment = ({data}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState();
  const {text, id}= data;
  useEffect(()=>{
    if(text){
      setComment(text)
    }
  },[text])
  const handleInput = (e) =>{
    setComment(e.target.value)
  }
const handleUpdate =(e)=>{
  e.preventDefault();
dispatch(commentUpdate(comment,id))
}

const handleDelete =(e)=>{
  e.preventDefault();
dispatch(commentDelete(id))
}

  return (
    <form on Submit={handleUpdate}className='comments-item'>
        <div  onClick={handleDelete} className='comments-item-delete'>&times;</div>
            <input type='text' value={comment} onChange={handleInput}/>
            <input type ='submit' hidden/>
        </form>
  )
}

export default SinglComment