import { useEffect, useState } from "react"
import categoryApi from "../../api/categoryApi"

const useCategorys = () => {
    const [categorys, setCategorys] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ;(async () => {
            try {
                const response = await categoryApi.getAll({});
                setCategorys(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        })()
    }, [])
    return {categorys, loading};
}

export default useCategorys