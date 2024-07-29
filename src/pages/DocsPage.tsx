export default function DocsPage() {
    return <div className="">
        <h1>How to Use?</h1>
        <div className="text-sm my-2">"This Component is designed for persian date."</div>
        <ul className="px-6 list-disc">
            <li>Title: the component gets a title property which is optional, it stands as the input label.</li>
            <li>onDate: The required prop. It's an event that contains a date parameter (which is of type "string") and gave you the entered date once you completed the input fields.</li>
            <span className="text-xs text-[#c43e3e]">* You will get the input value in gregorian date format. If you need it to be in persian, then go to the component and pass "date" variable instead of "gregorianDate" to the onDate event.</span>
            <li>It has optional Classname property as well.</li>
        </ul>
    </div>
}