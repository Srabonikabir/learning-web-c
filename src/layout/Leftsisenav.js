import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsisenav = () => {
    const[categories, setCategories] = useState([]);
   
   useEffect( () =>{
    fetch('http://localhost:5000/categories')
    .then ( res => res.json())
    .then(data => setCategories(data))
    .catch(err => console.log(err))
   },[])
   
   
   
    return (
        <div>
            <h3>All Coures: {categories.length}</h3>
        <div>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/catagory/${category.id}`}>{category.name}</Link>
                    {/* {category.name} */}
                </p>)
            
            }
        </div>
        
        
        </div>
    );
};

export default Leftsisenav;