import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectItems, selectTotal } from './CartSlice';
export default function CartItem({ onContinue }) {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  return <main className="content cart"><h1>Shopping Cart</h1><h2>Total cart amount: ${total.toFixed(2)}</h2>{items.length === 0 && <p>Your cart is empty. Find a plant you love!</p>}{items.map(item => <article className="cart-row" key={item.id}><img src={item.image} alt={item.name}/><div><h3>{item.name}</h3><p>Unit price: ${item.price.toFixed(2)}</p><div className="quantity"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity-1}))}>−</button><span aria-live="polite">{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity+1}))}>+</button></div></div><div className="cart-price"><strong>Subtotal: ${(item.price*item.quantity).toFixed(2)}</strong><button className="delete" onClick={() => dispatch(removeItem(item.id))}>Delete</button></div></article>)}<div className="cart-actions"><button className="secondary" onClick={onContinue}>Continue Shopping</button><button disabled={!items.length} onClick={() => setMessage('Coming Soon!')}>Checkout</button></div><p role="status">{message}</p></main>;
}
