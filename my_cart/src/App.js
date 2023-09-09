import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from './components/ProductList.js'

function App() {
  const productList = [
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
  <main className="container mt-5">
  <ProductsList productList={productList}/>
  </main>
  {/* <Footer/>  */}
 
  </>
  )
};

export default App;
