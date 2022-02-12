import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <h2>Total Amount ${totalAmount.toFixed(2)}</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
