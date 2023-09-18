import { useDispatch, useSelector } from "react-redux";
import { changeForm } from "../store/actions/form.actions";

const Form = () => {
    const storeEmail = useSelector((state) => state.formReducer.email);
    const storePassword = useSelector((state) => state.formReducer.password);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeForm(e))
    }

    return (
        <form>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                name="email"
                value={storeEmail}
                onChange={handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                value={storePassword}
                onChange={handleChange}
            />
        </form>
    )
}

export default Form;