import Profile from './social-profile/Profile';
import './social-profile/Profile.css';
import user from './user.json';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     textTransform: 'uppercase',
    //     color: '#010101',
    //   }}
    // >
    //   React homework template

    // </div>

    <div>
      <h1>React homework 01 - components</h1>
      <h2>Task 01 - Social network profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
