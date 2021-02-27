import React from 'react'
import Product from './Product'; 
import "./Home.css";

function Home() {
    return (
        <div className = "home">
            <img className = "home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
        
        {/* Product id, title, price, rating, image */}

        <div className= "home__row">
            <Product id = "123455"
            title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price = {11.99}
            rating = {5}
            image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
            
            
            <Product id = "123355"
            title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price = {239}
            rating = {4}
            image = "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
            
            
            {/* Product */}
            </div>

        <div className = "home__row">
            <Product id = "123455"
                title = "Bag"
                price = {22.99}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/51MmtM-IScL._AC_SY200_.jpg"/>
                
                <Product id = "123755"
                title = "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price = {98.99}
                rating = {5}
                image = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                
                <Product id = "123455"
                title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price = {598.98}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
            </div>

            <div className = "home__row">
                <Product id = "123455"
                title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price = {1094.98}
                rating = {5}            
                image = "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
            </div>
        </div>
    )
} 

export default Home