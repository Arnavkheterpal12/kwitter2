 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBUB5US_corMiJD5F1M19P5exzHLU2Fg_M",
  authDomain: "kwitter-2-574b8.firebaseapp.com",
  databaseURL: "https://kwitter-2-574b8.firebaseio.com",
  projectId: "kwitter-2-574b8",
  storageBucket: "kwitter-2-574b8.appspot.com",
  messagingSenderId: "679668115478",
  appId: "1:679668115478:web:4a0e202db012a8ed9cad37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
    }
