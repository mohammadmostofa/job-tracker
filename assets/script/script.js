
let totalJob = document.getElementById("job")

let totalElement = document.getElementById("total-1");

let emptyFile = document.getElementById("empty");

let cards = document.getElementsByClassName("card");
let total = cards.length + 1 ;
let result = total;
 
totalJob.innerText = result;
totalElement.innerText = result;

// allbtn setup

const allBtn = document.getElementById("All-btn").addEventListener("click", function(){

  let cards = document.querySelectorAll(".card");
  
  totalElement.innerText = result;

     if(result != 0 ){
      
      return result;
      

     }  else{

            window.location.assign("/blank.html")

        }


})


// interviewone btn 
let totalTwo = document.getElementById("total-two");
let count = 0;

let allBtnOfReview = document.querySelectorAll(".interviewOne");

for(let btn of  allBtnOfReview){
  
  btn.addEventListener("click", function(){
    count = count + 1;
    totalTwo.innerText = count;
  })
  
}



// local storage set total number  




// rejected btn
 let totalThree = document.getElementById("total-three");
 let allRejectedBtns = document.querySelectorAll(".Rejected-btn-one");

 for(let btn of allRejectedBtns){
         btn.addEventListener("click", function(){

          count = count + 1;
          totalThree.innerText = count

         })

 }




















// let  interView = document.getElementById("interview");
// let totalTwo = document.getElementById("total-two");
// let totalCount = localStorage.getItem("total-two")
// let count = 0;

// const interViewOnebtn = document.getElementById("interviewOne").addEventListener("click", function(){

//      count = count + 1;
//      totalTwo.innerText = count;

// })

// interview btn 


  



// rejectedbtn

// const totalThree = document.getElementById("total-three");
// let reject = 0;
    
// const RejectedBtnOne = document.getElementById("Rejected-btn-one").addEventListener("click", function(){

//    reject = reject + 1;

// totalThree.innerText = reject;


// })





 

