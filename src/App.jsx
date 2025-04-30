import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavigationBar from './Component/NavigationBar'
import TopMenuItem from './Pages/TopMenuItem'
import Learningpaths from './Pages/Learningpaths'
import Keyfeatures from './Pages/Keyfeatures'
import Faq from './Pages/Faq'
import Contacts from './Pages/Contacts'
function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<TopMenuItem />} />
        <Route path="/Learningpaths" element={<Learningpaths />} />
        <Route path="/Keyfeatures" element={<Keyfeatures />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
