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
    console.log(value, !isNaN( value ));
    return (
        <div className="text-6xl font-black italic">
            <span className="text-violet-500">{ isNaN( value ) ? '--' : value } </span> 
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
        age = calculateAgeFromObject(formData);
    }

    return (
        <>     
            {Object.entries(age).map(( [key, value] ) => <OutputField key={key} dataType={key} value={value} />)}
        </>
    )
}

export default CalculatorOutput