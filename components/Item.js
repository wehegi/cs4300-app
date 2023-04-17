import React from 'react';
import {useParams} from 'react-router-dom';
function Item(){
    const {id}= useParams();
    return(
<div>
    <h2>Product/Item</h2>
    <p>Description{id}</p>
    <img src ="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
    <button type="Delete">Delete</button>
</div>
    )
}
export default Item;
