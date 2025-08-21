import React, { useEffect, useState } from "react";
import GameRow from "./GameRow";
import { validateWord } from "./Logic";

const GridComponent = (props) => {
  const { input = [], callback, gameOver } = props;

  const [pointer, setPointer] = useState({
    col: 0,
    row: 0,
  });
  const [rowObjArr, setRowObjArr] = useState([]);
  const [activeRow, setActiveRow] = useState(0);
  const [message, setMessage] = useState("");
  const msgArr = [
    "Exceptional",
    "Outstanding",
    "Amazing",
    "Great",
    "Very Good",
    "That was close",
    "Better luck next time",
  ];

  const onKeys = (lastIndex, rowObj, arr) => {
    if (pointer.col < 5) {
      let rowWord = "";

      if (rowObj === undefined) {
        let init = {
          rowWord: "",
          letterStateArr: [
            "default",
            "default",
            "default",
            "default",
            "default",
          ],
        };
        arr = rowObjArr;
        rowWord = input[lastIndex];
        init.rowWord = rowWord;
        arr.push(init);
        setRowObjArr(arr);
      } else {
        arr = rowObjArr;
        rowObj.rowWord = rowObj.rowWord + input[lastIndex];
        arr[activeRow] = rowObj;
        setRowObjArr(arr);
      }
    }
    let pObj = {
      col: pointer.col <= 4 ? pointer.col + 1 : pointer.col,
      row: pointer.row,
    };
    setPointer(pObj);
  };
  const onDelete = (rowObj, arr) => {
    arr = rowObjArr;
    if (pointer.row < 5 && pointer.col !== 0) {
      if (rowObj.rowWord !== undefined) {
        rowObj.rowWord = rowObj.rowWord.slice(0, -1);
        arr[activeRow] = rowObj;
        setRowObjArr(rowObjArr);
        let pObj = {
          col: pointer.col > 0 ? pointer.col - 1 : pointer.col,
          row: pointer.row,
        };
        setPointer(pObj);
      }
    }
  };
  //   const onEnter = (rowObj, arr) => {
  //     if (!rowObj || rowObj.rowWord.length !== 5) {
  //       setMessage("Not enough letters");
  //       return;
  //     }
  //     const result = validateWord(rowObj.rowWord);
  //     rowObj.letterStateArr = result;
  //     arr[activeRow] = rowObj;
  //     setRowObjArr([...arr]);
  //     if (result.every((r) => r === "correct")) {
  //       setMessage(msgArr[activeRow]);
  //       callback();
  //       return;
  //     }
  //     setActiveRow((prev) => prev + 1);
  //     setPointer({ col: 0, row: pointer.row + 1 });
  //     if (activeRow === 5) {
  //       setMessage(msgArr[msgArr.length - 1]);
  //       callback();
  //     }
  //   };

  const onEnter = (rowObj, arr) => {
    let respObj = validateWord(rowObj.rowWord);
    if (respObj.type === "correct") {
      callback();
    }
    arr = rowObjArr;
    rowObj.letterStateArr = respObj.letterStateArr;
    arr[activeRow] = rowObj;
    setRowObjArr(arr);

    if (respObj.isValid) {
      let pObj = {
        col: 0,
        row: pointer.row + 1,
      };
      setPointer(pObj);
      setActiveRow((activeRow) => activeRow + 1);
    }
  };

  // This is used for updating the `rowObjArr` array which will be passed as a
  // prop to the GameRow component.
  useEffect(() => {
    let lastIndex = input.length - 1;
    let rowObj = rowObjArr[activeRow];
    let arr = [];

    if (input.length > 0 && !gameOver) {
      // This is for when the keys of the keyboard pressed apart from "Enter" and "Del" are pressed.
      if (input[lastIndex] !== "goback" && input[lastIndex] !== "submit") {
        onKeys(lastIndex, rowObj, arr);
      }
      // This part of the code is when we press the "Del" key.
      else if (input[lastIndex] === "goback") {
        onDelete(rowObj, arr);
      }
      // This part of the code is when we press the "Enter" key.
      // It also checks to see if the word entered is the correct one or out of the word list range.
      else if (input[lastIndex] === "submit") {
        onEnter(rowObj, arr);
      }
    }
  }, [input]);

  const displayGrid = () => {
    const itemArr = [];
    for (let i = 0; i < 6; i++) {
      itemArr.push(
        <GameRow
          key={i}
          index={i}
          rowObjArr={rowObjArr}
          activeRow={activeRow}
        />
      );
    }
    return itemArr;
  };

  // This part of the code simply shows the message.
  const showMessage = () => {
    return <div className="message-block">{message}</div>;
  };

  return (
    <div className="gridbody-wrapper">
      {message.length > 0 ? showMessage() : ""}
      <div className="board">{displayGrid()}</div>
    </div>
  );
};

export default GridComponent;
