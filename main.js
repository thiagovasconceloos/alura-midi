function tocaSom(idElementoAudio){

    
   
    document.querySelector(idElementoAudio).play();


}




const listadeTeclas = document.querySelectorAll('.tecla');

let contador  = 0;

listadeTeclas.forEach((_,cont) => {


    const  tecla = listadeTeclas[cont];
   
    const instrumento = tecla.classList[1];
  
    

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {

    tocaSom(idAudio);

   };

   
    

 

})
