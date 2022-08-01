importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDGB0algj4M5nJ299L1qf0zsvfci9DNGzg",
  authDomain: "pushnotification-494bc.firebaseapp.com",
  projectId: "pushnotification-494bc",
  storageBucket: "pushnotification-494bc.appspot.com",
  messagingSenderId: "972266131491",
  appId: "1:972266131491:web:8f9be300c1b833e6152196",
  measurementId: "G-M52GS3C0YR"
})
const initMessaging = firebase.messaging()