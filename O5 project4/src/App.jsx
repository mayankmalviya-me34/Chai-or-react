import {useState} from 'react'


function App() {
  const [color, setColor] = useState("olive")


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <h1 className=' text-white text-7xl text-center pt-48 font-serif hover:subpixel-antialiased leading-normal shadow-inner border-slate-950'> MAYANK MALVIYA</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=' flex flex-wrap gap-3 shadow-lg bg-white justify-center px-3 py-1 rounded-3xl border-#ceff00'>   
        <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}
          >Red</button>

          
          <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Green"}}
          onClick={() => setColor("green")}
          >Green</button>

          <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>  

          <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "olive"}}
          onClick={() => setColor("olive")}
          >Olive</button>    

         <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Gray"}}
          onClick={() => setColor("gray")}
          >Gray</button>

           <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "Yellow"}}
          onClick={() => setColor("yellow")}
          >Yellow</button>

          <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "Pink"}}
          onClick={() => setColor("pink")}
          >Pink</button>  

          <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "purple"}}
          onClick={() => setColor("purple")}
          >Purlple</button>    

         <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "White"}}
          onClick={() => setColor("white")}
          >White</button>

          <button className='flex flex-wrap outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Black"}}
          onClick={() => setColor("black")}
          >Black</button>

        </div>
      </div>
    </div>

  )
}
export default App;