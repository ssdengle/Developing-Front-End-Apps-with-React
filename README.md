# Paradise Nursery Shopping Application

Paradise Nursery is a responsive online houseplant shop built with React, Vite and Redux Toolkit. Browse 18 unique plants in three categories, learn about the nursery, and manage a shopping cart with live quantities and prices.

## Features

- Landing page with a background illustration, company introduction and Get Started button.
- Three categories with six unique plants each, including local illustrated thumbnails, descriptions and prices.
- Add to Cart buttons that disable while a product is in the cart and re-enable when it is removed.
- Shared navigation with Home, Plants and Cart links and a live item count.
- Cart with unit prices, item subtotals, quantity controls, deletion and a live grand total.
- Continue Shopping navigation and a Coming Soon checkout message.
- Responsive layout and local SVG artwork (no external image services required).

## Technologies

React, JavaScript (JSX), Vite, Redux Toolkit, React Redux, CSS, HTML and SVG.

## Getting started

Install Node.js 20 or 22 and npm. From the project directory run:

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal. To build and preview the production site:

```bash
npm run build
npm run preview
```

## Project files

| File | Purpose |
| --- | --- |
| README.md | Project name and documentation |
| src/AboutUs.jsx | Company introduction |
| src/App.css | Landing background and responsive styling |
| src/App.jsx | Landing page and shared navigation |
| src/CartSlice.jsx | addItem, removeItem, updateQuantity reducers and selectors |
| src/ProductList.jsx | Plant catalog and add-to-cart controls |
| src/CartItem.jsx | Shopping cart and checkout controls |
| src/store.js | Redux store configuration |
| src/main.jsx | Application entry point and Redux Provider |
| public/plants/ | Local illustrated plant thumbnails |

## Manual testing checklist

1. Select Get Started and confirm all 18 products appear across three categories.
2. Add the Snake Plant ($15) and ZZ Plant ($18). Verify both buttons disable and the cart count is 2.
3. Open Cart. Verify the total is $33.00.
4. Increase Snake Plant quantity. Verify its subtotal is $30.00, the cart count is 3, and the total is $48.00.
5. Decrease its quantity and verify the original subtotal and total return.
6. Select Checkout and confirm Coming Soon appears.
7. Delete a product and verify the total and count update. Continue Shopping and verify that the removed product can be added again.
8. Check Home, Plants and Cart navigation and the layout on a narrow screen.

Checkout is a demonstration only; no payments are processed. Cart state is held in memory and resets on a full page reload.

## Publishing to GitHub

Create an empty public GitHub repository named `paradise-nursery`, then run the following from this directory, replacing YOUR_USERNAME:

```bash
git init
git add .
git commit -m "Build Paradise Nursery shopping application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/paradise-nursery.git
git push -u origin main
```

For the assignment, open each of the seven graded files in the public repository and copy its individual GitHub file URL.
