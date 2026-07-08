import { useContext } from "react";

import { FinanceContext } from "../context/FinanceContext";

import TransactionCard from "./TransactionCard";

function TransactionList({ search, filter }) {

    const { transactions } = useContext(FinanceContext);

    const filteredTransactions = transactions.filter((transaction) => {

        const matchesSearch =

            transaction.title
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            transaction.category
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesFilter =

            filter === "All"

            ||

            transaction.type === filter;

        return matchesSearch && matchesFilter;

    });

    if (filteredTransactions.length === 0) {

        return (

            <section className="my-12">

                <div
                    className="
                        bg-[#11212D]
                        border
                        border-[#253745]
                        rounded-3xl
                        p-16
                        text-center
                    "
                >

                    <h2 className="text-6xl mb-6">

                        💸

                    </h2>

                    <h3 className="text-3xl font-bold text-white">

                        No Transactions Found

                    </h3>

                    <p className="text-slate-400 mt-4">

                        Try changing your search or filter.

                    </p>

                </div>

            </section>

        );

    }

    return (

        <section className="my-12">

            <h2 className="text-3xl font-bold text-white mb-8">

                Recent Transactions

            </h2>

            <div className="space-y-5">

                {filteredTransactions.map((transaction) => (

                    <TransactionCard

                        key={transaction.id}

                        transaction={transaction}

                    />

                ))}

            </div>

        </section>

    );

}

export default TransactionList;