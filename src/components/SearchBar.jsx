import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {

    const [searchTerm, setsearchTerm] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setsearchTerm(' ');
            console.log(searchTerm)
        }
    }
     

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                p1: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
            <IconButton type = "submit" sx={{p:'10px', 
            color:'red'}}>
              <Search />
            </IconButton>
        </Paper>
    )
}


export default SearchBar