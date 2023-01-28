const firebaseConfig = {
      apiKey: "AIzaSyDnG5Bp2_FXsOM9HXRWGFb2PnsJZPwU1Hk",
      authDomain: "mubeen-a205e.firebaseapp.com",
      databaseURL: "https://mubeen-a205e-default-rtdb.firebaseio.com",
      projectId: "mubeen-a205e",
      storageBucket: "mubeen-a205e.appspot.com",
      messagingSenderId: "403801872066",
      appId: "1:403801872066:web:b9819be63cfaca1e50cd5b"
    };
    firebase.initializeApp(firebaseConfig) 
//ADD YOUR FIREBASE LINKS HERE
function addroom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "chat.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name", name)
      window.location = "chat.html"
}
function Logout(){
      window.location = "index.html"
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      
}