let connected = false;
let login = '';
let password = '';
window.onload = function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    login = urlParams.get('login')
    password = urlParams.get('password')
    if(login === 'root' && password === 'root'){
        {
            connected = true;
            document.getElementsByClassName('user')[0].style = 'display: none'
            document.getElementsByClassName('user-connected')[0].style = 'display: inline'
            document.getElementsByClassName('connection-result')[0].innerHTML = '<b>'+document.getElementsByName('login')[0].value+'</b>'
            document.getElementsByClassName('avatar-display')[0].innerHTML = '<img src="img/user-connected.PNG" height="100" width="300">'
            document.getElementsByClassName('connection-form')[0].style = 'display: none'
            document.getElementsByClassName('deconnection-button')[0].style = 'display: inline'
        }
    }
}

function onDeconnect(){
    window.location='user.html'
}

function onHome(){
    if(login === 'root' && password === 'root'){
        window.location='index.html?login='+login+'&password='+password;
    }
    else{
        window.location='index.html';
    }
}

function onProfile(){
    window.location='profile.html?login='+login+'&password='+password+'&id='+login;
}