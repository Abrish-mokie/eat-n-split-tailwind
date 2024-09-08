import Button from './Button';
import { useState } from 'react';

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form
      className='flex flex-col min-w-[80%] gap-5 mt-10  mx-auto'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-bold underline'>
        Split a bill with {selectedFriend.name}
      </h2>
      <div className='flex flex-col gap-5 mt-10'>
        <div className='flex justify-between items-center'>
          <label className='w-5/12'>💰 Bill value</label>
          <input
            className='w-6/12 p-2 border border-gray-300 rounded-md'
            type='text'
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className='flex justify-between items-center'>
          <label className='w-5/12'>🧍‍♀️ Your expense</label>
          <input
            className='w-6/12 p-2 border border-gray-300 rounded-md'
            type='text'
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
          />
        </div>
        <div className='flex justify-between items-center'>
          <label className='w-5/12'>👫 {selectedFriend.name}'s expense</label>
          <input
            className='w-6/12 p-2 border border-gray-300 rounded-md'
            type='text'
            disabled
            value={paidByFriend}
          />
        </div>
        <div className='flex justify-between items-center'>
          <label className='w-5/12'>🤑 Who is paying the bill</label>
          <select
            className='w-6/12 p-2 border border-gray-300 rounded-lg'
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value='user'>You</option>
            <option value='friend'>{selectedFriend.name}</option>
          </select>
        </div>
      </div>
      <div className='flex justify-end mt-5'>
        <button className='bg-orange-400 py-2 px-3 cursor-pointer rounded-md font-bold min-w-36'>
          Split bill
        </button>
      </div>
    </form>
  );
}

export default FormSplitBill;
