import { useSelector } from "react-redux";

const Display = () => {
    const storeEmail = useSelector((state) => state.formReducer.email);
    const storePassword = useSelector((state) => state.formReducer.password);
    return (
        <>
            <p>Email: {storeEmail}</p>
            <p>Password: {storePassword}</p>
        </>
    )
}

export default Display;