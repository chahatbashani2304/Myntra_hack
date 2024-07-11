import React from 'react'
import './ShopByEra.css'
// import ShopByera from '../Assets/ShopByEra.png';
import ShopByEra1 from '../Assets/ShopByEra1.png';
import ShopByEra2 from '../Assets/ShopByEra2.png';
import ShopByEra3 from '../Assets/ShopByEra3.png';
import ShopByEra4 from '../Assets/ShopByEra4.png';
import ShopByEra5 from '../Assets/ShopByEra5.png';
import ShopByEra6 from '../Assets/ShopByEra6.png';



const ShopByEra = () => {
  return (
    <div className='shop-by-era'>
      <h1>SHOP BY ERA</h1>
      <hr />
      <div className="shop-era-cat">
            {[ShopByEra1, ShopByEra2, ShopByEra3, ShopByEra4, ShopByEra5, ShopByEra6].map((image, index) => (
                <div key={index} className="shop-eras">
                    <img src={image} className="shop-era-img" alt="" />
                </div>
            ))}
      </div>
    </div>
  )
}

export default ShopByEra
