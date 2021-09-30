import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Banner from './components/header/banner/banner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner src={'header/home-banner.jpg'}/>
      
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;
