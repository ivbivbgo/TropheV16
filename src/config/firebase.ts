import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtcQiN5UBnO75fmD31MzTAXUF38sWXVfs",
  authDomain: "trophenix-mvp001.firebaseapp.com",
  projectId: "trophenix-mvp001",
  storageBucket: "trophenix-mvp001.firebasestorage.app",
  messagingSenderId: "425190668905",
  appId: "1:425190668905:web:4165a606cb5048991f80f8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);