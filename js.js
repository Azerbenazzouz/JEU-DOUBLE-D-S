// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

score1=100;
score2=100;
ntour=1;
// somme1 =0;
// somme2 =0;
// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

name1=prompt('Donner votre nom du joueur numéro 1');

valide=true

while (valide){

    if (name1==''){
        name1=prompt('Donner votre nom du joueur numéro 1');
    }else{
        valide=false
    }

}

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

name2=prompt('Donner votre nom du joueur numéro 2');

valide=true

while (valide){

    if (name2==''){
        name2=prompt('Donner votre nom du joueur numéro 2');
    }else{
        valide=false
    }

}

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

tour=Number(prompt('Donner le numbre du tour entre 1 et 15'));

valide=true

while (valide){

    if (!(1<=tour & tour<=15)){
        tour=Number(prompt('Donner le numbre du tour entre 1 et 15'));
    }else{
        valide=false
    }

}

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

for (let i=0;i<=ntour;i++){
    ntour=i;
}

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

document.getElementById('score1').innerHTML='score de ' + name1 + ' : ' + score1;
document.getElementById('score2').innerHTML='score de ' + name2 + ' : ' + score2;

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

document.getElementById('tour').innerHTML='tour : ' + ntour;

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

document.getElementById('user1').innerHTML=name1;
document.getElementById('user2').innerHTML=name2;

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

document.getElementById('user1t').innerHTML=name1;
document.getElementById('user2t').innerHTML=name2;

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

if(ntour==tour){
    document.getElementById('gamein').hidden = true;
    verif=true;
}else{
    document.getElementById('winner').hidden = true;
    document.getElementById('gamein').hidden = false;
}

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

function gameplay(){
    
    ntour+=1;
    document.getElementById('tour').innerHTML='tour : ' + ntour;
    
    let random1=Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName('numjet1')[0].innerHTML=random1
    
    let random2=Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName('numjet2')[0].innerHTML=random2

    if(random1>random2){
        score2-=random1;
        document.getElementsByClassName('numjet1')[0].style.color='green';
        document.getElementsByClassName('numjet2')[0].style.color='red';
    }else{
        if(random1==random2){
            document.getElementsByClassName('numjet2')[0].style.color='green';
            document.getElementsByClassName('numjet1')[0].style.color='green';
        }else{
            score1-=random2;
            document.getElementsByClassName('numjet2')[0].style.color='green';
            document.getElementsByClassName('numjet1')[0].style.color='red';
            }
    }
    
    document.getElementById('score1').innerHTML='score de ' + name1 + ' : ' + score1;
    document.getElementById('score2').innerHTML='score de ' + name2 + ' : ' + score2;
    document.getElementById('tbody').innerHTML+='<tr><th>tour '+ntour+'</th><th> '+ random1 +'</th><th>'+ random2 +'</th></tr>'
    // somme1+=random1;
    // somme1+=random1;

    

}

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

function playgg () {
    // document.getElementById('click').stop();
    document.getElementById('click').play();
    gameplay();

    if(ntour==tour){
        document.getElementById('winner').hidden = false;
        document.getElementById('gamein').hidden = true;
        if(score1<score2){
            document.getElementById('winner').innerHTML='🥳  '+name2+' is the winner  🥳 </br>Your Score is <span style="color:red">'+score2+'</span></br><button onclick="replay()" id="play">Replay</button>'
            // document.getElementById('tbody').innerHTML+='<tr><th>somme</th><th> '+ somme1 +'</th><th>'+ somme2 +'</th></tr>'
        }else{
            if (score1==score2){
                document.getElementById('winner').innerHTML='🥳 All has won  🥳 </br>Your Score is <span style="color:red">'+score1+'</span></br><button onclick="replay()" id="play">Replay</button>'
                // document.getElementById('tbody').innerHTML+='<tr><th>somme</th><th> '+ somme1 +'</th><th>'+ somme2 +'</th></tr>'
            }else{
                document.getElementById('winner').innerHTML='🥳  '+name1+' is the winner  🥳 </br>Your Score is <span style="color:red">'+score1+'</span></br><button onclick="replay()" id="play">Replay</button>'
                // document.getElementById('tbody').innerHTML+='<tr><th>somme</th><th> '+ somme1 +'</th><th>'+ somme2 +'</th></tr>'
            }
        }
        
        document.getElementById('win').play();

    }
}

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

function replay(){

    window.location.reload();

}

