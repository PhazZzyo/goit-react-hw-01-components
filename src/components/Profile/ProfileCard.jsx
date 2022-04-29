import Profile from './Profile';

function ProfileCard({ data }) {
  return (
    <Profile
      username={data.username}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
      stats={data.stats}
    />
  );
}

export default ProfileCard;
