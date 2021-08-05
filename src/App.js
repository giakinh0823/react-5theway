import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import ScrollToTop from './constants/ScrollToTop';
import CartFeature from './features/Cart';
import HomePageFeature from './features/HomePage';
import ProductFeature from './features/Product';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ScrollToTop>
        <Switch>
          <Route path="/products">
            <ProductFeature />
          </Route>
          <Route path="/carts">
            <CartFeature />
          </Route>
          <Route path="/" exact>
            <HomePageFeature />
          </Route>
        </Switch>
      </ScrollToTop>
      <FooterComponent />
    </div>
  );
}

export default App;
