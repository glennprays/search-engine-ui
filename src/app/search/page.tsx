"use client";
import Search from "@/components/search/searchEngine";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";


type FileResult = {
    filename: String;
    consine_similarity: number;
    url: String;
    snippet: String;
};

type QueryResult = {
    documents: FileResult[];
    query: String;
};

export default function SearchResult() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const router = useRouter();

    const [data, setData] = useState<QueryResult | undefined>();

    async function querySearch() {
        const res = await fetch(`/api/search?q=${query?.replace(/ /g, "+")}`);
        const data: QueryResult = await res.json();
        setData(data);
    }

    useEffect(() => {
        querySearch();
    }, [query]);

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
                {data ? (
                    <div className="mt-7 flex flex-col gap-4 max-w-[600px]">
                        {data.documents.map((file, index) => (
                            <div
                                className="w-fit flex flex-col"
                                key={"result-file" + index}
                            >
                                <Link
                                    href={file.url.toString()}
                                    className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline "
                                >
                                    {file.filename}
                                </Link>
                                <div className="flex flex-col text-gray-600">
                                    <span className="">
                                        {file.snippet}
                                    </span>
                                    <span className="font-semibold text-sm">Cosine Similarity: <span className="italic">{file.consine_similarity}</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    "Loading..."
                )}
            </div>
        );
    } else {
        return router.push("/");
    }
}
