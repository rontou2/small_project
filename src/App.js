import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { board } from './assets';
import RoomGenerator from './components/roomGen';

class App extends Component {
 constructor() {
    super();
    this.state = {
      board: new board(),
	  room: new board(),
    };
	//this method determines the board size.
	//just edit the (height,width), and the board will
	//change size.
	//Now requires a third value, determining which board
	//the piece will start on. Simply set the value to true on
	//the starting board, and false on all other boards.
	this.state.board.setBoard(3,6,true);
	this.state.room.setBoard(2,2,false);
 }

  render() {
    return (
      <div className="App">
	  <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
        I'm keeping the logo, we could use it lol.
      </div>
	  <div className="boards">
	  {/* 
	  Room Generator just accepts props, and returns divs.
	  it is not a stateful component, and will simply map over
	  data provided.
	  
	  NOTE: Room generator can take in the same props multiple times;
	  may be a useful solution to connecting rooms, say, designing some 'connector'
	  room, and passing it in multiple times at an appropriate spot.
	  */}
	  <RoomGenerator props={this.state.board} />
	  <RoomGenerator props={this.state.room} />
	  </div>
	  </div>
    );
  }
}

export default App;
