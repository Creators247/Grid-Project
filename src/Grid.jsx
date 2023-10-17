import  range  from './utils';
import './grid.css'
function Grid({ numRows, numCols }) {
  return <div className="grid">
    { range(numRows).map((each,index ) =>(
       <div className="gridStyles" >{range(numCols).map(each => (
         <div  className="gridStyles">great</div>
       ))}</div>
    )
    )}
  </div>;
}

export default Grid;
