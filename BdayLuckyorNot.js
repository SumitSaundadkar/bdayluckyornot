const dateOfBday = document.querySelector("#DOB");
const luckyNo = document.querySelector("#luckynumber");
const buttonClick= document.querySelector("#Btn");
const displayResult = document.querySelector(".output");
var mySong1=document.getElementById("mySong1");
var mySong2=document.getElementById("mySong2");



//processing

buttonClick.addEventListener("click", function isYourbdayLucky(){
    const dateOfBirth=dateOfBday.value;

    checkbdayLucky(dateOfBirth);
    
       
    




});




function checkbdayLucky(dateOfBirth){
    dateOfBirth=dateOfBirth.replaceAll("-","");
    const dobSum=birthSum(dateOfBirth);
    if(dobSum&&luckyNo.value){
        calculateLucky(dobSum,luckyNo.value);
    }
    else{
        displayResult.innerText="👿"
    }
}
function birthSum(dateOfBirth){
    let sum=0;
     for(let i=0;i<dateOfBirth.length;i++){
         sum = sum + dateOfBirth.charAt(i);
     }
     return sum;
}

//output

   function calculateLucky(dobSum,luckyNo){
    if(dobSum%luckyNo===0){
        displayResult.innerText = "Wohho! Your birthday is lucky !";
        mySong1.play();
        
       
    }
    
       
    else{
        
       displayResult.innerText = "oops! your birthday is not so lucky 😟";
       mySong2.play();
      
        
    }
}
mySong1();
 





