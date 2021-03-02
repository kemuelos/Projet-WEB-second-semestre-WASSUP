document.getElementById('bouton').addEventListener('click',inscrire);
document.getElementById('activer').addEventListener('click',activer);
document.getElementById('connect').addEventListener('click',Log);

document.getElementById('Activer').hidden = true;
document.getElementById('Log').hidden = true;
document.getElementById('Discussion').hidden = true;


function inscrire(){
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    console.log(nom);
    console.log(email);

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?inscription&identite=' + nom + '&mail=' + email , true);

    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);
                console.log(response);
                console.log("bienvenue");
                document.getElementById('Sinscrire').hidden = true;
                document.getElementById('Activer').hidden = false;
            }
            else{
                console.log("erreur");
            }
        }
    }
}


function activer(){
    var key = document.getElementById('key').value;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?activation=' + key, true);

    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);
                console.log(response);
                console.log("activer");
            }
            else{
                console.log("erreur");
            }
        }
    }
}

function Log(){
    var ID = document.getElementById('ID').value;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://trankillprojets.fr/wal/wal.php?information&identifiant=' + ID, true);

    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status == 200){
                let response = JSON.parse(this.responseText);
                console.log(response);
                console.log("connecté");
                document.getElementById('Log').hidden = true;
                document.getElementById('Discussion').hidden = false;
            }
            else{
                console.log("erreur");
            }
        }
    }
}


function Discussion(){
    document.getElementById('nom').innerHTML = nom;
}


