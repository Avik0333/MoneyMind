function SearchBar({ search, setSearch }) {

    return (

        <div className="my-10">

            <input

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                placeholder="Search transactions..."

                className="
                    w-full
                    bg-[#11212D]
                    border
                    border-[#253745]
                    rounded-2xl
                    p-4
                    text-white
                    outline-none
                    focus:border-emerald-500
                    transition-all
                "

            />

        </div>

    );

}

export default SearchBar;