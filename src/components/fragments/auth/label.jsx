const Label = (Props) => {

    const { htmlFor, value } = Props

    return (
        <label className="text-2xl text-slate-100 mb-3" htmlFor={htmlFor}>{value}</label>
    )
}

export default Label