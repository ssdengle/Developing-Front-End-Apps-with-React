import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectItems } from './CartSlice';
const categories = [
  { name: 'Easy-care houseplants', plants: [
    ['snake','Snake Plant',15,'Upright, architectural leaves.'], ['zz','ZZ Plant',18,'Glossy foliage for low-light spaces.'], ['pothos','Golden Pothos',12,'Trailing vines with golden markings.'], ['spider','Spider Plant',10,'Arching striped leaves.'], ['jade','Jade Plant',14,'Compact succulent with fleshy leaves.'], ['aloe','Aloe Vera',13,'Sculptural succulent for bright spaces.'] ] },
  { name: 'Aromatic plants', plants: [
    ['lavender','Lavender',16,'Fragrant purple flowers.'], ['mint','Mint',9,'Fresh, aromatic green leaves.'], ['rosemary','Rosemary',12,'Needle-like fragrant foliage.'], ['basil','Basil',8,'Aromatic leaves for a sunny windowsill.'], ['thyme','Thyme',10,'Tiny leaves with a savory fragrance.'], ['lemonbalm','Lemon Balm',11,'Soft leaves with a citrus scent.'] ] },
  { name: 'Decorative foliage', plants: [
    ['monstera','Monstera',25,'Large, naturally split leaves.'], ['rubber','Rubber Plant',22,'Bold, glossy oval leaves.'], ['calathea','Calathea',20,'Beautiful patterned foliage.'], ['fern','Boston Fern',17,'Soft, cascading fronds.'], ['peperomia','Peperomia',14,'Rounded, compact foliage.'], ['fittonia','Fittonia',12,'Colorful contrasting leaf veins.'] ] }
];
export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  return <main className="content"><h1>Find your favorite plant</h1><p className="muted">A little green makes all the difference.</p>{categories.map(category => <section key={category.name}><h2>{category.name}</h2><div className="product-grid">{category.plants.map(([id,name,price,description]) => {
    const product = { id, name, price, description, image: `${import.meta.env.BASE_URL}plants/${id}.svg` };
    const added = items.some(item => item.id === id);
    return <article className="product" key={id}><img src={product.image} alt={name}/><div className="product-body"><h3>{name}</h3><p>{description}</p><strong>${price.toFixed(2)}</strong><button disabled={added} onClick={() => dispatch(addItem(product))}>{added ? 'Added to Cart' : 'Add to Cart'}</button></div></article>;
  })}</div></section>)}</main>;
}
