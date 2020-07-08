import React from 'react';
import { useParams } from 'react-router';

function ProductDetails() {
    const { productID } = useParams();
  return (
    <div>
      Product Details of { productID }
    </div>
  );
}

export default ProductDetails;