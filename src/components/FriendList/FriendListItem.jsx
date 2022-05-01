import PropTypes from 'prop-types';
import style from '../FriendList/FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={style.item}>
      {isOnline ? (
        <span className={style.online}></span>
      ) : (
        <span className={style.offline}></span>
      )}
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendListItem;
