import { Avatar, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ProfileMenu = () => {
    const navigate = useNavigate()
    const [UserInfo, setUserInfo] = useState()
    const Logout = async() => {
        axios.defaults.withCredentials = true
        try {
          await axios.post(import.meta.env.VITE_BACKENDURLAUTH +'/logout')  
          toast.success("logged out successfully")
          navigate('/')
        } catch (error) {
           console.log(error) 
        }
    }
    const GetUser = async() => {
     
      try {
       const response = await axios.get(import.meta.env.VITE_BACKENDURLAUTH +'/getUser', {
        withCredentials : true
       })
       setUserInfo(response.data)
      } catch (error) {
        console.log(error)
      }     
    }
     useEffect(() => {
      GetUser()
    }, [])
  return (
    <div>
      <Dropdown>
        <MenuButton><Avatar alt={UserInfo?.user?.username || "User"} size="md"/></MenuButton>
        <Menu>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={() => Logout()}>Logout</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default ProfileMenu;
