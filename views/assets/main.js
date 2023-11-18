const firebaseConfig = {
  apiKey: "AIzaSyDxJdw2Or76OzVUaAaGSIQ036veT7AlZ00",
  authDomain: "manga4ever-vercel.firebaseapp.com",
  databaseURL: "https://manga4ever-vercel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "manga4ever-vercel",
  storageBucket: "manga4ever-vercel.appspot.com",
  messagingSenderId: "816513080903",
  appId: "1:816513080903:web:750f10d34d80558ce71b62"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const MainList = 'MainList';

async function loadData() {
  const databaseRef = database.ref(MainList);
  const databaseGet = await databaseRef.get();
  const databaseVal = await databaseGet.val();

  const snapshot = Object.values(databaseVal);
  const snaplimit = snapshot.splice(0, 10);

  console.log(snaplimit);
}

window.addEventListener('DOMContentLoaded', () => loadData());