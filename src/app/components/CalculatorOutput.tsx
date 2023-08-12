"use client"

/**
 * @param param0 
 * @returns 
 */

import { useFormData } from "../context/FormDataContext";
import calculateAgeFromObject from "../utils/ageCalculatorUtils";

type OutputFieldProps = {
    dataType: string,
    value: number | undefined
}

interface Age {
    days: number | undefined;
    months: number | undefined;
    years: number | undefined;
  }

function OutputField({dataType, value}: OutputFieldProps) {
    return (
        <div className="text-6xl font-black italic">
            <span className="text-violet-500">{ ( value === undefined || isNaN( value ) ) ? '--' : value } </span> 
            <span>{dataType}</span>
        </div>
    )
}
function CalculatorOutput() {
    const { formData } = useFormData(); 

    let age: Age = {
        days: undefined,
        months: undefined,
        years: undefined
    };

    if( formData.days && formData.months && formData.years ) {
        age = calculateAgeFromObject({
            days: formData.days,
            months: formData.months,
            years: formData.years
        });
    }

    return (
        <>     
            {Object.entries(age).map(( [key, value] ) => <OutputField key={key} dataType={key} value={value} />)}
        </>
    )
}

export default CalculatorOutput