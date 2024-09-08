import { useState } from 'react';
import initialFriends from './values/initialFriends';
import Button from './components/Button';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className='h-screen flex flex-row-[1fr,1.5fr]  justify-center items-start'>
      <div className='flex flex-col sm:flex-row justify-items-start items-start sm:gap-x-10 gap-y-10 sm:pt-0 mt-32'>
        <div className='flex block flex-col gap-2 text-base min-w-[600px]'>
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <div className='flex justify-end m-5'>
            <Button onClick={handleShowAddFriend}>
              {showAddFriend ? 'Close' : 'Add friend'}
            </Button>
          </div>
        </div>

        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        )}
        {/* </div> */}
      </div>
    </div>
  );
}
