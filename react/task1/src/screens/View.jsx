import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function View() {
  const { item } = useLocation().state || {};
  console.log(item);
  
 
  
  return (
    // <div className='w-100 h-100 d-flex justify-content-center  align-items-center p-5 '>
    //   <div className='w-auto h-75 d-flex gap-5  p-5 flex-column'>
    //     <img src={item.img} alt="" className=" h-100 rounded-1" />
    //     <div className='c'>
    //       <h1>{item.tittle}</h1>
    //       <p>{item.des}</p>
    //       <div className='d2'>
    //         <h2>Power level : {item.powerLevel}</h2>
    //         <div className='d-flex gap-2'>
    //         {item.specialties.map(it =>
    //           <p className='bg-info p-1 rounded-1 px-2 f'>{it}</p>
    //           )
    //           }
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="">
      {" "}
      <div className="">
        {" "}
        <div className="">
          {" "}
          <div className="">
            {" "}
            <img
              src={item.img}
              alt=""
              className=""
            />{" "}
          </div>{" "}
          <div className="">
            {" "}
            <h1>{item.tittle}</h1> <p>{item.des}</p>{" "}
            <div>
              {" "}
              <h2>Power level: {item.powerLevel}</h2>{" "}
              <div className="">
                {" "}
                {item.specialties.map((it, index) => (
                  <p key={index} className="bg-info p-1 rounded-1 px-2 f">
                    {it}
                  </p>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
