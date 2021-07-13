import React from 'react';

const ContainerList = () => {

  const [Data, setData] = React.useState(null);
  let prices = [];
  let tempdata = [];
  const [sortPriceValue, setPrice] = React.useState("desc");

  // Getting Product List from JSON File and showing.
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


  const priceAscending = () => {
    console.log("ascending price");
    setPrice("asce");
    tempdata = Data.map((item)=>item);
    
    for(let i=0;i<tempdata.length;i++)
    {
      prices[i] = tempdata[i].price;


      console.log(tempdata[i].id + " : "+ tempdata[i].price);
    }
    //getDatapriceAsce();
  }
  const priceDescending = () => {
    console.log("descending price");
    setPrice("desc");
  }

  return (
    <div className="product-container">
      <div >
        price :
        <button className="sort-by-price-button" onClick={priceAscending}>asce</button>
        <button className="sort-by-price-button"  onClick={priceDescending}>desc</button>
      </div>
    {
      Data?.map((item) => (
      <div className="product" key={item.id}>
        <img src={item.img} alt = "imageloading"/>
        <div className="product-info">
          <h3>{item.brand}</h3>
          <span>{item.rating}</span>
        </div>
        <div className="product-overview">
          <h2>{item.description}</h2>
          <p>Price : {item.price}</p>
          <p>Sizes :{item.sizes}</p>
          <p>For : {item.ideal}</p>
        </div>
      </div>
      ))
    }
    </div>
    );
        
}

export default ContainerList;
