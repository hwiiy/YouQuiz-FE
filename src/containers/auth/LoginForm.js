import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import AuthForm from "../../component/auth/AuthForm";
import { check } from "../../modules/user";
import { useNavigate } from "react-router-dom";

const LoginForm = ({history}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {form, auth, authError, user} = useSelector(({auth,user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form:'login',
                key:name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefalut();
        const {userid,password} = form;
        dispatch(login({ userid,password }));
    }

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log("오류발생");
            console.log(authError);
            setError('로그인 실패');
            return;
        }
        if(auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    },[auth, authError, dispatch]);
    
    useEffect(() => {
        if(user) {
            navigate('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            }catch (e){
                console.log('localStorage is not working');
            }
        }
    }, [navigate, user]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default LoginForm;