import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Themebutton from './components/Themebutton';
import { Themeprovider } from './contexts/theme.js'
function App() {
 
  const [thememodel,setthememodel]=useState("light");

  function darktheme(){
     setthememodel("dark");
  }
  function lighttheme(){
    setthememodel("light");
  }

  useEffect(() => {
           document.querySelector('html').classList.remove("light","dark");
           document.querySelector('html').classList.add(thememodel);
    
  }, [thememodel])
  

  return (
    <Themeprovider value={{thememodel,darktheme,lighttheme}}>
  <>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebutton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
</>
</Themeprovider>
  )
}

export default App
