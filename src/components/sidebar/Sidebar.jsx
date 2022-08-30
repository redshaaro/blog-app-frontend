import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  
  const [cats, setcats] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/posts");
      console.log(res.data)
      // setcats(res.data);
    };
    getCat();
  }, []);
  return (
    <div className="side">
      <div className="sidebaritem">
        <span className="sidebarTitle">About me</span>
        {user && <img className="topImg" src={PF+user.profilePic} alt="" />}
             
        
        
        <p className="side-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem
          iusto recusandae perspiciatis dolorem cum veritatis unde, porro qui
          labore. Dolore quo commodi quasi, quibusdam officia earum voluptatum
          quidem dolorem.
        </p>
       </div>

      <div className="sidebaritem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((ct) => {
            return <li className="sidebarlistitem">{ct.name}</li>;
          })}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fa-brands fa-square-facebook"></i>
          <i className="sidebaricon fa-brands fa-square-twitter"></i>
          <i className="sidebaricon fa-brands fa-square-pinterest"></i>
          <i className="sidebaricon fa-brands fa-square-instagram"></i>
        </div>
      </div>
        
    </div>
  );
};

export default Sidebar;
