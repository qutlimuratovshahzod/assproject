import React, { useState } from 'react'

export const AddProducts = () => {

  const [value, setValue] = useState("")
  const SubmitHandler = (event) => {
    event.preventDefault(); 
    if(!value.trim()) return;

    console.log(value);
  }

  return (
    <form onSubmit={SubmitHandler} className="card w-96 glass p-9 gap-3 ">
      <input value={value} onChange={(event) => setValue(event.target.value)} type="text" placeholder="Name" className="input input-bordered" />
      <label className="input input-group w-full p-0">
        <input type="number" placeholder="Price" className="input input-bordered flex-1" />
        <select className="select input-bordered">
          <option className='text-xl' >$</option>
          <option className='text-xl'> ₤</option>
          <option className='text-xl'>€</option>
          <option className='text-xl'>₽</option>
          <option >Yu</option>
          <option>Sum</option>
          <option>BTC</option>
        </select>
      </label>
        <select className="select select-bordered w-full max-w-xs">
          <option className='text-current'>Select type of product</option>
          <option>Phones</option>
          <option>Shoes</option>
          <option>Cars</option>
          <option>Clothes</option>
        </select>
        <textarea style={{ resize: "none"}} className="textarea  textarea-bordered" placeholder="Bio"/>
        <button className='btn btn-active btn-ghost'>ADD</button>
    </form>
  )
}
