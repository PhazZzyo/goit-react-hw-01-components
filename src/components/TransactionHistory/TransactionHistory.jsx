import PropTypes from 'prop-types';
import style from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={style.TransactionContainer}>
      <h2 className={style.title}>Transaction history</h2>
      <table className={style.transactionTable}>
        <thead>
          <tr className={style.transactionTableTop}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className={style.type}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
