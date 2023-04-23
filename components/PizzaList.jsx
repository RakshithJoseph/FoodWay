import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>Are you looking for a great dining experience? Come and visit our restaurant! We take pride in offering high-quality food made with fresh, locally-sourced ingredients, prepared by skilled chefs who have a passion for creating delicious meals. Our menu features a variety of options to cater to different tastes and dietary needs, including vegetarian and gluten-free options. We also offer a warm and inviting atmosphere, with attentive service and a commitment to cleanliness and safety.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
