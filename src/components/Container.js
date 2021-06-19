import React from 'react';
//import ProductContainer from './ProductContainer';
import PostData from "./Data.json";

const ContainerList = () => {

       return (
        <div className="product-container">
          console.log(PostData);
          {PostData.map((productDetails, index) => {
            return <div key={index}>
                <div className="product">
                <img src="" alt = "imageloading"/>
                <div className="product-info">
                  <h3>"brand"</h3>
                  <span className="{tag {setVoteClass(vote_average)}}">"rating"</span>
                </div>
                <div className="product-overview">
                  <h2>Description : {}</h2>
                    <p>"price"</p>
                    <p>"sizes"</p>
                    <p>"ideal"</p>
                </div>
            </div></div>
          })
          }
        </div>
       );
        
}

export default ContainerList;
