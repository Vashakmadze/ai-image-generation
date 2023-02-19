import React, {useState, useEffect} from 'react';
import { Loader, Card, FormFields } from "../components/index";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  
  return (
    <div>Home</div>
  )
}

export default Home