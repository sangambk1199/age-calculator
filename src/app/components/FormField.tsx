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
    const { formData, setFormData } = useFormData()

    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const isValidDate = ( value: number, dateType: string ) => {
        if( dateType === 'months' && value > 12 ) {
            return false
        } else if( dateType === 'days' && value > 31 ) {
            return false
        } else if( dateType === 'years' ) {
            let currentYear = new Date().getFullYear();

            if( value < ( currentYear - 99 ) || value > currentYear ) {
                return false
            }
        }

        return true
    }

    const handleInput = ( value: string ) => {
        let error = false;

        if( ! value || isNaN(+value) ) {
            error = true
            setErrorMessage(`This field in required`)
        }

        if( ! isValidDate( +value, dateType ) ) {
            error = true
            setErrorMessage(`Must be a valid ${dateType}`)
        }

        if( error ) {            
            setFormData({
                ...formData,
                [dateType]: undefined,
            })
        } else {
            setFormData({
                ...formData,
                [dateType]: value,
            })
        }

        setHasError(error)
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
                {errorMessage}
            </span>
        </div>
    )
}

export default FormField