
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  // apiKey: "AIzaSyCu8z3JheklO2_eqmyEmL1dq9KxubG5HbE",
  // authDomain: "asimdashboard-96e5f.firebaseapp.com",
  // databaseURL:"https://asimdashboard-96e5f-default-rtdb.firebaseio.com/",
  // projectId: "asimdashboard-96e5f",
  // storageBucket: "asimdashboard-96e5f.appspot.com",
  // messagingSenderId: "637144335880",
  // appId: "1:637144335880:web:c11f6e2e79901ebe8433bd"

//   apiKey: "AIzaSyCa6GTBzP8c8ET1ZyU0K8mk37Q7Q792RuQ",
//   authDomain: "finalapp-8cad7.firebaseapp.com",
//  databaseURL: "https://finalapp-8cad7-default-rtdb.firebaseio.com/",
//   projectId: "finalapp-8cad7",
//   storageBucket: "finalapp-8cad7.appspot.com",
//   messagingSenderId: "62232118495",
//   appId: "1:62232118495:web:f81f2f755acac11bef956a"

  apiKey: "AIzaSyD0dlHZKUNWAgQE6ZF2SLAyI3drmXQTTpE",
  authDomain: "bazarapp-a7942.firebaseapp.com",
  projectId: "bazarapp-a7942",
  storageBucket: "bazarapp-a7942.firebasestorage.app",
  databaseURL:"https://bazarapp-a7942-default-rtdb.firebaseio.com",
  messagingSenderId: "212326800833",
  appId: "1:212326800833:web:67ac3991bf6812b812a340"

  // apiKey: "AIzaSyAnl3qQ7rpmpzTYl4TfcNw2lwDCKZyK5ts",
  // authDomain: "database-73455.firebaseapp.com",
  // databaseURL: "https://database-73455-default-rtdb.firebaseio.com",
  // projectId: "database-73455",
  // storageBucket: "database-73455.appspot.com",
  // messagingSenderId: "919375619740",
  // appId: "1:919375619740:web:6be86c0c0d45bd97eeaf59"
};


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getDatabase(app);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app); // Add this line
export { ref, uploadBytes, getDownloadURL }
