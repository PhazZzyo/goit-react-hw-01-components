import PropTypes from 'prop-types';
import { setBg } from '../../tools/randomColor';
import style from '../Statistics/Statistics.module.css';

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={style.item}
            style={{
              backgroundColor: setBg(),
            }}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsList;
