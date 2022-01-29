(()=>{
    let theHeader =  document.querySelector("#mainNav");
    function logElement(){
        console.log('clicked on header navigation');
    }
    theHeader.addEventListener("click", logElement );

    let theSVG =  document.querySelector(".wrapper img");
    function logElement(){
        console.log('clicked on icons');
    }
    theSVG.addEventListener("click", logElement );


})();