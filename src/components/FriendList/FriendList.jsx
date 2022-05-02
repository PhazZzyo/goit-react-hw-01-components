import FriendListItem from './FriendListItem';
import style from '../FriendList/FriendList.module.css';

function FriendList({ friends }) {
  return (
    <div className={style.friendListContainer}>
      <h2 className={style.title}>Friend list</h2>
      <ul className={style.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
