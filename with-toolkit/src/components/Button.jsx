const Button = ({ children, handleFunction }) => {

    return (
        <button onClick={handleFunction}>{children}</button>
    );
}

export default Button;