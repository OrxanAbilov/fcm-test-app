// firebase.js
import { initializeApp } from '@firebase/app';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCykmYOLM2VqwnkEQzSH9lezvXz0ia2gNc",
    authDomain: "easybusiness-15af5.firebaseapp.com",
    projectId: "easybusiness-15af5",
    storageBucket: "easybusiness-15af5.firebasestorage.app",
    messagingSenderId: "703882360442",
    appId: "1:703882360442:web:dbc3e2a9071e1180096dc3"
};
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
const setupNotifications = async () => {
  try {
    // Request permission for notifications
    const permission =  await Notification.requestPermission();
    
    console.log(permission);
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // Get the FCM token
      const token =  await getToken(messaging,{vapidKey: 'BPuo162DbxFpAd7G8rG4fvYpNslHTXic6eP9gvSx0LBhrBhvf1fhh2casYKQHU9YcBoeH9K4X8oiFwYGb6UYiag'});
      console.log('FCM Token:', token);
    } else {
      console.log('Notification permission denied.');
    }
    // Handle foreground notifications
    onMessage(messaging, (payload) => {
      console.log('Foreground Message:', payload);
      // Handle the notification or update your UI
    });
  } catch (error) {
    console.error('Error setting up notifications:', error);
  }
};
export { messaging, setupNotifications };