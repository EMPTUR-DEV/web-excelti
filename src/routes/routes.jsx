import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Home from '../pages/home/home';
import Traduction from '../pages/traduction/traduction';
import Banner from '../components/header/banner/banner';
import Professionals from '../pages/professionals/professionals';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Banner src={'header/home-banner.jpg'}/>
                <Switch>  
                    <Route exact path='/' component={Home} />
                    <Route exact path='/traduction' component={Traduction} />
                    <Route exact path='/professionals' component={Professionals} />
                </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router;