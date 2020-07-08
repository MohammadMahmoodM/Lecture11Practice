import React from 'react';
// import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router';

function Product() {
    // const {ProductID} = useParams();
  return (
    <div>
      <h1>  Product  </h1>  
                        {/* {ProductID}  */}
        <hr/>
        <div>
          <Outlet />
        </div>
    </div>
  );
}

export default Product;