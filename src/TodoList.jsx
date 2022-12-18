import React, { useState } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

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
            <Tooltip title="Increment">
              <Button onClick={incNum} className="btn_green">
                <AddTwoToneIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Decrement">
              <Button onClick={decNum} className="btn_red">
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
