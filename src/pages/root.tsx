import { useState } from "react";
import DateInput from "../components/DateInput";

export default function AntdDateInput() {
    const [date, setDate] = useState<string>("")

    function handleDate(date: string) {
        console.log({ date })
        date && setDate(date)
    }

    return <div className="min-h-full flex flex-col items-start justify-center">
        <h1 className="self-center">AntdDateInput</h1>
        {/* <div className="my-4">"This Component is designed for Persian Date"</div> */}
        <div className="w-full lg:w-4/12 xl:w-3/12">
            <DateInput className="bg " title="title" onDate={handleDate} />
        </div>
        <div className="my-4 text-sm">Input Date is: {date}</div>
    </div>
}