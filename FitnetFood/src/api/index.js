export const fetchMealKits = () => {
    const mealKits = JSON.parse(localStorage.getItem("mealKits")) ?? [];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mealKits);
      }, 1000);
    });
  };
  
  // POST
  export const createMealKit = (mealKit) => {
    const mealKits = JSON.parse(localStorage.getItem("mealKits")) ?? []; // jeigu neranda mealKits localstorage tai naudoja []
    const updatedArray = JSON.stringify([...mealKits, mealKit]);
    localStorage.setItem("mealKits", updatedArray);
  };
  
  // GET
  export const fetchCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? [];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cartItems);
      }, 1000);
    });
  };
  
  // PUT
  export const updateCart = (mealKit) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? []; // istraukiam duomenis
  
    // patikrinam ar jau egzistuoja
    const foundItem = cartItems.find((item) => item.mealKit.id === mealKit.id); // {quantity: ..., mealKit {...}} arba undefined
    let updatedArray = cartItems;
    if (foundItem) {
      // update quantity
      const updatedQuantity = cartItems.map((item) =>
        item.mealKit.id === mealKit.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updatedArray = JSON.stringify(updatedQuantity);
    } else {
      // add item to cart if item not found
      updatedArray = JSON.stringify([...cartItems, { quantity: 1, mealKit }]);
    }
  
    localStorage.setItem("cartItems", updatedArray);
  };
  
  export const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json()
    );
  };