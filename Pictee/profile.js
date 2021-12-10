let connected = false;
let login ='';
let password='';
let id='';
window.onload = function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    login = urlParams.get('login');
    password = urlParams.get('password');
    id = urlParams.get('id');
    if(login === 'root' && password === 'root'){
         {
            connected = true;
            document.getElementsByClassName('user')[0].style = 'display: none'
            document.getElementsByClassName('user-connected')[0].style = 'display: inline'
         }
    }
    document.getElementById('display-profile').innerHTML = "Galerie de "+id
    if(id === 'root'){
        document.getElementById('img1').innerHTML = '<img src="img/root1.jpg" class="spaced">'
        document.getElementById('img2').innerHTML = '<img src="img/root2.jpg" class="spaced">'
        document.getElementById('img3').innerHTML = '<img src="img/root3.jpg" class="spaced">'
        document.getElementById('img4').innerHTML = '<img src="img/root4.jpg" class="spaced">'
        document.getElementById('img5').innerHTML = '<img src="img/root5.jpg" class="spaced">'
        document.getElementById('img6').innerHTML = '<img src="img/root6.jpg" class="spaced">'
        document.getElementById('img7').innerHTML = '<img src="img/root7.jpg" class="spaced">'
        document.getElementById('img8').innerHTML = '<img src="img/root8.jpg" class="spaced">'
        document.getElementById('img9').innerHTML = '<img src="img/root9.jpg" class="spaced">'
    }
    if(id === 'daily_sunsets_fr'){
        document.getElementById('img1').innerHTML = '<img src="img/dsf1.jpg" class="spaced">'
        document.getElementById('img2').innerHTML = '<img src="img/dsf2.jpg" class="spaced">'
        document.getElementById('img3').innerHTML = '<img src="img/dsf3.jpg" class="spaced">'
        document.getElementById('img4').innerHTML = '<img src="img/dsf4.jpg" class="spaced">'
        document.getElementById('img5').innerHTML = '<img src="img/dsf5.jpg" class="spaced">'
        document.getElementById('img6').innerHTML = '<img src="img/dsf6.jpg" class="spaced">'
        document.getElementById('img7').innerHTML = '<img src="img/dsf7.jpg" class="spaced">'
        document.getElementById('img8').innerHTML = '<img src="img/dsf8.jpg" class="spaced">'
        document.getElementById('img9').innerHTML = '<img src="img/dsf9.jpg" class="spaced">'
    }
    if(id === 'nationnal_zoo'){
        document.getElementById('img1').innerHTML = '<img src="img/nz1.jpg" class="spaced">'
        document.getElementById('img2').innerHTML = '<img src="img/nz2.jpg" class="spaced">'
        document.getElementById('img3').innerHTML = '<img src="img/nz3.jpg" class="spaced">'
        document.getElementById('img4').innerHTML = '<img src="img/nz4.jpg" class="spaced">'
        document.getElementById('img5').innerHTML = '<img src="img/nz5.jpg" class="spaced">'
        document.getElementById('img6').innerHTML = '<img src="img/nz6.jpg" class="spaced">'
        document.getElementById('img7').innerHTML = '<img src="img/nz7.jpg" class="spaced">'
        document.getElementById('img8').innerHTML = '<img src="img/nz8.jpg" class="spaced">'
        document.getElementById('img9').innerHTML = '<img src="img/nz9.jpg" class="spaced">'
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