import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './CartSlice';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';
export default function App() {
  const [page, setPage] = useState('home');
  const count = useSelector(selectCount);
  const navigate = next => { setPage(next); window.scrollTo(0, 0); };
  return page === 'home' ? (
    <main className="landing"><div className="hero"><p className="eyebrow">GROW SOMETHING GOOD</p><h1>Paradise Nursery</h1><p>Bring nature home.</p><button onClick={() => navigate('plants')}>Get Started</button></div><AboutUs /></main>
  ) : (
    <><header className="navbar"><button className="brand" onClick={() => navigate('home')}>🌿 Paradise Nursery</button><nav aria-label="Main navigation"><a href="#home" onClick={e => { e.preventDefault(); navigate('home'); }}>Home</a><a href="#plants" onClick={e => { e.preventDefault(); navigate('plants'); }} aria-current={page === 'plants' ? 'page' : undefined}>Plants</a><a href="#cart" onClick={e => { e.preventDefault(); navigate('cart'); }} aria-current={page === 'cart' ? 'page' : undefined}>🛒 Cart <span className="count" aria-live="polite">{count}</span></a></nav></header>{page === 'plants' ? <ProductList /> : <CartItem onContinue={() => navigate('plants')} />}</>
  );
}
