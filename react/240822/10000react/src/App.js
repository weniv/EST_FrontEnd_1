import './App.css';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {
  const [someVal, setSomeVal] = useState(0);

  return (
    <div id="app">
      <Header someVal={someVal} />
      <Main />
      <Footer />
      <Modal />
    </div>
  );
}
export default App;
