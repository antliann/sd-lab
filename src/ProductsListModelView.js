import React from "react";

export default function ProductsList({products}) {
    return (
        products.map((item) =>
            <li key={'prod_' + item} className="products">{item}</li>
        )
    )
}
