"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Mock data
const transactions = [
  { id: 1, name: 'Grocery Store', amount: -45.67, date: '2023-04-05', category: 'Food' },
  { id: 2, name: 'Coffee Shop', amount: -3.50, date: '2023-04-04', category: 'Food' },
  { id: 3, name: 'Amazon Books', amount: -28.99, date: '2023-04-03', category: 'Education' },
  { id: 4, name: 'Monthly Grant', amount: 1200, date: '2023-04-01', category: 'Income' },
  { id: 5, name: 'Cinema Tickets', amount: -15.00, date: '2023-03-30', category: 'Entertainment' },
];

// Spending by category
const categories = [
  { name: 'Food', percentage: 35, color: 'bg-blue-500' },
  { name: 'Rent', percentage: 40, color: 'bg-purple-500' },
  { name: 'Education', percentage: 15, color: 'bg-green-500' },
  { name: 'Entertainment', percentage: 10, color: 'bg-yellow-500' },
];

export default function BudgetingApp() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-full overflow-auto pb-6">
      {/* Balance Section */}
      <div className="px-4 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-xs font-medium opacity-80">CURRENT BALANCE</h2>
        <div className="text-2xl font-bold mt-1">£1,245.67</div>
        <div className="flex justify-between items-center mt-2 text-xs opacity-80">
          <div>April 2023</div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            14.5% this month
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-around py-3 bg-white dark:bg-gray-800 shadow">
        <button className="flex flex-col items-center justify-center w-16">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <span className="text-xs mt-1">Add</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16">
          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs mt-1">Send</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16">
          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-xs mt-1">Request</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16">
          <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center text-yellow-600 dark:text-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <span className="text-xs mt-1">Scan</span>
        </button>
      </div>

      {/* Budget Overview */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Monthly Budget</h3>
          <button className="text-xs text-blue-500">See All</button>
        </div>
        
        <div className="space-y-3">
          {categories.map((category) => (
            <motion.div 
              key={category.name}
              className="space-y-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-between text-xs">
                <span>{category.name}</span>
                <span>{category.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${category.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${category.percentage}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Recent Transactions</h3>
          <button className="text-xs text-blue-500">See All</button>
        </div>
        
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <motion.div 
              key={transaction.id}
              className="flex items-center p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.amount > 0 ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300'
              }`}>
                {transaction.amount > 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </div>
              <div className="ml-3 flex-grow">
                <div className="text-sm font-medium">{transaction.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{transaction.category} • {transaction.date}</div>
              </div>
              <div className={`text-sm font-medium ${
                transaction.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {transaction.amount > 0 ? '+' : ''}£{Math.abs(transaction.amount).toFixed(2)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 