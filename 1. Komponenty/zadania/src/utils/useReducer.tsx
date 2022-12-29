import { useReducer } from "react";

export interface Item {
  product: string;
  quantity: number;
}

export const initialState: Item[] = [{ product: "buty", quantity: 5 }];

function AddToCart(product: Item, state: Item[]): Item[] {
  const checkIfInCart = state.some((item) => item === product);

  if (checkIfInCart) {
    return state.map((item) =>
      item === product ? { ...item, quantity: item.quantity++ } : item
    );
  } else {
    return [...state, product];
  }
}

function RemoveFromCart(product: Item, state: Item[]): Item[] {
  const checkIfInCart = state.find((item) => item === product);

  if (checkIfInCart?.quantity === 1) {
    let updatedCart = state.filter((item) => item !== product);
    return updatedCart;
  } else if (checkIfInCart && checkIfInCart?.quantity > 1) {
    let updatedCart = state.map((item) =>
      item === product ? { ...item, quantity: item.quantity-- } : item
    );
    return updatedCart;
  }
}
type ActionType =
  | { type: "add"; payload: Item }
  | { type: "remove"; payload: Item };

function reducer(
  state: typeof initialState,
  action: ActionType
): typeof initialState {
  switch (action.type) {
    case "add":
      return AddToCart(action.payload, state);
    case "remove":
      return RemoveFromCart(action.payload, state);
  }
}

export const Shop: React.FC<Item> = ({ item }: { item: Item[] }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "add", payload: item })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "remove", payload: item })}>
        Remove
      </button>
    </>
  );
};
