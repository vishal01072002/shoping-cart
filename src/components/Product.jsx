import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("removed from Cart");
  };

  return (
    // box shadow mannu arrora
    <div className="flex flex-col gap-y-3 p-3 justify-between items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300 ease-in hover:scale-110 rounded-xl hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">

      <div className="text-gray-700 font-semibold text-lg" 
      >{post.title.substring(0,14) + "..."}</div>

      <div className="text-[10px] text-gray-400 w-40">{post.description.split(" ").slice(0,10).join(" ") + "..."}</div>

      <div className="h-[180px]">
        <img src={post.image} alt="cloths" className="w-full h-full"/>
      </div>

      <div className="flex text-lg gap-12 mt-3 justify-between items-center">
        <div className="text-green-600 font-semibold">${post.price}</div>

        <div>
          {/* also cart.some(item)=> item.id === post.id */}
          {cart.some( (p) => p.id === post.id) ? (
            <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in"
             onClick={removeFromCart}>Remove item</button>
          ) : (
            <button 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in"
            onClick={addToCart}>Add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
