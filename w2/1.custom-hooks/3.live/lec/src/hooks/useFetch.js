import { useState,useEffect } from "react";

const useFetch=(apiFun)=>{

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
  
    const excute = async () => {
        try {
          setLoading(true);
          let data = await apiFun();
          setData(data);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
        excute();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return  {loading,error,data,setData,refresh:excute}
}

export default useFetch;