// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcyIKzs98c0pZBf4HGY7tR2aQMwKHoXnE",
  authDomain: "task-master-2390b.firebaseapp.com",
  projectId: "task-master-2390b",
  storageBucket: "task-master-2390b.appspot.com",
  messagingSenderId: "469500658361",
  appId: "1:469500658361:web:438f233040bfaaafbcd168",
  measurementId: "G-4DDX4JZ0ZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
