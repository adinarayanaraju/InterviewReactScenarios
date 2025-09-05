import React from 'react';
import { create } from 'zustand';

// --- Mock Data ---
const mockProducts = [
  { id: 1, name: 'React T-Shirt', price: 25 },
  { id: 2, name: 'Zustand Mug', price: 15 },
  { id: 3, name: 'JavaScript Cap', price: 20 },
];

// 1. Create the Zustand store
const useCartStore = create((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // Add new item
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ items: [] }),
}));

// 2. Create UI Components that use the store

const ProductList = () => {
  // Get just the addItem action from the store
  const addItem = useCartStore((state) => state.addItem);
  return (
    <div>
      <h4>Products</h4>
      <ul>
        {mockProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button style={{ marginLeft: '1rem' }} onClick={() => addItem(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CartDisplay = () => {
  // Select multiple values from the store
  const { items, removeItem, clearCart } = useCartStore();
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h4>Your Cart</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (x{item.quantity}) - ${item.price * item.quantity}
            <button style={{ marginLeft: '1rem', backgroundColor: '#d90429' }} onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

const CartSummary = () => {
  // This component uses a selector for performance. It will only re-render
  // if the *number* of items changes, not if the items themselves change.
  const itemCount = useCartStore((state) => state.items.length);
  return <div>Cart Items: <strong>{itemCount}</strong></div>;
};


// 3. Main component for the task
const Task23_Zustand = () => {
  return (
    <div>
      <h2>Task 23: Zustand for Lightweight State Management</h2>
      <CartSummary />
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}><ProductList /></div>
        <div style={{ width: '48%' }}><CartDisplay /></div>
      </div>
      <div className="description">
        <p>Zustand is a small, fast, and scalable state-management solution. It uses hooks and is based on a simplified Flux pattern.</p>
        <ul>
          <li><strong>Minimal Boilerplate:</strong> The store is created with a single `create` call. No providers, actions, or reducers in the traditional sense.</li>
          <li><strong>Easy to Use:</strong> You can access state and actions by simply calling the `useCartStore` hook in your components.</li>
          <li><strong>Performant by Default:</strong> Components can subscribe to specific parts of the state. For example, `CartSummary` only re-renders when the *length* of the items array changes, not when an item's quantity is updated.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task23_Zustand;
