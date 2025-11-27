"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAQG8bpWTv3e8RQBSM8bsmpLJDgfZq_MWo",
  authDomain: "khalids-dreams.firebaseapp.com",
  projectId: "khalids-dreams",
  storageBucket: "khalids-dreams.firebasestorage.app",
  messagingSenderId: "761721591994",
  appId: "1:761721591994:web:4daec9fab17c8cbd864a83",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
