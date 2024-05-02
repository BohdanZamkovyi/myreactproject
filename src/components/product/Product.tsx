import React, {FC} from 'react';
import * as diagnostics_channel from "diagnostics_channel";
export interface IProduct{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[];
}
const Product:FC<IProduct> = ({
                                  id,
                                  title,
                                  description,
                                  price,
                                  discountPercentage,
                                  rating,
                                  stock,
                                  brand,
                                  category,
                                  thumbnail,
                                  images
                              }) => {
    return (
        <div>
            <div><p>Id: {id} - {title} - brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>Category: {category}</p>
                <p>Stock: {stock}</p>
                <p>Thumbnail: {thumbnail}</p>
                <p>Discount Percentage: {discountPercentage}</p>
                <p>Description {description}</p>
                <div>
                    {images.map((img: string, index: number) => {
                        return <img key={index} src={img} alt={`Image ${index}`} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Product;