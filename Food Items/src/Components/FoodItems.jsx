function FoodItems({ items }) {
    return <>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </>;
}

export default FoodItems;