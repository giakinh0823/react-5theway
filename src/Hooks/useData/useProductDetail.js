
import { useEffect, useState } from "react"
import productApi from "../../../../api/productApi"

const useProductDetail = (productId) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ;(async () => {
            try {
                const response = await productApi.get(productId);
                setProduct(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        })()
    }, [productId])
    return {product, loading};
}

export default useProductDetail