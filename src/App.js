import './App.css';
import {useState} from 'react';
import Questionbox from './components/Questionbox';


function App() {
               
           const [active,setActive] = useState(1);
           const [second,setSecond] = useState(1)

           setTimeout(()=>{
                 let today= new Date();
                 let sec= today.getSeconds();
                  setSecond(sec);
           },1000)

       const data = [
             { id:1, amount:'$100'},
             { id:2, amount:'$200'},
             { id:3, amount:'$300'},
             { id:4, amount:'$500'},
             { id:5, amount:'$1000'},
             { id:6, amount:'$2000'},
             { id:7, amount:'$4000'},
             { id:8, amount:'$8000'},
             { id:9, amount:'$16000'},
             { id:10, amount:'$32000'},
             { id:11, amount:'$64000'},
             { id:12, amount:'$125000'},
             { id:13, amount:'$250000'},
             { id:14, amount:'$500000'},
             { id:15, amount:'$1000000'},
       ].reverse();

  return (
     <>
        <div className='main'>
                  <div className='qusbox'>
                         <div className='timer'>
                                <div className='ring'>
                                        {second}
                                </div>
                         </div>
                         <div className='qusetions'>
                                   <Questionbox /> 
                         </div>
                  </div>
                  <div className='amountbox'>
                           <ul className='list'>
                            {
                                data.map((item)=>{
                                   return(
                                  <li className={item.id === active ? "active" : "listitem"}>
                                      <span>{item.id}</span>
                                      <span>{item.amount}</span>
                                  </li>
                                   )
                                })
                            }
                                 
                                 
                           </ul>
                  </div>
        </div>
     </>
  );
}

export default App;
