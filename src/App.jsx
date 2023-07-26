import { BrowserRouter } from 'react-router-dom';

import { Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[black]'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Experience />
        <Works />
        <Tech />
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
}

export default App
