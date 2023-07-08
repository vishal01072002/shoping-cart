import { useEffect, useState } from "react";
import Product from '../components/Product'
import { Spinner } from "../components/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const API_URL = "https://fakestoreapi.com/products";
  const [post, setPost] = useState([]);

  async function fetchdata() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  },[]);


  return <div>
    {loading? (<Spinner/>):
     (post.length > 0 ? 
     <div className="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-8 grid gap-10 max-w-6xl mx-auto p-5 min-h-[80vh]">
      {
        post.map( (postOne) => (<Product post={postOne} key={postOne.id} />))
      }
     </div> : 
     <div className="flex h-full justify-center items-center text-3xl text-green-600 font-bold mt-[15%]">Not Data Found</div>)
     }
  </div>;
};

export default Home;
