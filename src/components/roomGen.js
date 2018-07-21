import React from 'react';


//	  this logic was a pain...
//	  our board.board is an array of rows that hold tiles,
//	  so this is a map of board.board, and for each of those arrays, I had to
//	  call a second map for each tile. The tile.color is added into the className,
//	  so any edits to that need done in the css file.
//	  
// 	  now accepts props, the expected input is something to the extent of:
//	  props = {this.state.board}. It expects a board object, with rows.
//
//	  working on some function to "connect" multiplt boards; will need some heavy logic,
//	  but first sime visual alignment in css just so it looks right.

const RoomGenerator = (props) => {
return(
	props.props.board.map(row =>{
	   return  (
	   <div className="row" key={Math.random(Date.now())} >
	   {row.map(tile => {
		   if(tile.piece!=null){
		   return(
	   <div key={Math.random(Date.now())} className={`tile ${tile.color}`}><img src={tile.piece.king} /></div>
	   )}
		else{
		return(
		<div key={Math.random(Date.now())} className={`tile ${tile.color}`}></div>	
		)}
	   })}
	   </div>
	   );
		  }
		 )
	  
	);
}

export default RoomGenerator;