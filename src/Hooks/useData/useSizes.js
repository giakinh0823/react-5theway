import { useEffect, useState } from "react"
import sizeApi from "../../api/sizeApi"



const useSizes = () => {
    const [sizes, setSizes] = useState([])
    const [loading, setLoading] = useState(true)

   
    useEffect(() => {
        ; (async () => {
            try {
                const response = await sizeApi.getAll({});
                setSizes(response.data)
            } catch (error) {
                console.log(error.message)
            }
            setLoading(false)
        })()
    }, [])
    return { sizes, loading };
}

export default useSizes