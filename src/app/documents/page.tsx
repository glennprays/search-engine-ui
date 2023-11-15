import { useState } from "react"

export default function Documents() {
    const [document, setDocument] = useState<String | undefined>()
    return <div className="w=full min-h-screen flex justify-center">
        <div className="border-2 border-black p-5 w-full max-w-[600px] font-mono max-h-[95vh] overflow-y-auto">
            data
        </div>
    </div>
}