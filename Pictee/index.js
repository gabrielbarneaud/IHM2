let connected = false;
let login ='';
let password='';
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
         }
    }
    if(!connected){
        document.getElementsByClassName('right-col')[0].style  = 'display: none'
    }
}

function onLikeClick(reference) {
    if(connected){
        document.getElementsByClassName('like')[reference].style = 'display: none'
        document.getElementsByClassName('liked')[reference].style = 'display: block'
        if (reference === 0){
            document.getElementsByClassName('likes')[reference].innerHTML = "79 j'aime"
        } 
        if (reference === 1){
            document.getElementsByClassName('likes')[reference].innerHTML = "144 j'aime"
        }
    }
}

function onLikedClick(reference) {
    if(connected){
        document.getElementsByClassName('like')[reference].style = 'display: block'
        document.getElementsByClassName('liked')[reference].style = 'display: none'
    }
    if (reference === 0){
        document.getElementsByClassName('likes')[reference].innerHTML = "78 j'aime"
    } 
    if (reference === 1){
        document.getElementsByClassName('likes')[reference].innerHTML = "143 j'aime"
    }
}

function onComment(reference) {
    document.getElementsByClassName('comment-box')[reference].focus()
}

function commentPost(reference) {
    if(connected && document.getElementsByClassName('comment-box')[reference].value !== ''){
        message = '<b>'+login+'</b> - '+document.getElementsByClassName('comment-box')[reference].value+'</br>'
        document.getElementsByClassName('comments-container')[reference].innerHTML += message
        document.getElementsByClassName('comment-box')[reference].value = ''
    }
}

function onHome(){
    if(connected){
        window.location='index.html?login='+login+'&password='+password;
    }
    else{
        window.location='index.html';
    }
}

function onUserProfile(reference){
    if(reference === 0){
        window.location= (connected) ? 'profile.html?login='+login+'&password='+password+'&id=daily_sunsets_fr' : 'profile.html?id=daily_sunsets_fr'
    }
    else if (reference === 1){
        window.location= (connected) ? 'profile.html?login='+login+'&password='+password+'&id=nationnal_zoo' : 'profile.html?id=nationnal_zoo'
    }
    else if (reference === 'root'){
        window.location='profile.html?login='+login+'&password='+password+'&id=root'
    }
}

function onFollow(reference){
    document.getElementsByClassName('follow')[reference].style = 'display: none';
    document.getElementsByClassName('unfollow')[reference].style = 'display: inline';
}
function onUnfollow(reference){
    document.getElementsByClassName('follow')[reference].style = 'display: inline';
    document.getElementsByClassName('unfollow')[reference].style = 'display: none';
}