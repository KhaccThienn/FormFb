checkPoint = () =>{
    var pass = document.getElementById('password');
    document.getElementById('togglePass').style.opacity = 1;
    if(pass.value == ''){
        document.getElementById('togglePass').style.opacity = 0;
    }
}
var checkStatus = true;
showed = () =>{
    document.getElementById('password').type = 'text';
    if (checkStatus){
        checkStatus = false;
        document.getElementById('password').type = 'text';
        var icon = document.getElementById('togglePass').classList.remove('fa-eye-slash');
    } else {
        checkStatus = true;
        var icon = document.getElementById('togglePass').classList.remove('fa-eye');
        var icon = document.getElementById('togglePass').classList.add('fa-eye-slash');
        document.getElementById('password').type = 'password';
    }
}
