"use client";
import { useState, KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function searchEngine() {
    const [query, setQuery] = useState<
        string | number | readonly string[] | undefined
    >();

    const router = useRouter();

    function searchQuery() {
        if (query) {
            const target = "/search?q=" + query.toString().replace(/ /g, "+");
            router.push(target)
        }
    }

    function searchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            searchQuery();
        }
    }
    return (
        <div className="flex items-center gap-3">
            <input
                type="search"
                className="m-0 rounded-full border border-solid border-neutral-600 bg-transparent bg-clip-padding px-10 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none max-sm:w-[200px]"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={searchKeyDown}
            />
            <span className="text-[23px]" onClick={searchQuery}>
                <FaSearch />
            </span>
        </div>
    );
}
