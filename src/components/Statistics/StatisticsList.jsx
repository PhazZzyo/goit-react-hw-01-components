import Statistics from './Statistics';

function StatisticsList({ datas }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {datas.map(data => (
          <li key={data.id}>
            <Statistics
              id={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticsList;
