const Input = (Props) => {

    const {  type, name, placeholder, id } = Props

    return (
        <input className="p-2 rounded-md mb-3" type={type} placeholder={placeholder} name={name} id={id} />
    )
}

export default Input