  
  import firebase from 'firebase/app';
  import 'firebase/storage'; //storage for images
  import 'firebase/firestore'; //database


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpzwER-ioP4vo6qT4hTvDJINw3-TwZgJE",
    authDomain: "photo-gallery-79d7f.firebaseapp.com",
    projectId: "photo-gallery-79d7f",
    storageBucket: "photo-gallery-79d7f.appspot.com",
    messagingSenderId: "830902174158",
    appId: "1:830902174158:web:12283b7d8a85f3cb53eb9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //initialize storage service and firestore service
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export  {projectStorage , projectFirestore};
  