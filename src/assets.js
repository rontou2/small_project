//there's a lot going on here. This creates a store of information,
//and stores it in board (note in main logic, the address will be: this.state.board.board)
import king from './images/king.png';

export class board {
constructor(){
	this.board=[];
}

// method to populate the board with key:value pairs, based on width,height paramaters
setBoard(height,width) {
let color = 'w';
let piece= {king};
	for(let i=0;i<height;i++){
	let row =[];
		for(let j=0;j<width;j++){
			//if the board has an even number of squares per row, the checker pattern
			//is: w,b,w,b
			//    b,w,b,w
			//while an odd number of squares per row 
			//is: w,b,w,b,w
			//	  b,w,b,w,b
			//
			//Take note of the last element of each side; and even array looks like:
			// w,b,w,b,b,w,b,w
			//while an odd array would look like:
			//w,b,w,b,w,b,w,b,w,b
			//
			//A lot of this logic is using if/else statments to reverse the color at the
			//correct time, depending on the first if statment "if(width%2===1){..."
			//
			//This is a lot of notes, but will be important to remember if the central logic
			//needs changed, so we don't go through and make the checker pattern not work.
			if(width%2===1){
			row.push(new Tile(j,color,piece));
			if(color==='w'){
			color='b';	
			}
			else{
			color='w';
			}
			piece=null;
			}
			else{
				if(j===0){
					if(color==='w'){
					color='b';	
					}
					else {
					color='w';
					}
				}
			row.push(new Tile(j,color,piece));
			if(color==='w'){
			color='b';	
			}
			else{
			color='w';
			}
			piece=null;
			}
		}
	this.board.push(row);
	}
}

};

//the new Tile's that are pushed in the main logic are created here.
//if we need to store another paramater on the tiles, it needs added on here as well as
//in the main logic.
class Tile {
  constructor (tile, color, piece) {
	this.tile = tile;
    this.color = color;
	this.piece= piece;
  }
}