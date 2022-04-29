import ProfileCard from './Profile/ProfileCard';
import './Profile/Profile.css';
import userData from '../data/user.json';
import StatisticsList from './Statistics/StatisticsList';
import statsData from '../data/stats.json';

export const App = () => {
  return (
    <div>
      <h1>React homework 01 - components</h1>
      <ProfileCard data={userData} />
      <StatisticsList data={statsData} />
    </div>
  );
};
