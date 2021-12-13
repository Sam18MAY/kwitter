// Your web app's Firebase configuration

var firebaseConfig = {
      apiKey: "AIzaSyBaGQxvn_JQPmF4op1bJC-QnzWuM8kkeIw",
      authDomain: "kwitter-301c7.firebaseapp.com",
      databaseURL: "https://kwitter-301c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-301c7",
      storageBucket: "kwitter-301c7.appspot.com",
      messagingSenderId: "1070664977920",
      appId: "1:1070664977920:web:842548cba62f7f0a9fd2e5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "add room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

                                                                                                                                                                                                                                                                                            
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name-" + Room_names);
row="<div class ='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecToRoomName(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function log_out(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}