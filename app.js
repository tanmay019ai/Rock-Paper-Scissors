let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompchoice=()=>
    {
          const options=["rock","paper","scissors"];
          const indx=Math.floor(Math.random()*3);
          return options[indx];
    };
    const drawgame=()=>
        {
            console.log("game was draw");
            msg.innerText="Game is draw. Play again";
            msg.style.backgroundColor="#11181c";
        };
const showWinner=(userWin , choiceid,compchoice)=>
            {
               if(userWin)
                {
                    userScore++;
                    userScorePara.innerText=userScore;
                    console.log("You win!");
                    msg.innerText=`You Win. Your ${choiceid} beats computer ${compchoice}`;
                    msg.style.backgroundColor="green";
                }
                else
                {
                    compScore++;
                    compScorePara.innerText=compScore;
                    console.log("You lose!");
                    msg.innerText=`You lose. Computer ${compchoice} beats your ${choiceid}`;
                    msg.style.backgroundColor="red";
                }
            }
const playgame=(choiceid)=>
    {
        console.log("user choice =",choiceid);
        const compchoice=gencompchoice();
        console.log("computer choice=",compchoice);
      if(choiceid=== compchoice)
        {
            drawgame();
        }
        else
        {
            let userWin=true;
            if(choiceid==="rock")
                {
                   userWin= compchoice==="paper"?false:true;
                }
            else if(choiceid==="paper")
                {
                    userWin=compchoice==="scissors"?false:true;
                }
            else
            {
                userWin=compchoice==="rock"?false:true;
            }
            showWinner(userWin ,choiceid,compchoice);
        }
    };
choices.forEach((choice)=>
    {
         choice.addEventListener("click",()=>{
         const choiceid=choice.getAttribute("id");
         playgame(choiceid);
         })
    })