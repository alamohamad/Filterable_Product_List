import React from 'react';
import Header from './components/header';  
import ProductList from './components/productList';  
import './styles/main.css';




function App() {
    
    return (
        <div className="App">
          <Header/>
          <ProductList />
        </div>
    );
}

export default App;
