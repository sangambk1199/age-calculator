"use client"

import { useState } from "react"
import { useFormData } from "../context/FormDataContext"

type FormFieldProps = {
    label: string,
    dateType: string,
    value?: number,
    placeholder: string
}

function FormField({label, dateType, value, placeholder}: FormFieldProps) {
    const { formData, setFormData } = useFormData();

    const [hasError, setHasError] = useState(false)

    const isValidDate = ( value: number, dateType: string ) => {
        if( dateType === 'month' && value > 12 ) {
            return false
        } else if( dateType === 'day' && value > 31 ) {
            return false
        } else if( dateType === 'year' ) {
            let currentYear = new Date().getFullYear();

            console.log(value, currentYear - 99);

            if( value < ( currentYear - 99 ) || value > currentYear ) {
                return false
            }
        }

        setFormData({
            ...formData,
            [dateType]: value,
        })

        return true
    }

    const handleInput = ( value: string ) => {
        if( ! value || isNaN(+value) ) {
            setHasError(true)
            return
        }

        if( ! isValidDate( +value, dateType ) ) {
            setHasError(true)
        } else {
            setHasError(false)
        }
    }

    return (
        <div className="form-group flex flex-col gap-2">
            <label htmlFor={dateType} className={`uppercase tracking-widest font-bold text-xs text-slate-500 ${hasError ? 'text-red-600' : ''}`}>
                {label}
            </label>            
            <input 
                type="text" 
                name={dateType} 
                id={dateType} 
                placeholder={placeholder} 
                value={value} 
                className={`w-28 border ${hasError ? 'border-red-600' : 'border-slate-300'} rounded-md px-3 py-2 placeholder:font-black`}
                onChange={e => handleInput( e.target.value )}
            />
            <span className={`text-xs text-red-600 ${!hasError ? 'hidden' : ''}`}>
                Must be a valid {dateType}
            </span>
        </div>
    )
}

export default FormField