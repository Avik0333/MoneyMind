import { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

function TransactionForm() {

    const { transactions, setTransactions } = useContext(FinanceContext);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("Food");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title || !amount) return;

        const newTransaction = {

            id: Date.now(),

            title,

            amount: Number(amount),

            type,

            category,

            date: new Date().toISOString().split("T")[0],

        };

        setTransactions([newTransaction, ...transactions]);

        setTitle("");
        setAmount("");
        setType("Expense");
        setCategory("Food");

    };

    return (

        <section className="my-16">

            <h2 className="text-3xl font-bold text-white mb-8">

                Add Transaction

            </h2>

            <form

                onSubmit={handleSubmit}

                className="
                    bg-[#11212D]
                    border
                    border-[#253745]
                    rounded-3xl
                    p-8
                    grid
                    md:grid-cols-2
                    gap-6
                "

            >

                <input

                    value={title}

                    onChange={(e)=>setTitle(e.target.value)}

                    placeholder="Transaction Title"

                    className="
                        bg-[#06141B]
                        rounded-xl
                        p-4
                        text-white
                        outline-none
                    "

                />

                <input

                    value={amount}

                    onChange={(e)=>setAmount(e.target.value)}

                    placeholder="Amount"

                    type="number"

                    className="
                        bg-[#06141B]
                        rounded-xl
                        p-4
                        text-white
                        outline-none
                    "

                />

                <select

                    value={type}

                    onChange={(e)=>setType(e.target.value)}

                    className="
                        bg-[#06141B]
                        rounded-xl
                        p-4
                        text-white
                    "

                >

                    <option>Income</option>

                    <option>Expense</option>

                </select>

                <select

                    value={category}

                    onChange={(e)=>setCategory(e.target.value)}

                    className="
                        bg-[#06141B]
                        rounded-xl
                        p-4
                        text-white
                    "

                >

                    <option>Food</option>

                    <option>Travel</option>

                    <option>Entertainment</option>

                    <option>Shopping</option>

                    <option>Salary</option>

                    <option>Work</option>

                    <option>Bills</option>

                    <option>Other</option>

                </select>

                <button

                    className="
                        md:col-span-2
                        bg-emerald-500
                        hover:bg-emerald-600
                        rounded-xl
                        py-4
                        font-semibold
                        transition-all
                        duration-300
                    "

                >

                    Add Transaction

                </button>

            </form>

        </section>

    );

}

export default TransactionForm;