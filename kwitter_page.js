var firebaseConfig = {
      apiKey: "AIzaSyAYfl51Ve64MRmb92E0RtpQI_r_VDG2wUs",
      authDomain: "kwitter-f85f5.firebaseapp.com",
      databaseURL: "https://kwitter-f85f5-default-rtdb.firebaseio.com",
      projectId: "kwitter-f85f5",
      storageBucket: "kwitter-f85f5.appspot.com",
      messagingSenderId: "339516320007",
      appId: "1:339516320007:web:91eacb98ab9e1f35e87da2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}




