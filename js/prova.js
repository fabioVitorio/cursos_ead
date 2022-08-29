function ponto(){
    var a1 = document.querySelector('input[name="atv1"]:checked').value;
    var a2 = document.querySelector('input[name="atv2"]:checked').value;
    var a3 = document.querySelector('input[name="atv3"]:checked').value;
    var a4 = document.querySelector('input[name="atv4"]:checked').value;
    var a5 = document.querySelector('input[name="atv5"]:checked').value;
    var a6 = document.querySelector('input[name="atv6"]:checked').value;
    var a7 = document.querySelector('input[name="atv7"]:checked').value;
    var a8 = document.querySelector('input[name="atv8"]:checked').value;
    var a9 = document.querySelector('input[name="atv9"]:checked').value;
    var a10 = document.querySelector('input[name="atv10"]:checked').value;
    var a11 = document.querySelector('input[name="atv11"]:checked').value;
    var a12 = document.querySelector('input[name="atv12"]:checked').value;

    var total;

    if(a1 == "C"){
        total++;
    }else if(a2 == "D"){
        total++;
    }else if(a3 == "D"){
        total++;
    }else if(a4 == "A"){
        total++;
    }else if(a5 == "B"){
        total++;
    }else if(a6 == "D"){
        total++;
    }else if(a7 == "B"){
        total++;
    }else if(a8 == "C"){
        total++;
    }else if(a9 == "C"){
        total++;
    }else if(a10 == "C"){
        total++;
    }else if(a11 == "A"){
        total++;
    }else if(a12 == "B"){
        total++;
    }

    alert(total);
    
}