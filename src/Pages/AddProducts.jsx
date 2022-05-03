import React from 'react'

export const AddProducts = () => {
  return (
    <form className="card w-96 glass p-9 gap-3 ">
      <input type="text" placeholder="Name" className="input input-bordered" />
      <label className="input input-group w-full p-0">
        <input type="number" placeholder="Price" className="input input-bordered flex-1" />
        <select className="select input-bordered">
          <option className='text-xl' >$</option>
          <option  className='text-xl'> ₤</option>
          <option  className='text-xl'>€</option>
          <option  className='text-xl'>₽</option>
          <option >Yu</option>
          <option>Sum</option>
          <option>BTC</option>
        </select>
      </label>
    </form>
  )
}
