const $btnYes=document.querySelector("#btnYes"),
      $btnNo=document.querySelector("#btnNo");

$btnNo.addEventListener("mouseover",()=>{
    let x=window.innerWidth,
        y=window.innerHeight;
        console.log(x)
    let newX=Math.floor(Math.random()*x)+1,
        newY=Math.random()*y;
  
    $btnNo.style.position="absolute";
    $btnNo.style.left=newX+"px";
    $btnNo.style.top=newY+"px"

})


$btnYes.addEventListener("click",()=>{
    let $div=document.createElement("div"),
        $fragment=document.createDocumentFragment();
    $div.innerHTML="<h1>Gracias por decir que sí, Te quiero guapaa<3</h1>";
    $div.style.backgroundColor="violet";
    $fragment.appendChild($div);
    
    document.querySelector(".container").appendChild($fragment);
})
