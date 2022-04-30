import PropTypes from 'prop-types';
import style from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={style.TransactionHistory}>
      <h2 className={style.title}>Transaction history</h2>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
          <tbody>
            <tr key={id} className={style.row}>
              <td className={style.type}>{type}</td>
              <td className={style.amount}>{amount}</td>
              <td className={style.currency}>{currency}</td>
            </tr>
          </tbody>
        ))}
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
