"use client";
import Search from "@/components/search/searchEngine";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const SearchResults = [
    { id: 1, title: "Glennn si sepuh", description: "Description" },
    { id: 2, title: "Jojo si kampret", description: "Description" },
    { id: 3, title: "Jimmy si eek", description: "Description" },
    { id: 4, title: "Kepin si cina", description: "Description" },
    { id: 5, title: "Mike cakep", description: "Description" },
];

export default function SearchResult() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const router = useRouter();

    if (query) {
        return (
            <div className="px-8 py-10">
                <div className="flex items-center justify-start gap-3 mb-4 ml-4">
                    <Link className="cursor-pointer" href="/">
                        <Image
                            src="/images/search-logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <Search />
                </div>
                <span className="">
                    Search Results <span className="italic">{query}</span>
                </span>
                <div className="mt-7 flex flex-col gap-4">
                    {SearchResults.map((result) => (
                        <div className="w-fit flex flex-col" key={result.id}>
                            <Link
                                href={`/result/${result.id}`}
                                className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline "
                            >
                                {result.title}
                            </Link>
                            <span className="text-gray-600">
                                {result.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return router.push("/");
    }
}
