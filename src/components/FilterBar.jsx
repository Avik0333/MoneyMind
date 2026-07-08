function FilterBar({ filter, setFilter }) {

    const filters = [

        "All",

        "Income",

        "Expense",

    ];

    return (

        <div className="flex flex-wrap justify-center gap-4 my-8">

            {filters.map((item) => (

                <button

                    key={item}

                    onClick={() => setFilter(item)}

                    className={`
                        px-5
                        py-3
                        rounded-full
                        font-medium
                        transition-all
                        duration-300

                        ${
                            filter === item

                            ?

                            "bg-emerald-500 text-white"

                            :

                            "bg-[#11212D] border border-[#253745] text-slate-300 hover:border-emerald-500"
                        }
                    `}

                >

                    {item}

                </button>

            ))}

        </div>

    );

}

export default FilterBar;