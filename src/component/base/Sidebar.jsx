import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../../style/Sidebar.scss"

export default function SideBar() {
    const location = useLocation();

    // 현재 경로를 가져와서 로그인 페이지에 있는지 확인
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";
    const isQuizPage = location.pathname === "/quiz";

    return (
        <>
            <nav className='nav-wrapper'>
                <ul className="nav-container">
                    <li className="Ylogo">
                        <Link to='/'>
                        <img className="sidelogo"  src="title-logo.png" alt="logo"/>
                        </Link>
                    </li>
                    <li className={`nav-item ${isLoginPage ? "current-page" : ""}`}>
                        <Link to="/login"><img className="icon" src={ isLoginPage ? "user.png" : "user-wh.png" } alt="" />로그인</Link>
                    </li>
                    <li className={`nav-item ${isRegisterPage ? "current-page" : ""}`}>
                        <Link to="/register"><img className="icon" src= { isRegisterPage ? "circle.png" : "circle-wh.png" } alt="" />회원가입</Link>
                    </li>
                    <li className={`nav-item ${isQuizPage ? "current-page" : ""}`}>
                            <Link to="/quiz"><img className="icon" src={isQuizPage ? "book.png" : "book-wh.png"} alt="" s />학습</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="#"><img className="icon" src="help-wh.png" alt="" />이용안내</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}