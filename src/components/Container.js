import React,{useState} from 'react';

//Working code with uncheck feature.

const ContainerList = () => {
 
const [Data, setData] = useState(null);
const [copydata,setCopyData] = useState(null);
let tempdata = [];
const [size,setSize] = useState([]);
const [idealFor,setIdealFor] = useState([]);
const [brandarr,setBrand] = useState([]);

//Getting data from JSON
const getData = async () => {
  await fetch("Data.json")
    .then((res) => res.json())
    .then((data) => {
      setCopyData(data);
      setData(data);
    });
};

React.useEffect(() => {
  getData();
},[]);

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
const rateAscending = () => {
  tempdata = Data.map((item)=>item);
  tempdata.sort(function (a, b) {
    return a.rating - b.rating;
  });
  setData(tempdata);
}
const rateDescending = () => {
  tempdata = Data.map((item)=>item);
  tempdata.sort(function (a, b) {
    return b.rating - a.rating;
  });
  setData(tempdata);
}

const Checking = (e,arr) => {
  if(e.target.checked)
  {
    arr.push(e.target.name);
  }
  else if(!e.target.checked)
  {
    arr.splice(arr.indexOf(e.target.name),1);
  }
  setTimeout(() => {
    filterData();
  }, 0);
}

const filterData = () => {
  tempdata = copydata;
  if(size.length)
  {
    console.log("Sizes : "+size);
    for(let i=0;i<size.length;i++){
      tempdata = tempdata.filter((si)=>si.sizes.includes(size[i]));
    }
  }
  if(idealFor.length)
  {
    console.log("For : "+idealFor);
    for(let i=0;i<idealFor.length;i++){
      tempdata = tempdata.filter((si)=>si.ideal.includes(idealFor[i]));
    }
  }
  if(brandarr.length)
  {
    console.log(brandarr);

    for(let i=0;i<brandarr.length;i++){
      tempdata = tempdata.filter((si)=>si.brand.includes(brandarr[i]));
    }
  }
  setData(tempdata);
}
const resetFilters = () => {
  console.log("Reset Filters");
  setBrand([]);
  setIdealFor([]);
  setSize([]);
  window.location.reload();
}
return(
  <div>
<div className="filters">
<div className="filters">
  price :
  <button className="sort-by-price-button" onClick={priceAscending}>Ascending</button>
  <button className="sort-by-price-button" onClick={priceDescending}>Descending</button>
</div>
<div className="filters">
  Size : 
  <input name="S" type="checkbox" onClick={
                                      (e)=>Checking(e,size)
                                    }/>S
  <input name="M" type="checkbox" onClick={(e)=>Checking(e,size)}/>M
  <input name="L" type="checkbox" onClick={(e)=>Checking(e,size)}/>L
  <input name="XL" type="checkbox" onClick={(e)=>Checking(e,size)}/>XL
</div>
<div className="filters">
  Ideal For :
  <input name="Men" type="checkbox" onClick={
                                      (e)=>Checking(e,idealFor)
                                    }/>Men
  <input name="Women" type="checkbox" onClick={
                                      (e)=>Checking(e,idealFor)
                                    }/>Women
  <input name="Child" type="checkbox" onClick={
                                      (e)=>Checking(e,idealFor)
                                    }/>Child
</div>
<div className="filters">
  Brand :
  <input name="A Company" type="checkbox" onClick={
                                      (e)=>Checking(e,brandarr)
                                    }/>A Company
  <input name="B Company" type="checkbox" onClick={
                                      (e)=>Checking(e,brandarr)
                                    }/>B Company
  <input name="C Company" type="checkbox" onClick={
                                      (e)=>Checking(e,brandarr)
                                    }/>C Company
  <input name="D Company" type="checkbox" onClick={
                                      (e)=>Checking(e,brandarr)
                                    }/>D Company
  <input name="E Company" type="checkbox" onClick={(e)=>Checking(e,brandarr)}/>E Company
</div>
<div className="filters">
  <strong>Rating : </strong>
  <button onClick={rateAscending}>Ascending</button>
  <button onClick={rateDescending}>Descending</button>
</div>
<div className="filters">
  <button onClick={resetFilters}>Reset Filters</button>
</div>
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