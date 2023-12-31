import { FormDataProvider } from "../context/FormDataContext"
import CalculatorForm from "./CalculatorForm"
import CalculatorOutput from "./CalculatorOutput"
import SeparatorWithArrow from "./SeparatorWithArrow"


function AgeCalculator() {

  return (
    <FormDataProvider>
      <div className="bg-white w-[40rem] max-w-full mx-auto p-8 rounded-xl rounded-br-[6rem]">
        <CalculatorForm />
        <SeparatorWithArrow />
        <CalculatorOutput />
      </div>
    </FormDataProvider>
  )
}

export default AgeCalculator