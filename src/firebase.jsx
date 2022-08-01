import { initializeApp } from "firebase/app"
import { getMessaging,getToken,onMessage } from "firebase/messaging";
const config = {
    apiKey: "AIzaSyDGB0algj4M5nJ299L1qf0zsvfci9DNGzg",
  authDomain: "pushnotification-494bc.firebaseapp.com",
  projectId: "pushnotification-494bc",
  storageBucket: "pushnotification-494bc.appspot.com",
  messagingSenderId: "972266131491",
  appId: "1:972266131491:web:8f9be300c1b833e6152196",
  measurementId: "G-M52GS3C0YR"
}
initializeApp(config)
const messaging = getMessaging();
export const requestForToken = () => {
    return getToken(messaging, { vapidKey: "BMiHaRLRIHqxrgXNtTCBNL8vl7LW5ASrLM3Houo2H7wAOzdJCfODW2WtwObdz29WuevUswLRaoENUz8i0lUqMHI" })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

 