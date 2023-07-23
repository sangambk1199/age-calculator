function CalculatorOutput() {
    return (
        <>
            {['years', 'months', 'days'].map(dataType => <OutputField key={dataType} dataType={dataType} />)}
        </>
    )
}

/**
 * @param param0 
 * @returns 
 */

type OutputFieldProps = {
    dataType: string,
    value?: number
}

function OutputField({dataType, value}: OutputFieldProps) {
    return (
        <div className="text-6xl font-black italic">
            <span className="text-violet-500">-- </span> 
            <span>{dataType}</span>
        </div>
    )
}

export default CalculatorOutput