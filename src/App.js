import React, { useState, useEffect } from 'react';

import data from './data';
import Header from './Header'
import Review from './Review'
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
        let slider = setInterval(()=>{setIndex(index+1)},3000);
        return ()=>clearInterval(slider)
      }, [index]);
  
  return (
    <section className="section">
     <Header />
     <Review people={people} index={index} setIndex={setIndex}></Review>
    </section>
  );
}

export default App;
