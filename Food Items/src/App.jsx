import Heading from "./Components/Heading.jsx";
import ErrorMessage from "./Components/ErrorMessage.jsx";
import FoodItem from "./Components/FoodItem.jsx";
import "./App.css";

function App() {
    const foodItems = ["Dal","Vegetables","Friuts","Salad","Milk","Ghee"];
    
    return (
    <>
        <Heading/>
        {<ErrorMessage foodItems={foodItems}/>}
        <ul>
            {foodItems.map(foodItem => <FoodItem key={foodItem} item={foodItem}/>)}
        </ul>
    </>
    );
}

export default App;