const userlist = require("../backend/user")


function login(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i=0; i<userlist.length; i++){
        if (username == userlist[i].username && password == userlist[i].password){
            window.location.href="minprofil.html"
            return
        }
    }
    alert("Incorret username or password")
}