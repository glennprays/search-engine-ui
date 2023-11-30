"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Document() {
    const [document, setDocument] = useState<String | undefined>();
    const [notFound, setNotFound] = useState<Boolean | undefined>();

    const router = useRouter();

    const searchParams = useSearchParams();
    const filename = searchParams.get("filename");

    async function getDocument() {
        if (filename) {
          try {
            const res = await fetch(`/api/documents/${encodeURIComponent(filename.toString())}`);
      
            if (!res.ok) {
              console.error(`Request failed with status: ${res.status}`);
              setNotFound(true);
              return;
            }
      
            const data = await res.json();
            setDocument(data);
            setNotFound(false);
          } catch (error) {
            console.error('Error fetching document:', error);
            setNotFound(true);
          }
        }
      }
      

    useEffect(() => {
        getDocument();
    }, []);

    if (filename) {
        return (
            <div className="w=full min-h-screen flex justify-center">
                <div className="border-2 border-black p-5 w-full max-w-[600px] font-mono max-h-[95vh] overflow-y-auto mt-7">
                    {document ? (
                        <span dangerouslySetInnerHTML={{__html: document}}/>
                    ) : (
                        !notFound && <span className="text-3xl font-bold">
                            Loading document...
                        </span>
                    )}
                    {notFound && (
                        <span className="text-3xl text-red-700 font-bold">
                            Document Not Found!
                        </span>
                    )}
                </div>
            </div>
        );
    } else {
        return router.push("/");
    }
}
