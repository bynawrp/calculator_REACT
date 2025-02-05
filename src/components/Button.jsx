function Button({ label, func }) {
    return (
        <button onClick={() => func(label)}>
            {label}
        </button>
    )
}

export default Button
