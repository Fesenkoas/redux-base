import React from 'react'
import {  useSelector } from "react-redux";
import {Rings} from 'react-loader-spinner'
//npm install react-loader-spinner --save

const Spin = () => {

  const spinner = useSelector((state) => state.appReducer.loading);

  return (
    <div className='loader-styles'>
        <Rings
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinner}
      />
  </div>
  )
}

export default Spin