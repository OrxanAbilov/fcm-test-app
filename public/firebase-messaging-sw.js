// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCykmYOLM2VqwnkEQzSH9lezvXz0ia2gNc",
    authDomain: "easybusiness-15af5.firebaseapp.com",
    projectId: "easybusiness-15af5",
    storageBucket: "easybusiness-15af5.firebasestorage.app",
    messagingSenderId: "703882360442",
    appId: "1:703882360442:web:dbc3e2a9071e1180096dc3"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});