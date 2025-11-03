function zagruzka(){
    const nik = prompt("ведіть нік","");
    document.getElementById("nik").value=nik;
}
function generate(){
    const MAX_WINS = 3;
    let igrok_wins = document.getElementById("tvoi_vin").value;
    let bot_wins=document.getElementById("bot_vin").value;
    let tvoi_scor = Math.floor(Math.random()*6);
    document.getElementById("tvoinumber").value = tvoi_scor;
    let bot_scor = Math.floor(Math.random()*6);
    document.getElementById("botnumber").value = bot_scor;
    if(tvoi_scor>bot_scor){
        igrok_wins++;
        document.getElementById("tvoi_vin").value= igrok_wins;    
    }
    if(tvoi_scor<bot_scor){
        bot_wins++;
        document.getElementById("bot_vin").value= bot_wins;
    }
    if(igrok_wins>=MAX_WINS){
        alert('You WIN');  
    }
    if(bot_wins>=MAX_WINS){
        alert('Bot WIN');
    }
}

