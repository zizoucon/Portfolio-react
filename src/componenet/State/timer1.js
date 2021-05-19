// import React, { Component } from 'react';
// class Timer1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             ms:0,
//             hh:0,
//             mm:0,
//             ss:0,
//             start:false
//          }
         
//          setInterval(() => {
//             if (this.state.start)
//               this.setState({
//                 ms: this.state.ms + 1000,
//                 hh: parseInt(this.state.ms / 3600000),
//                 mm: parseInt((this.state.ms % 3600000) / 60000),
//                 ss: parseInt(((this.state.ms % 3600000) % 60000) / 1000)
//               });
//           }, 1000);
         
//         }
//         isclicked= ()=>{
//             this.state.start=true  

//           }
//           isreset= ()=>{
//             this.state.start=false  

//           }
    

//     render() { 

//         return (
//             <div>

//                 <label>hh</label>
//                 <label>mm</label>
//                 <label>ss</label>
//                 <button onClick={isclicked}>start</button>
//                 <button onClick={isreset}>reset</button>
//             </div>
//           );
//     }
// }
 
// export default Timer1 ;