import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data , setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(_=>{
        fetch(url)
            .then(res=>res.json())
            .then(json=> {
                console.log(json)
                setData(json)
                setLoading(false)
            })
    }, [])

    return { data, loading }
    
}
 
export default useFetch;