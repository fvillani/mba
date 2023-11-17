import "./Select.css";

const Select = ({ name = "", placeholder = "", options = [{ value: "opcao_1", name: "Opção 1" }], handleChange = null }) => {
    const change = (e) => {
        if (handleChange) {
            handleChange(e.target.value);
        }
    };

    return (
        <select className="select" name={name} onChange={change}>
            {placeholder && <option value={""}>{placeholder}</option>}

            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Select;
