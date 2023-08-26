import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material';


class HomeView extends React.Component{
    render(){
        return <div>
            <Link to="/users/login">
                <Button variant="outlined">Login</Button>                        
            </Link>
            <Link to="/users/signup">
                <Button variant="outlined">Sign Up</Button>                        
            </Link>
        </div>
    }
}

export default HomeView;