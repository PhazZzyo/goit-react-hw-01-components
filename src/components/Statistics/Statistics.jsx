const Statistics = ({ label, percentage }) => {
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </div>
  );
};

export default Statistics;
