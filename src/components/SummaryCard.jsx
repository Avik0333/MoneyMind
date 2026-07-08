import {
    FaWallet,
    FaArrowTrendUp,
    FaArrowTrendDown,
    FaPiggyBank,
} from "react-icons/fa6";

function SummaryCard({ title, value, color, subtitle }) {

    const config = {

        emerald: {
            icon: <FaWallet />,
            text: "text-emerald-400",
            border: "hover:border-emerald-500",
            glow: "hover:shadow-emerald-500/20",
            trend: "+12.4%",
        },

        green: {
            icon: <FaArrowTrendUp />,
            text: "text-green-400",
            border: "hover:border-green-500",
            glow: "hover:shadow-green-500/20",
            trend: "+8.2%",
        },

        red: {
            icon: <FaArrowTrendDown />,
            text: "text-red-400",
            border: "hover:border-red-500",
            glow: "hover:shadow-red-500/20",
            trend: "-3.6%",
        },

        cyan: {
            icon: <FaPiggyBank />,
            text: "text-cyan-400",
            border: "hover:border-cyan-500",
            glow: "hover:shadow-cyan-500/20",
            trend: "+15.1%",
        },

    };

    const item = config[color];

    return (

        <div
            className={`
                bg-[#11212D]
                border
                border-[#253745]
                rounded-3xl
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                ${item.border}
                ${item.glow}
            `}
        >

            <div className="flex justify-between items-center">

                <div
                    className={`
                        text-3xl
                        ${item.text}
                    `}
                >

                    {item.icon}

                </div>

                <span
                    className="
                        text-xs
                        bg-[#253745]
                        px-3
                        py-1
                        rounded-full
                        text-slate-300
                    "
                >

                    {subtitle}

                </span>

            </div>

            <p className="text-slate-400 mt-6">

                {title}

            </p>

            <h2
                className={`
                    text-4xl
                    font-bold
                    mt-3
                    ${item.text}
                `}
            >

                {value}

            </h2>

        </div>

    );

}

export default SummaryCard;