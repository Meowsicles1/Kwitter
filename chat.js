//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDnG5Bp2_FXsOM9HXRWGFb2PnsJZPwU1Hk",
    authDomain: "mubeen-a205e.firebaseapp.com",
    databaseURL: "https://mubeen-a205e-default-rtdb.firebaseio.com",
    projectId: "mubeen-a205e",
    storageBucket: "mubeen-a205e.appspot.com",
    messagingSenderId: "403801872066",
    appId: "1:403801872066:web:b9819be63cfaca1e50cd5b"
  };
  firebase.initializeApp(firebaseConfig)
  room_name = localStorage.getItem("room_name")
  user_name = localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log (firebase_message_id)
console.log (message_data)
name = message_data["name"]
message = message_data["message"]
like = message_data["like"]
name_with_tag = "<h4> "+name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
 } });  }); }
getData();
function Logout(){
    window.location = "index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    
}
function send(){
    water = document.getElementById("msg").value 
    firebase.database().ref(room_name).push({
        name:user_name,
        message:water,
        like: 0
    })
    document.getElementById("msg").value = ""
}

function updatelike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  });

}