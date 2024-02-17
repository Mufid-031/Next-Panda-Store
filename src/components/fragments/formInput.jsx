import Input from "../elements/forminput/input"
import Label from "../elements/forminput/label"

const FormInput = (Props) => {

    const {  type, name, placeholder, id, htmlFor, value } = Props

    return (
        <>
            <Label htmlFor={htmlFor} value={value} />
            <Input type={type} name={name} placeholder={placeholder} id={id} />
        </>
    )
}

export default FormInput