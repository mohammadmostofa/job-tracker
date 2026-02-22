
let totalJob = document.getElementById("job")

let totalElement = document.getElementById("total-1");

let emptyFile = document.getElementById("empty");

let cards = document.getElementsByClassName("card");
let total = cards.length + 1 ;
let result = total;
 
totalJob.innerText = result;
totalElement.innerText = result;



const allBtn = document.getElementById("All-btn").addEventListener("click", function(){

  let cards = document.querySelectorAll(".card");
  
  totalElement.innerText = result;

     if(result != 0 ){
      
      return result;
      

     }  else{

            window.location.assign("/blank.html")

        }


})








 

