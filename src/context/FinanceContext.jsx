import { createContext, useEffect, useState } from "react";
import transactionsData from "../services/transactions";

export const FinanceContext = createContext();

function FinanceProvider({ children }) {

    const [transactions, setTransactions] = useState(() => {

        const saved = localStorage.getItem("transactions");

        return saved
            ? JSON.parse(saved)
            : transactionsData;

    });

    useEffect(() => {

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );

    }, [transactions]);

    return (

        <FinanceContext.Provider
            value={{
                transactions,
                setTransactions,
            }}
        >

            {children}

        </FinanceContext.Provider>

    );

}

export default FinanceProvider;