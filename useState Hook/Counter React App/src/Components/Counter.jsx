import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
    const [ count, setCount ] = useState(0);

    function handleOnClick() {
        setCount(count + 1);
    };

    return(
        <div className={styles.container}>
            <p className={`${styles.displayCounter} display`}>You clicked {count < 10 ? `0${count}` : count} times</p>
            <button className={styles.counterBtn} onClick={handleOnClick}>Click me</button>            
        </div>
    );
}

export default Counter;