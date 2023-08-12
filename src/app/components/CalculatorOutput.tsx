"use client"

/**
 * @param param0 
 * @returns 
 */

import { useFormData } from "../context/FormDataContext";

type OutputFieldProps = {
    dataType: string,
    value?: number
}

function OutputField({dataType, value}: OutputFieldProps) {
    return (
        <div className="text-6xl font-black italic">
            <span className="text-violet-500">{value ? value : '--'} </span> 
            <span>{dataType}</span>
        </div>
    )
}
function CalculatorOutput() {
    const { formData } = useFormData();  

    return (
        <>           
            {Object.entries(formData).map(( [key, value] ) => <OutputField key={key} dataType={key} value={value} />)}
        </>
    )
}

export default CalculatorOutput