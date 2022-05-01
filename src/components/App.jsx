import Profile from './Profile/Profile';
import user from '../data/user.json';

import StatisticsList from './Statistics/StatisticsList';
import statsData from '../data/stats.json';

import FriendList from './FriendList/FriendList';
import friendsData from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <h1>React homework 01 - components</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
