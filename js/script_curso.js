//-----------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------FUNÇÃO PARA CHAMAR O VÍDEO AO CLICAR NA BARRA LATERAL E TROCAR A SUGESTÃO DE VÍDEO----------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function chamaVideo(aula){

    var aula1 = "https://www.youtube.com/embed/8mei6uVttho";
    var aula2 = "https://www.youtube.com/embed/M2Af7gkbbro";
    var aula3 = "https://www.youtube.com/embed/RDrfZ-7WE8c";
    var aula4 = "https://www.youtube.com/embed/Ig4QZNpVZYs";

    var au1 = "css/img/aula1.PNG";
    var au2 = "css/img/aula2.PNG";
    var au3 = "css/img/aula3.PNG";
    var au4 = "css/img/aula4.PNG";

    if(aula == "aula1"){
        document.getElementById("iframe").src = aula1;

        document.getElementById("imagem1").src = au2;
        document.getElementById("imagem2").src = au3;
        document.getElementById("imagem3").src = au4;

    }else if(aula == "aula2"){
        document.getElementById("iframe").src = aula2;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au3;
        document.getElementById("imagem3").src = au4;

    }
    else if(aula == "aula3"){
        document.getElementById("iframe").src = aula3;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au2;
        document.getElementById("imagem3").src = au4;

    }
    else if(aula == "aula4"){
        document.getElementById("iframe").src = aula4;

        document.getElementById("imagem1").src = au1;
        document.getElementById("imagem2").src = au2;
        document.getElementById("imagem3").src = au3;
        
        document.getElementById("prova").href = "index.html";

    }
}

function desabilitar(x){
    x.disabled = false;
}