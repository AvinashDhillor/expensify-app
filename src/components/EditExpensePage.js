import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {
  removeExpense,
  editExpense,
  startRemoveExpense,
  startEditExpense
} from '../actions/expenses';

const EditExpensePage = props => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Edit Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
          console.log('updated', expense);
        }}
      />
      <button
        className="button button--secondry"
        onClick={expenseid => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }));
          props.history.push('/');
        }}
      >
        Remove Expense
      </button>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
