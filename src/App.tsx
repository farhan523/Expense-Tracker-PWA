import React, { useEffect } from 'react';
import Balance from './components/Balance';
import Form from './components/Form';
import Header from './components/Header';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';
import GlobalReducer from './globalState/globalReducer';
import firebase from './firebase'

import './style.css'


function App() {

  useEffect(() => {
    const messaging = firebase.messaging();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/public/firebase-messaging-sw.ts")
        .then(function (registration) {
          console.log("Registration successful, scope is:", registration.scope);
          messaging.getToken({ vapidKey: 'AIzaSyDg4lNJqr1LWrF8dMNlPoonsqzn2TtDixA', serviceWorkerRegistration: registration })
            .then((currentToken) => {
              if (currentToken) {
                console.log('current token for client: ', currentToken);

                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
              } else {
                console.log('No registration token available. Request permission to generate one.');

                // shows on the UI that permission is required 
              }
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
              // catch error while creating client token
            });
        })
        .catch(function (err) {
          console.log("Service worker registration failed, error:", err);
        });
    }

    // eslint-disable-next-line
  }, []);

  return (
    <GlobalReducer>
      <div className="App">
        <div className="main">
          <Header />
          <Balance />
          <IncomeExpense />
          <History />
          <Form />
        </div>
      </div>
    </GlobalReducer>
  );
}

export default App;
