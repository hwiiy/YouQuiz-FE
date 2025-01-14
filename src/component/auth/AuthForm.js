import "../../style/AuthForm.scss"
import { Link } from "react-router-dom";
import { useState } from "react";


const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const [btnActive, setBtnActive] = useState('student');

    return (
        <>
            <div className="auth-wrapper">
                <div className="welcome">
                    <h3>You Quiz</h3><span>방문을 환영합니다.</span>
                </div>
                <div className="usertype">
                    <button className={`student ${btnActive === "student" ? "active" : ""}`} onClick={()=>setBtnActive("student")}>학생</button>
                    <button className={`teacher ${btnActive === "teacher" ? "active" : ""}`} onClick={()=>setBtnActive("teacher")}>교직원</button>
                </div>
                <div className="idpw" onSubmit={onSubmit}>
                    <input className="input" autoComplete="userid" name="userid" placeholder="아이디" onChange={onChange} value={form.userid} />
                    <input className="input" autoComplete="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password} />
                </div>
                <label className="store">
                    <input type="checkbox" id="store"/>
                    <label htmlFor="store"></label>
                    아이디 저장
                </label>
                    {error && <div className="error-message">{error}</div>}
                    <button className="login">로그인</button>

                <ul className="bottom">
                        <li>
                            <Link to ="#">아이디 찾기</Link>
                        </li>
                        <li>
                            <Link to ="#">비밀번호 찾기</Link>
                        </li>
                        <li className="last">
                            <Link to ="/register">회원가입</Link>
                        </li>
                </ul>
            </div>
        </>
    );
};

export default AuthForm;