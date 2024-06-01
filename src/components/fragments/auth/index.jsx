import Input from "./input"
import Label from "./label"

const FormInput = (Props) => {

    const { type, placeholder, id, value, valueInput, setInputValue } = Props

    return (
        <>
            <Label htmlFor={id} value={value} />
            <Input type={type} name={id} placeholder={placeholder} id={id} value={valueInput} setInputValue={setInputValue} />
        </>
    )
}

export default FormInput