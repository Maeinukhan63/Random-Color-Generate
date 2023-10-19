let btn=document.querySelector("button");
let div1=document.querySelector("div");
    
btn.addEventListener("click", function(){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;

    
    div1.style.backgroundColor= randomColor;
    
    console.log("color updated");
    

});
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}