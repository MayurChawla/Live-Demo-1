import React,{useState} from 'react';

const ContainerList = () => {

  const [Data, setData] = useState(null);
  let tempdata = [];
  const [size,setSize] = useState([]);

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
    tempdata = Data.map((item)=>item);
    tempdata.sort(function (a, b) {
      return a.price - b.price;
    });
    setData(tempdata);
  }
  const priceDescending = () => {
    tempdata = Data.map((item)=>item);
    tempdata.sort(function (a, b) {
      return b.price - a.price;
    });
    setData(tempdata);
  }
const sizeCheck = () => {
  console.log(""+size);
  getData();
  tempdata = Data.map((item)=>item);
    for(let i=0;i<size.length;i++)
    {
      tempdata.filter((product)=>product.sizes.includes(size[i])
    )
  }
  console.log(tempdata);
}
  return (
    <div>
      <div >
        price :
        <button className="sort-by-price-button" onClick={priceAscending}>asce</button>
        <button className="sort-by-price-button" onClick={priceDescending}>desc</button>
      </div>
      <div>
        Size : 
        <input name="S" type="checkbox" onClick={(e)=>{if(!size.includes("S")){size.push(e.target.name)} else{size.splice(size.indexOf("S"),1)}}}/>S
        <input name="M" type="checkbox" onClick={(e)=>{if(!size.includes("M")){size.push(e.target.name)} else{size.splice(size.indexOf("M"),1)}}}/>M
        <input name="L" type="checkbox" onClick={(e)=>{if(!size.includes("L")){size.push(e.target.name)} else{size.splice(size.indexOf("L"),1)}}}/>L
        <input name="XL" type="checkbox" onClick={(e)=>{if(!size.includes("XL")){size.push(e.target.name)} else{size.splice(size.indexOf(e.target.name),1)}}}/>XL
        <button onClick={sizeCheck}>Check Sizes</button>
      </div>
      <div className="product-container">
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
    </div>
    );
        
}

export default ContainerList;
