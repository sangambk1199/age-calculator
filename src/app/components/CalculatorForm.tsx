import FormField from "./FormField"

type CalculatorFormProps = {
    value?: number
}

function CalculatorForm({value}: CalculatorFormProps) {
    const formFields = [
        {
            label: "Day",
            name: "day",
            placeholder: 'DD'
        },
        {
            label: "Month",
            name: "month",
            placeholder: 'MM'
        },
        {
            label: "Year",
            name: "year",
            placeholder: 'YYYY'
        }
    ]

    return(
        <section className="flex gap-4">
            {formFields.map(field => <FormField key={field.name} label={field.label} name={field.name} value={ value } placeholder={ field.placeholder } />)}
        </section>
    )
}

export default CalculatorForm