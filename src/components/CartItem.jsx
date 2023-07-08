import { toast } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  };
  return (
    <div className="flex md:flex-row flex-col gap-10 mx-auto border-b-2 md:w-[90%] md:justify-between justify-center items-center border-slate-500 p-10">
      <div className=" w-[27%]">
        <img alt="pic" src={item.image} className=" object-cover" />
      </div>

      <div className="flex flex-col md:w-[65%] w-[90%] gap-5">
        <p className="text-gray-700 font-semibold text-xl w-[90%]">{item.title}</p>

        <p className="text-gray-600">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>

        <div className="flex justify-between items-center pr-5 py-2">
          <p className="text-green-600 text-lg font-bold">${item.price}</p>
          
          <button
            className="text-red-700 bg-red-300 h-8 w-8 rounded-full"
            onClick={removeFromCart}
          >
            <RiDeleteBin6Line size="20px" className="m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
