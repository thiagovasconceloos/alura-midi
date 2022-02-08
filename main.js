function tocaSom(selectorAudio){

    
   
   const elemento = document.querySelector(selectorAudio);

   if(elemento === null){
    
    console.log('Elemento não encontrado');

   } else {
   elemento.play();
    }
}




const listadeTeclas = document.querySelectorAll('.tecla');

let contador  = 0;

listadeTeclas.forEach((_,cont) => {


    const  tecla = listadeTeclas[cont];
   
    const instrumento = tecla.classList[1];
  
    

    const idAudio = `#som_${instrumento}`

    tecla.onclick =  () => {

    tocaSom(idAudio);
     


   }

   
   tecla.onkeydown = (evento) => {

    if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }

   }

   tecla.onkeyup = () => {

    tecla.classList.remove('ativa');

  }

})
