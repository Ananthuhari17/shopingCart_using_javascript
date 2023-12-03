fetching();

function fetching() {
    try {
       fetch("https://dummyjson.com/cart").then(data => data.json()).then(data1=>{Display(data1)})
        
    } catch (error) {
        console.log("data is not fetching and the error is "+ error);
    }
}
function Display(data){
    card1=document.getElementById("cardid")
    
   
   
   

    for(i of data.carts){
        for (const j of i.products) {

             card1.innerHTML+=`   <div class="col-3 mt-4 ">
             <div class="card  shadow mx-auto border-0 rounded-2" style="width: 18rem;">
                 <img src="${j.thumbnail}" class="card-img-top img-fluid rounded-3 w-75 mx-auto mt-2 "
                     style="max-height:200px; max-width: 200px; min-height:200px; object-fit:contain; " alt="...">
                 <div class="card-body fw-medium text-center ">
                     <h5 class="card-title text-primary " style="height:3rem">${j.title}</h5>
                     <p class="card-text">Id -${j.id} </p>
                     <p class="card-text">Price -Rs ${j.price}/- </p>
                     <p class="card-text">Qty -${j.quantity} </p>
                     <p class="card-text">Total Price- Rs ${j.total}/-</p>
                     <p class="card-text">Discount -${j.discountPercentage}% </p>
                     <p class="card-text text-danger fs-5">Discount price - Rs ${j.discountedPrice}/- </p>
                     <a href="#" class="btn btn-danger fw-medium">Add to Cart</a>
                 </div>
             </div>
         </div>`
        }
      
    
    }
       
      
   
}