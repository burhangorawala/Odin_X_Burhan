import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from './components/ProductList.js'

function App() {
  const product = [
    {
      price: 99999,
      name: "iPhone 14",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Mi Note 10",
      quantity: 0,
    }
  ]
  return(
    <>
  <Navbar/>
  <ProductsList product={product}/>
  {/* <Footer/> */}

  </>
  )
};

export default App;
