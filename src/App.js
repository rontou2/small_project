import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { board } from './assets';

class App extends Component {
 constructor() {
    super();
    this.state = {
      board: new board(),
    };
	//this method determines the board size.
	//just edit the (height,width), and the board will
	//change size.
	this.state.board.setBoard(4,6);
 }

  render() {
    return (
      <div className="App">
	  <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
        I'm keeping the logo, we could use it lol.
      </div>
	  <div className="board">
	  {/*
	  this logic was a pain...
	  our board.board is an array of rows that hold tiles,
	  so this is a map of board.board, and for each of those arrays, I had to
	  call a second map for each tile. The tile.color is added into the className,
	  so any edits to that need done in the css file.
	  
	  this could be abstracted, and should be in the future, so the main App
	  file isn't so messy.
	  */}
	  {this.state.board.board.map(row =>{
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
	  }
	  </div>
	  </div>
    );
  }
}

export default App;
