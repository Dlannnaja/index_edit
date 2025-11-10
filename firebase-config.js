// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBlK7yXuLNK2Ms1iUBnvXIvr6rGHJ3UoTA",
  authDomain: "oleh2in-pos-v2.firebaseapp.com",
  databaseURL: "https://oleh2in-pos-v2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oleh2in-pos-v2",
  storageBucket: "oleh2in-pos-v2.firebasestorage.app",
  messagingSenderId: "878660961111",
  appId: "1:878660961111:web:d02e32193ca1539d3e3412",
  measurementId: "G-T6F0L6QE03"
};

// Enkripsi sederhana untuk menyembunyikan dari view source
const encryptedConfig = btoa(JSON.stringify(firebaseConfig));

// Fungsi untuk mendapatkan config yang didekripsi
function getFirebaseConfig() {
  return JSON.parse(atob(encryptedConfig));
}

// Export fungsi untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getFirebaseConfig };
} else {
  window.getFirebaseConfig = getFirebaseConfig;
}