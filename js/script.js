let api_key=`5cef449324d17dcbde1ac3c108b1e8ce`

let loddatas=city=>{

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric `
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>showdata(data))
}


let showdata=(data)=>{

    let get=document.getElementById("temp")
    get.innerText=data.main.temp
    

}


document.getElementById("btn").addEventListener("click",function(){

    let getNew=document.getElementById("input")
    let forVlaue=getNew.value
    let get2nd=document.getElementById("city")
    get2nd.innerText=forVlaue
    loddatas(forVlaue)
    
})

loddatas("dhaka")