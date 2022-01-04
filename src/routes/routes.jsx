import { BrowserRouter,Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loader from '../components/shared/loader/loader';

const Router = () => {
    const Home = lazy(() => import('../pages/home/home'));
    const Professionals = lazy(() => import('../pages/professionals/professionals'));
    const Footer = lazy(() => import('../components/footer/footer'));
    const Traduction = lazy(() => import('../pages/traduction/traduction'));
    const Training = lazy(() => import('../pages/training/training'));
    const Header = lazy(() => import('../components/header/header'));
    
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader/>}>
                <Header/>
                    <Switch>  
                        <Route exact path='/' component={Home} />
                        <Route exact path='/traduction' component={Traduction} />
                        <Route exact path='/training' component={Training} />
                        <Route exact path='/professionals' component={Professionals} />
                    </Switch>
                <Footer/>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;