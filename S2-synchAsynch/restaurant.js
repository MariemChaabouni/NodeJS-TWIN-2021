function  placeAndOrder(orderNumber) {
       console.log("Customer order: "+ orderNumber);
       cookAndDeliver(
        () => {
            console.log("Deliver :"+ orderNumber);
        },   
        orderNumber);
}

function cookAndDeliver(callback, orderNumber){
    console.log("Cooking ... :  "+orderNumber);
   /* setTimeout(()=>{
        //asynch
        console.log("Deliver :"+ orderNumber);
    },5000);*/
    //synch
    setTimeout(callback, 0);
   
}

placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);
placeAndOrder(4);
placeAndOrder(5);