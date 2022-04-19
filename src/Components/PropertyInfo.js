
import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import {
    useParams
  } from 'react-router-dom';

export default function PropertyInfo(props) {
    const { user } = useMoralis();
    const { sellerId } = useParams()
    const [properties, setProperty] = useState([]);
    useEffect(() => getProperties(), []);
  
    async function getProperties() {
      const properties = user.relation('properties');
      const results = await properties.query().equalTo(sellerId);
      setProperty(results);
      console.log(results[0]?.get('address1'));
    }
    return(
        <div>
            <pr>{properties}</pr>
        </div>
    )
    
}