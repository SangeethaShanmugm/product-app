import logo from "./logo.svg";
import "./App.css";
import JSON from "./data.json";
function App() {
  //js starts
  const productList = JSON;
  console.log("productList=>", productList);
  //js ends
  //jsx starts
  return (
    <div className="App">
      {productList.map((pd) => (
        <ProductList product={pd} />
      ))}
    </div>
  );
  //jsx ends
}

//custom component
// 1. First letter of comp should be capital
// 2. should return JSX
function ProductList({ product }) {
  return (
    <>
      <h6>
        {product.name} - Cost: {product.cost}
      </h6>
    </>
  );
}
export default App;
