import { useState } from "react";

const useDealayedFetch=(apiFun)=>{

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success,setSuccess]=useState(false)
    const [data, setData] = useState({});
  
    const excute = async (params) => {
        try {
          setLoading(true);
          let data = await apiFun(params);
          setData(data);
          setSuccess(true)
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };


    return  {loading,error,success,data,setData,exec:excute}
}

export default useDealayedFetch;