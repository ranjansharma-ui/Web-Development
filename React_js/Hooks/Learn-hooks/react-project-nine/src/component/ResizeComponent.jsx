import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
       console.log("Event listener Added");
       

      window.addEventListener('resize', handleResize);


    
      return () => {
        console.log("Event listener removed");
        window.addEventListener('resize',handleResize);
      };
    }, []);
    // it will run only on first render
    
  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent
