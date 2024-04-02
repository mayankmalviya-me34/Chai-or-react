import './App.css';
import CardOne from './Component/CardOne';

function App() {
  let myObj = {
    username:"Mayank",
    photo:"propes\propesp\src\App.js",
    age: 21
  }
  return (
    <>
    <h1 className='text-white text-center mt-10 text-lg font-bold'> JHAKLAY FAMILY</h1>
    <div className=' mt-2 flex flex-wrap'>
    <CardOne username="Darshan" />
    <CardOne username="Mayank"/>
    <CardOne username="Rishika"/>
    <CardOne username="Niyati"/>
    <CardOne username="Samarth"/>
    <CardOne username="Anurag"/>
    <CardOne username="Madhav"/>
    </div>
    </>
  );
}

export default App;
