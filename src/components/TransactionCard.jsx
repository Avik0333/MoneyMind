import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { FaTrash } from "react-icons/fa";

function TransactionCard({ transaction }) {

    const income = transaction.type === "Income";
    const { transactions, setTransactions } = useContext(FinanceContext);

    return (

        <div
            className="
                bg-[#11212D]
                border
                border-[#253745]
                rounded-3xl
                p-6
                flex
                justify-between
                items-center
                transition-all
                duration-300
                hover:border-emerald-500
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-emerald-500/10
                "
        >

            <div>

                <h2 className="text-white font-semibold">

                    {transaction.title}

                </h2>

                <p className="text-slate-400">

                    {transaction.category}

                </p>

            </div>

            <div className="flex items-center gap-5">
                <h2
                    className={`text-xl font-bold ${
                        income
                            ? "text-emerald-400"
                            : "text-red-400"
                    }`}
                >
                    {income ? "+" : "-"}
                    ₹{transaction.amount}
                </h2>
                <button
                    onClick={() =>
                        setTransactions(
                            transactions.filter(
                                (t) =>
                                    t.id !== transaction.id
                            )
                        )
                    }
                    className="
                        text-red-400
                        hover:text-red-500
                        transition
                    "
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}
export default TransactionCard;