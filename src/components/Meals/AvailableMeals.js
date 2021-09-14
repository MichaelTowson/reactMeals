import classes from './AvailableMeals.module.css'

//Temporary meals data before connecting to a database in final product.
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

//Component code
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(item => <li>{item.name}</li>)

  return ( <section className={classes.meals}>
    <ul>
      {mealsList}
    </ul>
  </section>

  )
};

export default AvailableMeals;
