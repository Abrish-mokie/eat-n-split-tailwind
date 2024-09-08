import Friend from './Friend';

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul className='flex flex-col gap-4'>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
