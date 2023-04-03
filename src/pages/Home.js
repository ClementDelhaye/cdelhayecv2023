import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import Navigation from '../components/Navigation';
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import 'firebaseui/dist/firebaseui.css';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCpWMeDWNxv1ft4dSQ7Q5bR02uKGQLugb4",
    authDomain: "cdelhayecv.firebaseapp.com",
    projectId: "cdelhayecv",
    storageBucket: "cdelhayecv.appspot.com",
    messagingSenderId: "682344145740",
    appId: "1:682344145740:web:fb24aff79e70306dff65e9"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


// Initialize Firestore and get a reference to the service
//const db = getFirestore(app);
function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // L'utilisateur est connecté
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        // Une erreur s'est produite
        console.error(error);
      });
  };

    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>DELHAYE Clément</h1>
                    <h2>Développeur Web</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                    <br/><br/>
                        {user ?
                            <p>Bienvenue {user.displayName} | {user.email} !</p>
                                :
                            <div className="pdf">
                                <a onClick={signInWithGoogle}>Connexion avec Google</a>
                            </div>
                        }
                </div>
            </div>
        </div>
    );
};

export default App;