import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC6LjCmHOTXoZTpg4QAP2126SmzcusMp80',
  authDomain: 'devfolio-6641f.firebaseapp.com',
  projectId: 'devfolio-6641f',
  storageBucket: 'devfolio-6641f.appspot.com',
  messagingSenderId: '978776750797',
  appId: '1:978776750797:web:bbf2e7170693dab1b68784',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
