import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/action";

const Title = () => {
  const dispatch = useDispatch();

  const text = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-titel">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Title;
