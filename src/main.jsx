import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentDataConetxtProvider from './context/StudentsDataProvider.jsx'
import StudentImageProvider from './context/StudentImageProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StudentDataConetxtProvider>
    <StudentImageProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </StudentImageProvider>
  </StudentDataConetxtProvider>

)
