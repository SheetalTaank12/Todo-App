let todo =[];
let req = prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------");


    }
    else if(req=="add"){
        let task=prompt("please enter task you want to add");
        todo.push(task);
        console.log("task added");


    }
    
    else if(req=="delete"){
        let ind=prompt("please enter index of task you want to remove");
        todo.splice(ind,1);
    }
    else {
        console.log("wrong request !");
    }
    req=prompt("please enter your request");

}