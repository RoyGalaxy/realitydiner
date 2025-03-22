// ProductContext.js
import { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "AED"
  const deliveryFee = 10;
  const [cartItems, setCartItems] = useState([])
  const [categorizedProducts, setCategorizedProducts] = useState({});

  // Fetch Data from the server
  const fetchProducts = async () => {
    const { data } = await axios.get("https://realitydiner.onrender.com/api/products");
    return data;
  };

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Group products by category after fetch
  const groupByCategory = (products) => {
    if (!products || products?.length <= 0) return;
    const categoryMap = {};

    products.forEach((product) => {
      const category = product.catagory || "Uncategorized";
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }
      categoryMap[category].push(product);
    });
    setCategorizedProducts(categoryMap);
  }

  // Get Products of a category
  const getProductsByCategory = (category) => {
    return (products && !isLoading) ? categorizedProducts[category] || [] : [];
  }

  // Get Product using Id
  const getProductById = (id) => {
    if (!products || products.length === 0 || isLoading || error) return undefined;

    return products.find(product => product._id === id); // Returns the matched product or undefined
  };

  // Get Cover Image for each category
  const getCategoryImage = (category) => {
    return (categorizedProducts[category] && categorizedProducts[category][0].image) || '';
  }

  // Add Item to Cart
  const addToCart = (itemId, quantity) => {
    if (!itemId) {
      return;
    }
    const cartData = structuredClone(cartItems)
    if (cartData[itemId]) {
      cartData[itemId] = quantity >=0 ? quantity : 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (let item in cartItems) {
      try {
        if (cartItems[item] > 0) {
          totalCount += cartItems[item];
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  }

  const getCartAmount = () => {
    let totalAmount = 0;

    for (let item in cartItems) {
      let itemInfo = products.find(product => product._id === item)
      try {
        if (cartItems[item] > 0) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      } catch (err) {
        // toast.error("can't calculate Total");
        console.log(err)
        return
      }
    }
  }

  useEffect(() => {
    groupByCategory(products)
  }, [products]);

  const value = {
    currency,
    deliveryFee,
    products,
    cartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    isLoading,
    error,
    categorizedProducts,
    categories: Object.keys(categorizedProducts),
    getCategoryImage,
    getProductsByCategory,
    getProductById,
  }
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider