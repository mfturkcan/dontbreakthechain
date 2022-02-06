import { useState, useEffect } from "react";

interface Month {
    isEnabled: boolean,
    number: number
}

const ViewChain = (props: any) => {

    const [sampleMonth, setSampleMonth] = useState([] as Month[]);


    useEffect(() => {
        let month = [] as Month[];

        for (let i = 1; i <= 35; i++) {
            month.push({
                isEnabled: false,
                number: i
            });
        }

        setSampleMonth(month);
    }, [])


    function handleEnable(number: number) {
        let theMonth: Month = sampleMonth.find(m => m.number === number) as Month;

        theMonth.isEnabled = !theMonth.isEnabled;

        setSampleMonth(prevState => {
            prevState = [...prevState, theMonth];
            return prevState.filter((m, index) => prevState.indexOf(m) === index);
        });
    }

    return (
        <>
            <h1 className="month-title">
                Month 2022
            </h1>
            <div className="months">
                {
                    sampleMonth.map(m => {
                        return <div className={m.isEnabled ? "month enabled" : "month"} onClick={e => handleEnable(m.number)}>
                            {m.number}
                        </div>
                    })
                }
            </div>
        </>
    );
}

export default ViewChain;

