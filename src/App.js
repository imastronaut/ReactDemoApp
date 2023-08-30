import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';



function App() {
  const name = "Bhargav";

  const handleNameChange = ()=>{
    const names = ["Bhargav","Divysree","Geetha"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }



  return (
    <div className="App">
      <Header></Header>
      Hello {handleNameChange()}
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
