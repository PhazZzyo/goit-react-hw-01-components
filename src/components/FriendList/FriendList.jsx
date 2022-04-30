import PropTypes from 'prop-types';
import style from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={style.friendListContainer}>
      <h2 className={style.title}>Friend list</h2>
      <ul className={style.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={style.item}>
            {isOnline ? (
              <span className={style.online}></span>
            ) : (
              <span className={style.offline}></span>
            )}
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
