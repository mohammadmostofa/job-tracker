// length of card

const totalResult = document.getElementById("total-one");
const cards = document.querySelectorAll(".card");
const jobTotal = document.getElementById("job");
let countContainer = document.getElementById("Card-container");


let count = 0;
count = cards.length + 0;
let countTotal = count;
totalResult.innerText = countTotal;
jobTotal.innerText = countTotal;


const allBtn = document.getElementById("All-btn").addEventListener("click",function(){
    

  if(countTotal != 0){
      totalResult.innerText = countTotal;
      jobTotal.innerText = countTotal;


  }else{
      window.location.assign("/blank.html")
  }
   
    window.location.assign("/index.html")

})


      
// secont part 
let ArrayBox= [];

let interviewActionBtn = document.getElementsByClassName("interview-action-btn")
const reviewTotal = document.getElementById("total-two");
let reviewCount = 0;

for(let items of interviewActionBtn){
          items.addEventListener("click",function(event){

                reviewCount = reviewCount + 1;
                reviewTotal.innerText = reviewCount;

             const currentCard = event.target.closest(".card-list")  

                let greenBtn = currentCard.querySelector(".green");
                let whiteBtn = currentCard.querySelector(".white");
                let redBtn = currentCard.querySelector(".red"); 
 
                
                if(currentCard){

                  greenBtn.classList.remove("hidden")
                 redBtn.classList.add("hidden")
                 whiteBtn.classList.add("hidden")

                 

                }

                 if(currentCard){

                   ArrayBox.push(currentCard);

                }

              

          })
          
}



// interview store view
// upore arrey ke aikae ante kaj korte hobe arre te content fillup kora hoyeche

let reviewBtn = document.getElementById("interview-btn").addEventListener("click",function() {
                       
  let newCard = document.getElementById("Card-container")

              newCard.innerText = "";

         for(let card of ArrayBox){

                let cloned = card.cloneNode(true);
                 newCard.appendChild(cloned)

         }


         if( ArrayBox.length === 0 ){
          window.location.assign("/blank.html")
         }
                    
} )







// rejectedAction btn
let rejectedActionBtn = document.getElementsByClassName("Rejected-action-btn")
const rejectedTotal = document.getElementById("total-three");
let rejectedCount = 0;

let ReArr = [];

for(let items of rejectedActionBtn){
       items.addEventListener("click", function(event){

                rejectedCount = rejectedCount + 1 ;
                rejectedTotal.innerText = rejectedCount;

                const currentCard = event.target.closest(".card-list")  

                 let greenBtn = currentCard.querySelector(".green");
                let whiteBtn = currentCard.querySelector(".white");
                let redBtn = currentCard.querySelector(".red");

                if(currentCard){
                   greenBtn.classList.add("hidden");
                 redBtn.classList.remove("hidden");
                 whiteBtn.classList.add("hidden")
                }


                if((currentCard)){

                   ReArr.push(currentCard);

                }


       })
}



let RejectedBtn = document.getElementById("Rejected-btn").addEventListener("click",function() {
                       
  let newCard = document.getElementById("Card-container")

              newCard.innerHTML = "";

              if( ReArr.length === 0 ){
          window.location.assign("/blank.html")
          return;
         }

       
         for(let card of ReArr){

                let cloned = card.cloneNode(true);
                 newCard.appendChild(cloned);

         }

              
      
                    
} )



 
// newCard
// remove btn setup
// let ArrayBox= [];
// let ReArr = [];


   document.getElementById("Card-container").addEventListener("click",function(event){
                  
               let DeleteBtn = event.target.closest(".delete");//declare the ation b
               if(DeleteBtn){
                   
                let currentCard = DeleteBtn.closest(".card");

                if(currentCard){
                     
                  currentCard.remove();
                
                }

               }
                                        

})












  