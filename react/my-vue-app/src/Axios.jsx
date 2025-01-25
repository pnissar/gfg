import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Axios() {
    const [data,sd]=useState([])
    const fD = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            if (res?.status == 200) {
                sd(res?.data);
            }
            else {
                return;
            }
        }
        catch(error) {
            console.log(error)
        }
    }
    console.log(data);
    useEffect(() => {
        fD()
    },[])
  return (
    <div>Axios</div>
  )
}


export default Axios