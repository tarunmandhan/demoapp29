import React, { useState } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveIcon from "@mui/icons-material/Remove";

const TodoList = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    return setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      return setNum(num - 1);
    } else {
      alert("No Decrement below 0 ");
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incNum}>
              <AddTwoToneIcon />
            </button>
            <button onClick={decNum}>
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
