import { Fragment } from "react";
import HeaderCartButton from './HeaderCartButton';
import imgMeals from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header =  props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>REACT Meals</h1>
      <HeaderCartButton onShowCart={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={imgMeals} alt="A table full of delicious food"/>
    </div>
  </Fragment>
};

export default Header;