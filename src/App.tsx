import "./App.css";
import { Button } from "@/components/ui/button";
import Features from "@/components/features";

function App() {
  return (
    <>
      <div>
        <Features />
        <h1 className="text-black-500">PetDuct</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#brand">Brand</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </nav>

        <Button>Button</Button>
      </div>
    </>
  );
}

export default App;
