type FormFieldProps = {
    label: string,
    name: string,
    value?: number,
    placeholder: string
}

function FormField({label, name, value, placeholder}: FormFieldProps) {
    return (
        <div className="form-group flex flex-col gap-2">
            <label htmlFor={name} className="uppercase tracking-widest font-bold text-xs text-slate-500">{label}</label>
            <input type="text" name={name} id={name} placeholder={placeholder} value={value} className="w-28 border border-slate-300 rounded-md px-3 py-2 placeholder:font-black" />
        </div>
    )
}

export default FormField