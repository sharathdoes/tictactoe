let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let giveupp=document.querySelector("#giveup");

const winpat=[
    [0,1,2] ,[0,3,6], [0,4,8], [1,4,7], [2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
let flag=true;
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("hi mf");
        if(flag){
            box.innerText="X";
            flag=false;
        }
        else{
            box.innerText="0";
            flag=true;
        }
        box.disabled=true;
        
        count++;
        let winone=checkwhowins();
        if(!winone &&count===9){
            msg.innerText="its a tie ";
            disablekaro();
        }
        
    })
    
});
const resetgame=()=>{
    count=0;
    flag=true
    enablekaro();
    msg.innerHTML="start (click on button below)";
}
const checkwhowins= ()=>{
    for( let patt of winpat){
        let a=boxes[patt[0]].innerText;
        let b=boxes[patt[1]].innerText;
        let c=boxes[patt[2]].innerText;
        if(a===b && b===c && a!=""&& b!=""&& c!=""){
            wonthematch(a);
            disablekaro();   
            return true;         
        }
        
        
        
    }
}

const wonthematch=(Winner)=>{
    msg.innerText=`congo, the winner is ${Winner}`;
    
}
const disablekaro =()=>{
    for(let box of boxes){
        box.disabled  =true;   
    }
}

const enablekaro =()=>{
    for(let box of boxes){
        box.disabled  =false;  
        box.innerText=""; 
    }
}
res.addEventListener("click",resetgame);
giveupp.addEventListener("click", resetgame);