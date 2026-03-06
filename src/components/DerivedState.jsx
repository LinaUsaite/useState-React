import { useState } from "react";

export default function DerivedState(){
    const [price, setPrice] = useState();
    const [percentage, setPercentage] = useState();
    const discountedPrice = price - (price * percentage / 100)
    return(
        <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4">Derived State (task 14)

            <form className="flex flex-col gap-2">
                <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Enter price"
                type="text" 
                className="border rounded p-1"/>
                <input 
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="Enter discount percentage"
                type="text" 
                className="border rounded p-1"/>
                
                <p>Discounted price: ${discountedPrice}</p>
            </form>
        </div>
    )
}