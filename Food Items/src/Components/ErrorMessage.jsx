import styles from "../Css/Heading.module.css";

const ErrorMessage = ({ foodItems }) => foodItems.lenght === 0 ? <h1 className={styles["heading"]}>No Food</h1> : null; 

export default ErrorMessage;