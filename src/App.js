import './index.css';
import { useState } from 'react';

import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

  const [link, setLink] = useState("");

  return (
    <div className="App">      
  
      <nav>
        <h3 onClick={() => {setLink("hey")}}>01/HEY</h3>
        <h3 onClick={() => {setLink("about")}}>02/ABOUT</h3>
        <h3 onClick={() => {setLink("work")}}>03/WORK</h3>
        <h3 onClick={() => {setLink("contact")}}>04/CONTACT</h3>
      </nav>

      <div className="mainText">
        <h1>DESIGN</h1>
        <h1>IS <span>FUNNY</span></h1>

        <div className="content">
          {
            link==="about" && <About />
          }

          {
            link==="work" && <Work />
          }

          {
            link==="contact" && <Contact />
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
