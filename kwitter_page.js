const firebaseConfig = {
      apiKey: "AIzaSyDg8KJSN0kSbh3hjagCEGf-T1FJtM5UIBA",
      authDomain: "kwitter-2-44fb0.firebaseapp.com",
      databaseURL: "https://kwitter-2-44fb0-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-44fb0",
      storageBucket: "kwitter-2-44fb0.appspot.com",
      messagingSenderId: "246742369918",
      appId: "1:246742369918:web:a80e5e040a0fafb5ab7a2f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user=localStorage.getItem("n");
    room=localStorage.getItem("Roomname");

    function send()
    {
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room).push({
       name:user,
       message:msg,
       like:0     
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