import React, { useEffect, useState } from 'react'

export default function Ac1({sn}) {
    const [nn, st] = useState();
    useEffect(() => {
        sn(nn);
    },
    [nn,sn])
  return (
      <div>
          <input type="text" value={nn} onChange={(e)=> st(e.target.value)} />
    </div>
  )
}
