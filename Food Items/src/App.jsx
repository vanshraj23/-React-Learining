import Heading from "./Components/Heading.jsx";
import ErrorMessage from "./Components/ErrorMessage.jsx";
import FoodItems from "./Components/FoodItems.jsx";
import "./App.css";

function App() {
    const foodItems = ["Dal","Vegetables","Friuts","Salad","Milk","Ghee"];
    
    return (
    <>
        <Heading/>
        <ErrorMessage foodItems={foodItems}/>
        <FoodItems items={foodItems}/>
    </>
    );
}

export default App;