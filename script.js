const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const button= document.querySelectorAll('.buttons');

button.forEach(buttons => {
  buttons.addEventListener("click", () => {
    audio.play();
  });
});

var humanScore=0;
var computerScore=0;
const humanScore_span=document.getElementById('human-score');
const computerScore_span=document.getElementById('computer-score');
    




document.getElementById('rock').onclick=playRock;

document.getElementById('paper').onclick=playPaper;
document.getElementById('scissors').onclick=playScissors;
function playRock(){
  play("rock");
  }
function playPaper(){
  play("paper");
  }
function playScissors(){
  play("scissors");
  } 

function play(humanPlay){
  computerPlay=getComputerPlay();
  document.getElementById('alertmsg').innerHTML= "<p><i>Bot played </i><strong> <b>" +computerPlay+ "</b></strong>.</p> ";
  if(humanPlay=='rock'){
    if(computerPlay=='rock'){
      document.getElementById('alertmsg').innerHTML +="<p>Draw</p>";
      }else if(computerPlay=='paper'){
        document.getElementById('alertmsg').innerHTML+= "<p>You Lose</p>";
       
       computerScore++;
        computerScore_span.textContent=computerScore;
        
        }else if(computerPlay=='scissors'){
          document.getElementById('alertmsg').innerHTML+="<p>You Win</p>";
          humanScore++;
          humanScore_span.textContent=humanScore;
          
          }
          }else if(humanPlay=='paper'){
            if(computerPlay=='rock'){
              document.getElementById('alertmsg').innerHTML+="<p>You Win</p>";
             humanScore++;
              humanScore_span.textContent=humanScore;
              
              }else if(computerPlay=='paper'){
                document.getElementById('alertmsg').innerHTML+="<p>Draw</p>";
              
              
           }else if(computerPlay=='scissors'){
                  document.getElementById('alertmsg').innerHTML+="<p>You Lose</p>";
                computerScore++;
             computerScore_span.textContent=computerScore;
             
                  }
            }else if(humanPlay=='scissors'){
              if(computerPlay=='rock'){
                document.getElementById('alertmsg').innerHTML+="<p>You Lose</p>";
             computerScore++;
                computerScore_span.textContent=computerScore;
                
                } else if(computerPlay=='paper'){
                  document.getElementById('alertmsg').innerHTML+="<p>You Win</p>";
                  humanScore++;
                  humanScore_span.textContent=humanScore;
                  
               }else if(computerPlay=='scissors'){
                    document.getElementById('alertmsg').innerHTML+="<p>Draw<p>";
                    }
              }
              
  
    
     
    }
              
      
    function getComputerPlay() {
      var choices=['rock','paper','scissors'];
      var index=choices[Math.floor(Math.random()*choices.length)];
      return index;
      }


const msgs=document.getElementById('alertmsg')
const Scores=document.querySelectorAll('.scores')
function clearScore(){
  humanScore=0;
  computerScore=0;
  humanScore_span.innerHTML=0;
  computerScore_span.innerHTML=0;
  msgs.innerHTML="";
  
  
  }
const clearGame=document.getElementById('cleargame')
clearGame.onclick=()=>clearScore()
  

  