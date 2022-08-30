import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import  axios  from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Home = () => {
  
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)
    };
    fetchPosts();
  }, [search]);  

  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts posts={posts}></Posts>
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default Home;
