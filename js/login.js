document.getElementById("btn").addEventListener("click",function(){

    let get=document.getElementById("input1")
    let total=get.value
    
    let get2=document.getElementById("input2")
    let total2=get2.value

    if(total==="mahedi"&&total2==="mahedi"){

        alert("welcome")
        window.location.href="index2.html"
         }
    else{
        alert("not rigth id pass")
    }
    

})