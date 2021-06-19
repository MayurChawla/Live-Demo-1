import React from 'react';
import ProductContainer from './ProductContainer';

const ContainerList = () => {

    const [getData, setData] = useEffect();
    
    const getData = async () => {
        await fetch("/Data.json")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      };
    
      React.useEffect(() => {
        getData();
      }, []);
    
    return (
       
        <div className="product-container">
            {ProductData.map((product)=>(
                <ProductContainer key={product.id} {...product}/>
            ))}
        </div>

    )
}

export default ContainerList;
