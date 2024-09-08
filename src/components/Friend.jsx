import Button from './Button';

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`p-3 rounded-xl grid grid-cols-3 gap-2 ${isSelected ? 'bg-orange-100' : ''}`}
    >
      <img
        className='row-span-2 col-start-1 row-start-1 justify-self-center rounded-full'
        src={friend.image}
        alt={friend.name}
      />
      <h3 className='row-span-1 col-span-2 order-2 col-start-2 row-start-1'>
        {friend.name}
      </h3>

      {friend.balance < 0 && (
        <p className='text-red-600  col-start-2 row-start-2'>
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className='text-lime-300 col-start-2 row-start-2'>
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && (
        <p className=' col-start-2 row-start-2'>
          You and {friend.name} are even
        </p>
      )}
      <div className='flex justify-center items-center col-start-3 row-start-1 row-span-2'>
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? 'Close' : 'Select'}
        </Button>
      </div>
    </li>
  );
}

export default Friend;
