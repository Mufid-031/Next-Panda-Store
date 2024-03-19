import Input from "./input"
import Label from "./label"

const FormInput = (Props) => {

    const { type, name, placeholder, id, htmlFor, value, valueInput, setInputValue } = Props

    return (
        <>
            <Label htmlFor={htmlFor} value={value} />
            <Input type={type} name={name} placeholder={placeholder} id={id} value={valueInput} setInputValue={setInputValue} />
        </>
    )
}

export default FormInput