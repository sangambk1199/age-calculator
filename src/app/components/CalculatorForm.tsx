import FormField from "./FormField"

type CalculatorFormProps = {
    value?: number
}

function CalculatorForm({value}: CalculatorFormProps) {
    const formFields = [
        {
            label: "Day",
            dateType: "day",
            placeholder: 'DD'
        },
        {
            label: "Month",
            dateType: "month",
            placeholder: 'MM'
        },
        {
            label: "Year",
            dateType: "year",
            placeholder: 'YYYY'
        }
    ]

    return(
        <section className="flex gap-4">
            {formFields.map(field => <FormField key={field.dateType} {...field} value={ value } />)}
        </section>
    )
}

export default CalculatorForm