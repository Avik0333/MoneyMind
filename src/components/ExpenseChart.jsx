import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function ExpenseChart() {

    const { transactions } = useContext(FinanceContext);

    const income = transactions
        .filter((t) => t.type === "Income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
        .filter((t) => t.type === "Expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const data = [

        {
            name: "Income",
            value: income,
        },

        {
            name: "Expenses",
            value: expenses,
        },

    ];

    const COLORS = [

        "#4ADE80",

        "#EF4444",

    ];

    return (

        <section className="my-16">

            <h2 className="text-3xl font-bold text-white mb-8">

                Financial Overview

            </h2>

            <div
                className="
                    bg-[#11212D]
                    border
                    border-[#253745]
                    rounded-3xl
                    p-8
                    h-[450px]
                "
            >

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie

                            data={data}

                            dataKey="value"

                            outerRadius={135}
                            innerRadius={70}
                            paddingAngle={6}

                            label

                        >

                            {data.map((entry, index) => (

                                <Cell

                                    key={index}

                                    fill={COLORS[index]}

                                />

                            ))}

                        </Pie>

                        <Tooltip

                            contentStyle={{

                                background:"#11212D",

                                border:"1px solid #253745",

                                borderRadius:"16px",

                                color:"#fff",

                            }}

                        />

                        <Legend

                            wrapperStyle={{

                                color:"white",

                                paddingTop:20,

                            }}

                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

}

export default ExpenseChart;