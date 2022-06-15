import './App.css';
import Example from '../src/components/Example'
import Mensaje from '../src/components/Mensaje'
import Content from '../src/components/Descripcion'
import Footer from '../src/components/Footer'
import Person from './components/Person';

const Interno = () =>{
  return <h2>Insertando mapa</h2>
}


const App =()=> {
  // const mensaje = 'Hola Mundo desde variable'
  const a = 2
  const b = 3
  return (
    <div className="App">
      <Mensaje 
      name= 'Tomas Hoop' 
      age= {20}/>
      <Interno/>
      {/* <Person /> */}
      <Example />
      <Content/>
        {a + b}
      <Footer/>
    </div>
  );
}

export default App;
