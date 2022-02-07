// // ........PROPS IN REACT JS.......
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Cards from './Card';
// import Sdata from './Sdata';



// ReactDOM.render(
//   <>
//     <h2>List of best netflix series</h2>
//     {Sdata.map(function ncards(val) {
//       return (
//         <Cards
//           sname={val.sname}
//           imgsrc={val.imgscr}
//           title={val.title}
//           links={val.links}
//         />
      
//       );
//     })}

//   </>,
//   document.getElementById("root")
// );


// ***************USE STATE HOOKES IN REACT JS************


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IncDec from './IncDec';
import RegistrationForm from './Form/RegistrationForm';

ReactDOM.render(<RegistrationForm/>,document.getElementById("root"));