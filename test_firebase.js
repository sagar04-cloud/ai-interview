import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWumwt0BHIhulvKxbZ2d5iRjIgX4aWqsA",
  authDomain: "ai-interviewer-947bf.firebaseapp.com",
  projectId: "ai-interviewer-947bf",
  storageBucket: "ai-interviewer-947bf.firebasestorage.app",
  messagingSenderId: "222874088926",
  appId: "1:222874088926:web:8aaa74f194453a5afe594f",
  measurementId: "G-HX27PVBNK4",
  databaseURL: "https://ai-interviewer-947bf-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const testRef = ref(db, 'test_node');
set(testRef, { test: "Hello World" })
  .then(() => { console.log('Successfully wrote to RTDB'); process.exit(0); })
  .catch(err => { console.error('Failed to write to RTDB:', err); process.exit(1); });
