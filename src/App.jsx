import { useState } from "react";
import initialFriends from "./values/initialFriends";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

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
          : friend,
      ),
    );

    setSelectedFriend(null);
  }

  return (
    <div className="flex h-screen items-center justify-center md:items-start">
      <div className="mt-32 flex flex-col items-start justify-items-start gap-y-10 md:flex-row md:gap-x-10">
        <div className="mx-2 flex min-w-[580px] max-w-[680px] flex-col gap-2 text-base">
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <div className="m-5 flex justify-end">
            <Button onClick={handleShowAddFriend}>
              {showAddFriend ? "Close" : "Add friend"}
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
