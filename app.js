// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJC_oRtu6oz_D-TfyeQz4_q2S4qKk4RaQ",
    authDomain: "todo-application-aae57.firebaseapp.com",
    databaseURL: "https://todo-application-aae57-default-rtdb.firebaseio.com",
    projectId: "todo-application-aae57",
    storageBucket: "todo-application-aae57.appspot.com",
    messagingSenderId: "976987213893",
    appId: "1:976987213893:web:60f404e5237533f225532c",
    measurementId: "G-N10ZW1HQC4"
  };

// Initialize Firebase
const frb = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// console.log(frb);


function addTodo(){
    let input = document.getElementById("inputfield");
    // console.log(input.value);
    
    // For Firebase
    
    let key = firebase.database().ref("todos").push().key;
    // console.log(key);
       let obj = {
        value : input.value,
        key : key 
       };

       firebase.database().ref("todos").child(key).set(obj);

       let liElement = document.createElement("li");
       let liText = document.createTextNode(input.value)
    //    console.log(liElement);
    //    console.log(liText);

       liElement.appendChild(liText);
    //    console.log(liElement);
       
    // Delete Button

    let delBtn = document.createElement("button");
    let delBtnText = document.createTextNode("Delete");
    
    delBtn.appendChild(delBtnText);

    delBtn.setAttribute("onclick","delItem(this)");

    let list = document.getElementById("list");
    
    liElement.appendChild(delBtn);
    
    list.appendChild(liElement);

    //Edit Button

    let editBtn = document.createElement("button");
    let editBtnText = document.createTextNode("Edit");
    
    editBtn.appendChild(editBtnText);
    
    editBtn.setAttribute("onclick","editItem(this)");

    liElement.appendChild(editBtn);
}


function deleteAll(){
    let list = document.getElementById("list");
    list.innerHTML = "";  
}


function delItem(a){
    // console.log(a);
    a.parentNode.remove();
}

function editItem(e) {
    
    let userInput = prompt("Enter Updated Item");
    
    e.parentNode.firstChild.nodeValue = userInput;


}
