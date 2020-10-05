function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}
function lookForUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.getItem("user_name",user_name);
    window.location="Login_page.html";
}
function Transfer(){
    user_name=document.getElementById("user_name").value;
    window.location="index.html";
    
}
function lookforUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.getItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}