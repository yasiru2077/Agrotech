import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx';

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.ready.then(() => {
      if (Notification.permission !== 'granted') {
          // Request permission to show notifications
          Notification.requestPermission().then((permission) => {
              if (permission === 'granted') {
                console.log('permission granted')
              }
          });
      }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
);
