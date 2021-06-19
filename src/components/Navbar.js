import React from 'react';

function Navbar() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("searched something");
      };
    return(
        <div className="navdiv">
            <nav className="navclass">
                    <h2 className="site-name">
                        <span>flipkart</span>
                    </h2>
                    <form action="" onSubmit={onSubmitHandler}>
                        <input type="text" placeholder="Search for products, brands and more" className="searchbar"></input>
                        <button type="submit"><img alt="search" src={'./src/searchsvg.svg'}/></button>
                    </form>
                    <button>Login</button>
                    <select>More
                        <option >More</option>
                        <option >Notification Preferences</option>
                        <option >Sell on Flipkart</option>
                        <option >24 x 7 Customer Care</option>
                        <option >Advertise</option>
                        <option >Download App</option>
                    </select>
                    <button><a href="/"> cart</a></button>
            </nav>
        </div>
    )
}
export default Navbar;