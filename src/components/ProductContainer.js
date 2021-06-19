// product layout for just one item
import React from 'react';


const ProductContainer = (img,brand,description,price,sizes,ideal,rating) => {
    
    return (
        <div className="product">
            <img src="" alt = "imageloading"/>
            <div className="product-info">
                <h3>"brand"</h3>
                <span className="{tag {setVoteClass(vote_average)}}">"rating"</span>
            </div>
            <div className="product-overview">
                <h2>Description :"description"</h2>
                <p>"price"</p>
                <p>"sizes"</p>
                <p>"ideal"</p>
            </div>
        </div>
    );
}

export default ProductContainer;