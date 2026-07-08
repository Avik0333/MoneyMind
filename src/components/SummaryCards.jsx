import { useContext } from "react";

import { FinanceContext } from "../context/FinanceContext";

import SummaryCard from "./SummaryCard";

function SummaryCards() {

    const { transactions } = useContext(FinanceContext);

    const income = transactions
        .filter(t => t.type === "Income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
        .filter(t => t.type === "Expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expenses;

    const incomeTransactions =
        transactions.filter(t => t.type === "Income").length;

    const expenseTransactions =
        transactions.filter(t => t.type === "Expense").length;

    const savingsPercentage =
        income > 0
            ? ((balance / income) * 100).toFixed(1)
            : 0;

    return (

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">

            <SummaryCard
                title="Income"
                value={`₹${income.toLocaleString()}`}
                subtitle={`${incomeTransactions} Income Sources`}
                color="green"
            />

            <SummaryCard
                title="Expenses"
                value={`₹${expenses.toLocaleString()}`}
                subtitle={`${expenseTransactions} Expenses`}
                color="red"
            />

            <SummaryCard
                title="Savings"
                value={`₹${balance.toLocaleString()}`}
                subtitle={`${savingsPercentage}% Saved`}
                color="cyan"
            />

            <SummaryCard
                title="Balance"
                value={`₹${balance.toLocaleString()}`}
                subtitle={`${transactions.length} Transactions`}
                color="emerald"
            />

        </section>

    );

}

export default SummaryCards;