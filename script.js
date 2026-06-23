// https://dummyjson.com/products    API


let Alldata=[]   // All data 



// fetch("https://dummyjson.com/products")
// .then((respons)=>{
//     // console.log(respons);
//     if(respons.ok){
//         return respons.json()
//     }else{
//         throw 'status error'
//     }
    
// })
// .then((data)=>{
//     Alldata=data.products
//     console.log(Alldata);
// })
// .catch((err)=>{
//     console.error(err);
    
// })




fetch("https://dummyjson.com/products")
.then((respons)=>{
    // console.log(respons);
    if(respons.ok){
        return respons.json()
    }else{
        throw 'status error'
    }
    
})
.then((data)=>{
    Alldata=data.products
    allproduct(Alldata)
    console.log(Alldata);
    
    
})
.catch((err)=>{
    console.error(err);
    
})


// selecting the cards
let cards= document.querySelector(".cards"); 




// select the button all
let aa=document.getElementById("all")  
    aa.addEventListener("click",()=>{
        allproduct(Alldata)
})



// selecting the upto100 button
let uptoHundred=document.querySelector("#upto100") 
uptoHundred.addEventListener("click",()=>{
    upto100(Alldata)
})


// search by categorie of the product
let SC=document.getElementById("sc");  
SC.addEventListener("click",()=>{
    let cate=document.getElementById("categorie").value
    searchCategory(Alldata,cate)
})


// selecting the rating details
let RS=document.getElementById("rating") 
RS.addEventListener('click',()=>{
    let inp1=document.getElementById("ratef").value
    let inp2=document.getElementById("ratet").value
    searchRating(Alldata,inp1,inp2)

})





// creating the card here
function createElement(a){
         let card=document.createElement("div");    // creating the card
        card.setAttribute("class","card")
        cards.append(card)


        let title=document.createElement("h2")  // creating the h2 tag for title
        title.innerHTML=a.title
        title.className="title"


        let category =document.createElement("h6")   // creating the product category
        category.innerHTML=a.category
        category.className="category"


        let description = document.createElement("span") // creating the product description
        description.className="description"
        description.innerHTML=a.description


        let stoImage=document.createElement("div");  // storing the image
        stoImage.className="stoImage"


        let image=document.createElement("img")  // creating the product image
        image.className="image"
        image.setAttribute("src",a.images[0])



        let rating=document.createElement("p")  // creating the product rating
        rating.innerHTML=`rating : ${a.rating}`
        rating.className="rating"
        
        
        let proDetail=document.createElement("div")  // creating a divt to store a price and buy now 
        proDetail.className="proDetail"


        let price=document.createElement("h3")  // creating the product price
        price.innerHTML=`Price : $ ${a.price}`;
        price.className="price"

        let buy = document.createElement("button")  // creating the buy button
        buy.innerHTML=' BUY NOW'
        buy.className="buy"




        card.append(title)  

        card.append(category)

        card.append(description)

        card.append(stoImage)

        stoImage.append(image)

        card.append(rating)
        
        card.append(proDetail)
        
        proDetail.append(price)

        proDetail.append(buy)
}



// All product data
function allproduct(arr){
    cards.innerHTML=""      // deleting the previous data
    let createCard = arr.map((a)=>{
        
        return createElement(a)
   
    })
      
}




// filter the data which is upto100
function upto100(arr){
      cards.innerHTML=""      // deleting the previous data
    arr.filter((a)=>{
        if(a.price<=100){
            return createElement(a)
        }
    })
}


 // filter the data by categorie
function searchCategory(arr,categorie){
      cards.innerHTML=""      // deleting the previous data
    let k= arr.filter((a)=>{
        return a.category.toLowerCase() === categorie.toLowerCase();
    })
    k.forEach((a)=>{
    createElement(a);});

    // result part ko change kar ta hai 
    let res=document.getElementById("res")
    if(k.length===0){
        res.innerHTML="No Product Found"
    }else{
        res.innerHTML="Result"
    }
   
}


// filter the data by there rating
function searchRating(arr,num1,num2){
     cards.innerHTML=""      // deleting the previous data
   arr.filter((a)=>{
    if(a.rating>=num1 && a.rating<=num2){
        return createElement(a)
    }
   })
}




