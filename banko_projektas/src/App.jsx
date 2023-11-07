import React, { useState } from 'react';

const ATM = () => {
  const [balance, setBalance] = useState(500);

  const handleWithdraw = (amount) => {
    setBalance(balance - amount);
  };

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
  };

  const handleWithdrawAll = () => {
    setBalance(0);
  };

  return (
    <div>
      <h1>ATM Balance: {balance} euros</h1>
      <button onClick={() => handleWithdraw(10)}>Withdraw 10 euros</button>
      <button onClick={() => handleWithdraw(20)}>Withdraw 20 euros</button>
      <button onClick={() => handleWithdraw(50)}>Withdraw 50 euros</button>
      <button onClick={() => handleWithdraw(100)}>Withdraw 100 euros</button>
      <br />
      <button onClick={() => handleDeposit(10)}>Deposit 10 euros</button>
      <button onClick={() => handleDeposit(20)}>Deposit 20 euros</button>
      <button onClick={() => handleDeposit(50)}>Deposit 50 euros</button>
      <button onClick={() => handleDeposit(100)}>Deposit 100 euros</button>
      <br />
      <button onClick={handleWithdrawAll}>Withdraw Everything</button>
    </div>
  );
};

export default ATM;
