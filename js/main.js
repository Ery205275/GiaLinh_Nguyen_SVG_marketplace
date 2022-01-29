(()=>{
    let theHeader =  document.querySelector("#mainNav");
     theSVG =  document.querySelector("#icon-holder");


    function logElement(){
        console.log('clicked on button');
    }
    theHeader.addEventListener("click", logElement );
    theSVG.addEventListener("click", logElement );

    

})();
// let theSVG =  document.querySelector(".wrapper img");
//     function logElement(){
//         console.log('clicked on icons');
//     }
//     theSVG.addEventListener("click", logElement );
