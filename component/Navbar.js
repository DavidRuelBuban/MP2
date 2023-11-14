import React from 'react'
import Navbar from ".Navbar";
import Logo from ".Logo";
import { BsCart2 } from "react-icons/bs";
import { HiOutlinedBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-materials/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-materials/ShoppingCartRounded";
import { ShoppingCartRounded } from '@mui/icons-material';

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "About",
            icon: <InfoIcon />,
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIconIcon />,
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIconIcon />,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
        },
    ];

  return (
    <div calssName="home-container"><Navbar/>
    </div>
  );
  return <nav>
    <div className="nav-logo-container ">
        <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
            <BsCart2 className="navbar-cart-icon" />
        </a>
        <button calssName="primary-button">Bookings Now</button>
    </div>
        <div className="navbar-menu-container">
            <HiOutLineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={()=> setOpenMenu(false)} anchor="right">
            <Box
                sx={{width:250}}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={()=> setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item)=> (
                            <ListItem key={item.text} disabledPadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
            </Box>
        </Drawer>
  </nav>
}

export default Navbar