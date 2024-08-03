
function hey(){
    var p1 = Math.floor(Math.random()*6)+1;
    var p2 = Math.floor(Math.random()*6)+1;
    
    document.querySelector(".img1").innerHTML = `<img src=${p1}.png alt=""></img>`;
    document.querySelector(".img2").innerHTML = `<img src=${p2}.png alt=""></img>`
    
    
    if (p1===p2) {
        document.querySelector(".max").innerHTML = `P1 : ${p1} | P2: ${p2}   || So match has Draw!😘`;
    }
    else if (p1>p2) {
        document.querySelector(".max").innerHTML = `Player 1 is winner 😍`;
    } else {
        document.querySelector(".max").innerHTML = "Player 2 is winner 😉";
    }
}