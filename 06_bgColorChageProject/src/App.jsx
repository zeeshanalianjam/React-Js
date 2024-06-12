import { useState } from "react"


function App() {
  const [color, setColor] = useState('red')
  console.log(color)

  return (
    <div className="w-full h-screen duration-200" >
      <div className="fixed bottom-0 w-full h-screen px-4 py-3 inset-x-0 justify-center flex flex-wrap" style={{ backgroundColor: color }}>
        <div className="fixed bottom-12 px-4 py-3 rounded-lg" style={{ backgroundColor: 'pink' }}>
          <button onClick={() => setColor('red')} className="text-white mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'red' }}>Red</button>
          <button onClick={() => setColor('green')} className="text-white mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'green' }}>Green</button>
          <button onClick={() => setColor('blue')} className="text-white mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'blue' }}>Blue</button>
          <button onClick={() => setColor('yellow')} className=" mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'yellow' }}>Yellow</button>
          <button onClick={() => setColor('black')} className="text-white mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'black' }}>Black</button>
          <button onClick={() => setColor('purple')} className="text-white mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'purple' }}>Purple</button>
          <button onClick={() => setColor('ornage')} className="text-white mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'orange' }}>Orange</button>
          <button onClick={() => setColor('white')} className=" mx-2 rounded-full px-5 text-center py-2" style={{ backgroundColor: 'white' }}>White</button>
        </div>
      </div>
    </div>

  )
}

export default App



// Seond way with handler method

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState('red'); // Initial background color is set to red

//   const handleChangeColor = (newColor) => {
//     console.log("Color changed to:", newColor); // Debugging log
//     setColor(newColor);
//   };

//   return (
//     <div className="w-full h-screen transition-colors duration-200" >
//       <div className="fixed bottom-12 w-fit mx-auto px-4 py-3 rounded-lg inset-x-0 justify-center flex flex-wrap shadow-lg" style={{ backgroundColor: color }}>
//         <button 
//           onClick={() => handleChangeColor('red')} 
//           className="text-white mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'red' }}
//         >
//           Red
//         </button>
//         <button 
//           onClick={() => handleChangeColor('green')} 
//           className="text-white mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'green' }}
//         >
//           Green
//         </button>
//         <button 
//           onClick={() => handleChangeColor('blue')} 
//           className="text-white mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'blue' }}
//         >
//           Blue
//         </button>
//         <button 
//           onClick={() => handleChangeColor('yellow')} 
//           className="text-black mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'yellow' }}
//         >
//           Yellow
//         </button>
//         <button 
//           onClick={() => handleChangeColor('black')} 
//           className="text-white mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'black' }}
//         >
//           Black
//         </button>
//         <button 
//           onClick={() => handleChangeColor('purple')} 
//           className="text-white mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'purple' }}
//         >
//           Purple
//         </button>
//         <button 
//           onClick={() => handleChangeColor('orange')} 
//           className="text-white mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'orange' }}
//         >
//           Orange
//         </button>
//         <button 
//           onClick={() => handleChangeColor('white')} 
//           className="text-black mx-2 rounded-full px-5 py-2 hover:bg-opacity-80 transition-all duration-300"
//           style={{ backgroundColor: 'white' }}
//         >
//           White
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

