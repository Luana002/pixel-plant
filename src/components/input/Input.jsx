function Input({ type, placeholder, id, name }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
        />
    );
}

export default Input;