import { BrowserRouter , Route , Routes } from 'react-router-dom'
import UploadForm from './components/uploadFrom'
import './App.css'

function App() {
  return(
   <BrowserRouter>
      
      <Routes>
<Route path="/upload" element={<UploadForm />} />

  </Routes>
   
   </BrowserRouter>
  )
}

export default App
