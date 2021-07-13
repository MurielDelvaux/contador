//noção de eventos só carrega quando o computador terminar o carregamento
window.addEventListener("load", () => {
    const botao = document.getElementById("botao");
    botao.addEventListener("click",() =>{
        //tempo em segundos, que queremos.
        let sec = 360;
        const countDiv = document.getElementById("timer");
        //função responsável pela atualização do contador
        const secpass = () =>{

           let min = Math.floor(sec/60); 
           let segundosRestantes = sec % 60; 

           //formatando os minutos e os segundos
            if(segundosRestantes <10){
              segundosRestantes = "0" + segundosRestantes;
            }

             if(min<10){
               min = "0" + min;
            }

            //gera formato 00:00
            countDiv.innerHTML = min + ":" +segundosRestantes;

            //decrementar os segundos, condição final
            if(sec>0){
               sec = sec -1;
            }
            else{
                countDiv.innerHTML = "Acabou!";
            }
        };
        //fazer link js com css e html
        const countDown = setInterval(() => secpass(),1000); //execute a cada segundo
    });

});

