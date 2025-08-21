import { createIndex } from "../../Util/Util";
import Tile from "./Tile";

const GameRow = ({ index, rowObjArr }) => {
  // This provides us with the updated tile object by updating both the letter and its state.
  // using the rowObjArr prop passed from the GridComponent.
  const getTileData = (tile) => {
  
    let tileDataObj = {
      letter: "",
      letterState: "",
    };

    if (rowObjArr.length > 0) {
      if (rowObjArr[index] !== undefined) {
        tileDataObj.letter =
          rowObjArr[index].rowWord[tile] !== undefined
            ? rowObjArr[index].rowWord[tile]
            : "";
        tileDataObj.letterState = rowObjArr[index].letterStateArr[tile];
        return tileDataObj;
      }
    }
  };

  const renderRows = (rowIndex) => {
   
    let itemArr = [];
    for(let i=0  ; i < 5;i++){
      let Index = createIndex(rowIndex,i);
      itemArr.push(
        <div className='col p-1' key={i}>
          <Tile index={Index} tileDataObj={getTileData(i)} />
        </div>
      )
    }
    return itemArr;
  };

  return <div className="row m-0">{renderRows(index)}</div>;
};

export default GameRow;
