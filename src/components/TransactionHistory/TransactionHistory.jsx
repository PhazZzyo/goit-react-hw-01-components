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
          {items.map(({ type, amount, currency, id }) => (
            <tr key={id}>
              <td className={style.type}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
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
