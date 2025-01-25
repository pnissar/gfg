// function App() {
//   const my_name = "Nissar";
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const obj = [
//     {
//       id: 1,
//       f_n: "Nissar",
//       l_n: "Pinjari",
//       age: 21,
//       hob: ["playing games", "watching Anime", "coding"],
//     },
//     {
//       id: 2,
//       f_n: "Chaitu",
//       l_n: "Salak",
//       age: 25,
//       hob: ["playing games", "watching Anime", "coding"],
//     },
//     {
//       id: 3,
//       f_n: "Chandu",
//       l_n: "Yadav",
//       age: 26,
//       hob: ["playing games", "Betting", "Youtube"],
//     },
//     {
//       id: 3,
//       f_n: "Swaroop",
//       l_n: "shetty",
//       age: 31,
//       hob: ["playing games", "Playing Cricket", "coding"],
//     },
//   ];
//   return (
//     <div>
//       <ul>
//         {
//           obj.map((item) => (
//           <li>
//             <ol>
//               <li>id:{item.id}</li>
//               <li>f_n:{item.f_n}</li>
//               <li>l_n:{item.l_n}</li>
//               <li>age:{item.age}</li>
//               <ul>
//                   {
//                     item.hob.map((it) => (
//                   <li>{it}</li>
//                     ))
//                   }
//               </ul>
//             </ol>
//           </li>
//         ))
//         }
//       </ul>
//     </div>
//   );
// }
import Bu from "./Bu.jsx"
import Ch1 from "./Ch1.jsx"
import Ap from "./Ap.jsx"
import Form from "./Form.jsx"
import { useState } from "react";
import "./c.css"
import st from "./st.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const l = ["Click", "Send", "Login", "Subscribe", "Cart"];
  const obj = [
    {
      id: 1,
      f_n: "Nissar",
      l_n: "Pinjari",
      age: 21,
      hob: ["playing games", "watching Anime", "coding"],
    },
    {
      id: 2,
      f_n: "Chaitu",
      l_n: "Salak",
      age: 25,
      hob: ["playing games", "watching Anime", "coding"],
    },
    {
      id: 3,
      f_n: "Chandu",
      l_n: "Yadav",
      age: 26,
      hob: ["playing games", "Betting", "Youtube"],
    },
    {
      id: 3,
      f_n: "Swaroop",
      l_n: "shetty",
      age: 31,
      hob: ["playing games", "Playing Cricket", "coding"],
    },
  ];
  const [is, sett] = useState(false);
  const [v, sv] = useState(0);
  const i = () => {
    if (v < 10) {
      sv(v + 1);
    }
  };
  const d = () => {
    if (v > 0) {
      sv(v - 1);
    }
  };
  const bu = {
    border: "2px solid black",
    backgroundColor:"pink"

  }
  return (
    <div className={`${st.c} bg-info text-success`}>
      <div class="he" className={`gap-2 d-flex bg-secondary p-3 border rounded-5`}>
        <button onClick={i} style={bu}>
          Increase
        </button>
        <h1>count</h1>
        <h1 style={{ color: "white" }}>{v}</h1>

        <button onClick={d} style={bu}>
          Decrease
        </button>
      </div>
      <button
        onClick={() => sett(!is)}
        style={{ backgroundColor: is ? "pink" : "yellow" }}
        className={st.bu}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
