import React from 'react';

const Select = ({list, label, type, handler, defaultVal}) => {
 return(
   <div className="Select">
     <span>{label}</span>
     <select onChange={handler} defaultValue={defaultVal}>
       {
         list.map(item => {

           return <option value={item.id} key={item.id}>
             {item[type]}
           </option>

         })
       }
     </select>
   </div>

 )
}

export default Select;