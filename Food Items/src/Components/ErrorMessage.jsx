function ErrorMessage ({ foodItems }) {
    if (foodItems.lenght === 0) {
        return <h1>No Food</h1>
    } 
    return null;
} 

export default ErrorMessage;