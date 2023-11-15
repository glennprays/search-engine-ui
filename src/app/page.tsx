"use client";
import Image from "next/image";
import Search from "@/components/search/searchEngine";

export default function Home() {
    return (
        <div className="flex flex-col items-center pt-10 h-screen bg-gradient-to-r from-blue-800 to-green-500 gap-7">
            <Image
                src="/images/search-logo.png"
                alt="Search Logo"
                width={150}
                height={150}
            />
            <div className="bg-white rounded-lg py-7 px-8 shadow-md xl:w-100 border-5 border-blue-700 flex flex-col items-center">
                <span className="text-3xl font-bold mb-4 text-center text-gray-800">
                    Cari Aja Kuy
                </span>
                <Search />
            </div>
        </div>
    );
}
