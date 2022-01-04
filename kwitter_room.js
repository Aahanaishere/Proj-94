var firebaseConfig = {
    apiKey: "AIzaSyAYfl51Ve64MRmb92E0RtpQI_r_VDG2wUs",
    authDomain: "kwitter-f85f5.firebaseapp.com",
    databaseURL: "https://kwitter-f85f5-default-rtdb.firebaseio.com",
    projectId: "kwitter-f85f5",
    storageBucket: "kwitter-f85f5.appspot.com",
    messagingSenderId: "339516320007",
    appId: "1:339516320007:web:91eacb98ab9e1f35e87da2"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("room name : " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirect_room(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
getData();

function redirect_room(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location="index.html";
}







