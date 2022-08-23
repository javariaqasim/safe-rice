import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase ,set,ref,get,child,update,remove,onValue } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6arotl6z_3eU71mD35P9LWsB9Z66XMMw",
    authDomain: "safe-rice-1ee8a.firebaseapp.com",
    projectId: "safe-rice-1ee8a",
    storageBucket: "safe-rice-1ee8a.appspot.com",
    messagingSenderId: "255072514606",
    appId: "1:255072514606:web:67d3af210eb323119525bf",
    measurementId: "G-1DBEPSTM3L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  var savebtn = document.getElementById('saveData')
    var Name = document.getElementById('name')
    var email = document.getElementById('email')
    var tel = document.getElementById('tel')
    var country = document.getElementById('country')
    var message = document.getElementById('message')


    savebtn.addEventListener('click',function(e){
    var db=getDatabase();
      
    set(ref(db,'customer/'),{
        Name : Name.value,
        Email : email.value,
        Tel : tel.value,
        Country : country.value,
        Message : message.value,
     
    })
    .then(function(e){
        alert('succesfully')
    })
    .catch(function(error){
        alert('data is not stored')
    })

    })
    var getDatabtn =document.getElementById('getData')
    getDatabtn.addEventListener('click',function(e){
        var db=getDatabase();

        const dbref=ref(db);
        get(child(dbref,'customer/' +email.value))
        .then(function(snapshot){
            if(snapshot.exists()){
                Name.value=snapshot.val().Name
                email.value=snapshot.val().Email
                tel.value=snapshot.val().Tel
                country.value=snapshot.val().Country
                message.value=snapshot.val().Message

            }
            else{
                alert('no data found')
            }
        })


    })
    
    // var updatebtn =document.getElementById('updateData')
    
    // updatebtn.addEventListener('click',function(e){
    //     const db =getDatabase();
        
    //     update(ref(db,'student/' +roll.value),{
    //         Name:Name.value,
    //         Roll:roll.value
    //     })
    //     .then(function(snapshot){
    //         alert('data updated successfully')
            
    //     })
    //     .catch(function(error){
    //         alert('data is not updated')
    //     })
    // })


    // var deletebtn = document.getElementById('deleteData')
    
    // deletebtn.addEventListener('click',function(e){
    //     const db=getDatabase();
    //     remove(ref(db,'student/'+roll.value))
    //     .then(function(){
    //         alert('data remove successfully')
    //     })
    // })