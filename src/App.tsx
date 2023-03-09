import Authenticate from "./components/Authenticate";
import Greetings from "./components/Greetings";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Greetings></Greetings>
      <Authenticate>
        <ProductList />
      </Authenticate>
    </>
  );
}

export default App;
