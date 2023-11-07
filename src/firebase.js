import {initializeApp} from "firebase/app";

// firebase configuration

const firebaseConfig = {
        apiKey: "AIzaSyA9PJAS6rIL6r5pTjrJKGKaZ0xVSNBJkHg",
        authDomain: "react-quiz-dev-790cb.firebaseapp.com",
        projectId: "react-quiz-dev-790cb",
        storageBucket: "react-quiz-dev-790cb.appspot.com",
        messagingSenderId: "932799082878",
        appId: "1:932799082878:web:64921c57a4d5699038832f",
        databaseURL: "https://react-quiz-dev-790cb-default-rtdb.asia-southeast1.firebasedatabase.app",
      };

      // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;