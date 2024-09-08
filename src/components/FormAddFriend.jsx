import Button from './Button';
import { useState } from 'react';

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form
      className='grid grid-cols-[1fr,1.5fr] mt-5 gap-3 bg-orange-100 p-5 block rounded-lg self-center min-w-[550px]'
      onSubmit={handleSubmit}
    >
      <label>👫 Friend name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div className=''>
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
