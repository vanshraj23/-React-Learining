import styles from "../Css/FoodItems.module.css";

function FoodItems({ items }) {
    return <>
        <ul className={styles["foodList"]}>
            {items.map(item => <li className={styles["foodListItem"]} key={item}>{item}</li>)}
        </ul>
    </>;
}

export default FoodItems;