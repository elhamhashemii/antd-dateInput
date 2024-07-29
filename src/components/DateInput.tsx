import { Form, Input } from "antd";
import { useEffect, useState } from "react";
import moment from "moment-jalaali"

type date = {
    day: number;
    month: number;
    year: number;
}

interface IProps {
    onDate: (date: string) => void;
    title?: string;
    className?: string;
    separatorColor?: string;
}


export default function DateInput(props: IProps) {
    const { onDate, title, className, separatorColor = "#111" } = props;
    const [day, setDay] = useState<number>()
    const [month, setMonth] = useState<number>()
    const [form] = Form.useForm()

    let now = new Date().toLocaleDateString('fa-IR-u-nu-latn');
    const currentYear = new Date(now).getFullYear()


    function changeYearHandler(e: any) {
        const value = Number(e.target.value)
        if (value > currentYear || value < 1320) {
            return
        }
    }

    function changeMonthHandler(e: any) {
        const value = Number(e.target.value)
        if (value > 12 || value < 0) {
        } else setMonth(value)
    }

    function changeDayHandler(e: any) {
        const value = Number(e.target.value)
        if (month > 6 && value > 30) {
            form.setFieldValue("day", undefined)
        } else setDay(value)
    }

    function handleDate(_: unknown, allValues: date) {
        const isNotEmpty = Object.values(allValues).every(value => !!value);
        if (isNotEmpty) {
            // Persian Format
            const date = `${allValues.year}-${allValues.month}-${allValues.day}`
            // Gregorian Format
            const gregorianDate = moment(date, "jYYYY-jMM-jDD").format("YYYY-MM-DD")
            onDate(gregorianDate)
        } else {
            onDate(undefined)
        }

    }

    useEffect(() => {
        if (day > 30 && month > 6) {
            form.setFieldValue("month", undefined)
        }
    }, [day])

    useEffect(() => {
        if (month > 6 && day > 30) {
            form.setFieldValue("day", undefined)
        }
    }, [month])


    return <>
        {title && <div className="m-1 py-1">{title}</div>}
        <Form onValuesChange={handleDate} form={form} className={`flex items-center justify-center bg-[#f2f2f2] rounded-md ${className}`}>
            <Form.Item className="!mb-0" name="day" rules={[{ required: true, message: "" }, { pattern: /^(0?[1-9]|[12][0-9]|3[01])$/, message: "" }]}>
                <Input variant="borderless" placeholder="DD" maxLength={2} onChange={changeDayHandler} className="min-w-12 text-center" />
            </Form.Item>
            <span style={{ color: separatorColor }}>-</span>
            <Form.Item className="!mb-0" name="month" rules={[{ required: true, message: "" }, { pattern: /^(0?[1-9]|1[0-2])$/, message: "" }]}>
                <Input variant="borderless" placeholder="MM" maxLength={2} onChange={changeMonthHandler} className="min-w-12 text-center" />
            </Form.Item>
            <span style={{ color: separatorColor }}>-</span>
            <Form.Item className="!mb-0" name="year" rules={[{ required: true, message: "" }, { pattern: /^(1[3-4][2-9][0-9]|14[0-9][0-9]|149[0-9])$/, message: "" }]}>
                <Input variant="borderless" placeholder="YYYY" maxLength={4} onChange={changeYearHandler} className="min-w-16 text-center" />
            </Form.Item>
        </Form>
    </>
}