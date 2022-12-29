import { useReducer } from "react";

export interface Item {
  product: string;
  quantity: number;
}
export interface Cart {
  cart: Item[];
}

export const initialState: Cart = { cart: [{ product: "buty", quantity: 5 }] };

function AddToCart(product: Item, state: Cart) {
  let cart = state;
  let checkIfInCart = state.find((item) => item === product);

  if (checkIfInCart) {
    let updatedCart = state.map((item) => (item === product ? item.quantity++ : item));
    return updatedCart;
  }

  if (!checkIfInCart) {
    let updatedCart = [...state, product];
    return updatedCart;
  }
}

function RemoveFromCart(product: Item, state: Cart) {
  let checkIfInCart = state.find((item) => item === product);

  if (checkIfInCart?.quantity === 1) {
    let updatedCart = state.filter((item) => item !== product);
    return updatedCart;
  }

  if (checkIfInCart?.quantity > 1) {
    let updatedCart = state.map((item) => (item === product ? item.quantity-- : item));
    return updatedCart;
  }

  return;
}
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { cart: AddToCart(action.payload, state) };
    case "remove":
      return { cart: RemoveFromCart(action.payload, state) };
  }
}

export const Shop: React.FC<Item> = ({ item }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "add", payload: item })}>Add</button>
      <button onClick={() => dispatch({ type: "remove", payload: item })}>Remove</button>
    </>
  );
};
