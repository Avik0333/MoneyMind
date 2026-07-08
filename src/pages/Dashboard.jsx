import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseChart from "../components/ExpenseChart";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { FinanceContext } from "../context/FinanceContext";

function Dashboard() {

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");

    const { transactions } = useContext(FinanceContext);

    return (

        <div className="min-h-screen bg-[#06141B]">

            <Navbar />

            <div className="max-w-7xl mx-auto px-8">

                <SummaryCards />

                <section
                    className="
                        grid
                        lg:grid-cols-3
                        gap-8
                        my-14
                    "
                >

                    <div className="lg:col-span-2">

                        <ExpenseChart />

                    </div>

                    <div className="space-y-8">

                        <TransactionForm />

                        <SearchBar

                            search={search}

                            setSearch={setSearch}

                        />

                        <FilterBar

                            filter={filter}

                            setFilter={setFilter}

                        />

                        <div
                            className="
                                bg-[#11212D]
                                border
                                border-[#253745]
                                rounded-3xl
                                p-6
                            "
                        >

                            <h2 className="text-2xl font-bold text-white mb-5">

                                Quick Stats

                            </h2>

                            <div className="space-y-4 text-slate-300">

                                <p>

                                    📋 Total Transactions:
                                    <span className="text-white font-semibold ml-2">

                                        {transactions.length}

                                    </span>

                                </p>

                                <p>

                                    💰 Income Entries:
                                    <span className="text-emerald-400 font-semibold ml-2">

                                        {
                                            transactions.filter(
                                                t => t.type === "Income"
                                            ).length
                                        }

                                    </span>

                                </p>

                                <p>

                                    💸 Expense Entries:
                                    <span className="text-red-400 font-semibold ml-2">

                                        {
                                            transactions.filter(
                                                t => t.type === "Expense"
                                            ).length
                                        }

                                    </span>

                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                <TransactionList

                    search={search}

                    filter={filter}

                />

            </div>

            <Footer />

        </div>

    );

}

export default Dashboard;