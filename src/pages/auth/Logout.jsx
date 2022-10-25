import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { logout } from "../../store/cases/auth/slice";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        navigate('/login');
    }, [dispatch, navigate]);
    return null;
};

export default Logout;