import './global.scss';
import './App.css'
import { Home } from './components/home/Home'
import { Nav } from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
