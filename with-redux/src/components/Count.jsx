import { useSelector } from "react-redux";

const Count = () => {
    const storeCount = useSelector((state) => state.countReducer.count);

    return (
        <h2>{storeCount}</h2>
    )
}

export default Count;