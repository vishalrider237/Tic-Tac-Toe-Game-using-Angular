import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
   public gameState=[3,3,3,3,3,3,3,3,3]
   public wiiningPositions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
   public gameOver=false
   public chance=0;
   public draw=false
   public  winner=3 // means no one is winner

  constructor() { }
  // button click change game state
  changeGameState(position:number){
    // check game Over
   if(this.gameOver){
    alert("Game is already Over")
    return
   }
    // check for position occupied
     if(this.gameState[position]!==3){
      alert("Position is already occupied")
      return
     }
    // if position is blank==3
    this.gameState[position]=this.chance
    //check for draw
    if(this.checkDraw()){
      this.gameOver=true
      this.draw=true
      return;
    }
    // check for winner
    if(this.checkWinner()){
      this.gameOver=true
      this.winner=this.chance
    }
    // if no winner and no draw
    this.chance=this.chance==1?0:1    
    
  }
  checkWinner(){
    for(let i=0;i<this.wiiningPositions.length;i++){
      let winingSubArray=this.wiiningPositions[i];
      if((this.gameState[winingSubArray[0]]===this.gameState[winingSubArray[1]] && this.gameState[winingSubArray[1]]===this.gameState[winingSubArray[2]]) && this.gameState[winingSubArray[0]]!==3
       ){
        return true
      }
      
    }
    return false
  }
  checkDraw(){
    for(let i=0;i<this.gameState.length;i++){
      if(this.gameState[i]==3){
        return false
      }

    }
    return true
  }
  // rrestart the game
  restartGame(){
   this.gameState=[3,3,3,3,3,3,3,3,3]
   this.wiiningPositions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
   this.gameOver=false
   this.chance=0;
   this.draw=false
   this.winner=3 
  }
}
