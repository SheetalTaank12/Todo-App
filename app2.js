let inp=document.querySelector("input");
let btn=document.querySelector("button");

let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let dltbtn=document.createElement("button");
    dltbtn.innerText="Delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);

    ul.appendChild(item);
console.log(inp.value);
inp.value="";
});



// let dltbtns = document.querySelectorAll(".delete");
// for( btn of dltbtns){
//     btn.addEventListener("click",function(){
//         let parent = this.parentElement;
//         parent.remove();

//      // these event listeners work only for the existing list items
//      // and not for the newly added ones
     
//     });
// }




//for solving this prblm , we use event delegation 
// event delegation is performed by using the phenomenon of bubbling
// isme hum jis child elemnt par event apply krna chahte hain , uske parent element ke upar vo event lga 
// dete hain , so that child elemnt par bhi vo event apne app trigger ho jayee

// it means hum buttons k upar nhi blki inke parents - list items ya ul k upar event listener add krenge



ul.addEventListener("click",function(event){
   if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
   }
});

