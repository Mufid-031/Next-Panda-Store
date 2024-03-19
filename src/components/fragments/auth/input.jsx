const Input = (Props) => {

    const {  type, name, placeholder, id, valueInput, setInputValue } = Props

    return (
        <input className="p-2 rounded-md mb-3" type={type} placeholder={placeholder} name={name} id={id} value={valueInput} onChange={(e) => setInputValue(e.target.value)} />
    )
}

export default Input