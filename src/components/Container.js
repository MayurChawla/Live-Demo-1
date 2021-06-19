import React from 'react';

const ContainerList = () => {

  const [Data, setData] = React.useState(null)

  const getData = async () => {
    await fetch("Data.json")
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
    {
      Data?.map((item) => (
      <div className="product" key={item.id}>
        <img src={item.img} alt = "imageloading"/>
        <div className="product-info">
          <h3>{item.brand}</h3>
          <span className="{tag {setVoteClass(vote_average)}}">{item.rating}</span>
        </div>
        <div className="product-overview">
          <h2>{item.description}</h2>
          <p>Price : {item.price}</p>
          <p>Sizes :{item.sizes}</p>
          <p>For : {item.ideal}</p>
        </div>
      </div>
      ))}

          
        </div>
       );
        
}

export default ContainerList;
