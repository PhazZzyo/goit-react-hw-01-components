import ProfileCard from './Profile/ProfileCard';
import userData from '../data/user.json';

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
      <ProfileCard data={userData} />
      <StatisticsList title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
