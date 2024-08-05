'use client';

import React, { useState } from 'react';

const ClientDashboard = () => {
  const [amount, setAmount] = useState<string>('');

  const handleDeposit = () => {
    console.log(`Deposited: ${amount}`);
  };

  const handleWithdraw = () => {
    console.log(`Withdrew: ${amount}`);
  };

  const handleTransfer = () => {
    console.log(`Transferred: ${amount}`);
  };

  return (
      <div className="bg-white  rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Account Balance: </h1>
        <div className="mb-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleDeposit}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Deposit
          </button>
          <button
            onClick={handleWithdraw}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Withdraw
          </button>
          <button
            onClick={handleTransfer}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Transfer
          </button>
        </div>
      </div>
  );
};

export default ClientDashboard;
