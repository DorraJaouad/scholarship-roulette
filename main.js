// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_MY5iztJ62lvAo4mLaSIuFUKFmxumai0",
    authDomain: "scholarship-roulette.firebaseapp.com",
    projectId: "scholarship-roulette",
    storageBucket: "scholarship-roulette.firebasestorage.app",
    messagingSenderId: "782012573978",
    appId: "1:782012573978:web:0dbdc15e8a96a6d83fe4a3",
    measurementId: "G-187TN75NPV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save registration function
async function saveRegistration(formData) {
  try {
    const docRef = await addDoc(collection(db, "registrations"), {
      ...formData,
      timestamp: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving registration: ", error);
    return { success: false, error };
  }
}