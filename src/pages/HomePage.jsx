import "../style/HomePage.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
	return (
        <>
        <div className="home-wrapper">
            <Link to="/">
                <img className="logo" src="title-logo.png" alt="logo"/>
            </Link>
            <div className="firts-page">
                <div className="title-img">
                    <img className="fir"src="ellipse.png" alt="pic"/>
                </div>
                <div className="title-wrapper">
                    <div className="title">YOU QUIZ</div>
                    <p>청소년들의 디지털 문해력 부족을 해결하기 위한 교육 서비스</p>
                    <Link to ='/login'><button>로그인</button></Link>
                </div>

            </div>
            <div className="home-first">
                <div className="image">
                    <img className="image-first" src="homefirst.png" alt="first"/>
                </div>
                <div className="text">
                    <div className="head">Develop to think for yourself, Increase digital literacy</div>
                    <h1>나의 학습</h1>
                    <p className="line">스스로 생각하는 능력을 길러 디지털 문해력을 향상시키는 것이<br/>유퀴즈의 목표!</p>
                    <p>주차 별 학습 목록을 확인하고 채점 결과를 볼 수 있어요.<br/>교육자의 코멘트를 확인해 보세요.</p>
                    <Link to={ `/login`}><button>학습하러 가기<img src="right-fill.png" alt=""/></button></Link>
                </div>
            </div>

            <div className="home-second">
                <div className="text">
                    <div className="head">Join your school, class, level, list, and advice</div>
                    <h1>학급 목록</h1>
                    <p className="line">학교별 학급 목록을 정확하고 알기 쉽게 검색하고,<br/>학급 코드를 인증하여 올바른 학급에 가입합니다.</p>
                    <p>교육자는 학생들의 진행 상황을 <br />한눈에 볼 수 있습니다. <br/> 각 학생들의 의견에 코멘트를 달아주세요.</p>
                    <button><Link to="/register">가입하기<img src="right-fill.png" alt=""/></Link></button>
                </div>
                <div className="image">
                    <img className="image-second" src="homesecond.png" alt="second"/>
                </div>
            </div>

            <div className="home-third">
                <div className="image">
                    <img className="image-third" src="homethird.png" alt="third"/>
                </div>
                <div className="text">
                    <div className="head">Watch, think, quiz, and write your reply</div>
                    <h1>유 퀴즈!</h1>
                    <p className="line">뉴스, 예능, 다큐 등의 분야로<br/>부담없이 놀면서 공부하기</p>
                    <p className="line">유튜브 영상으로 재미있게 시청 후, 유퀴즈에서<br/>선별한 댓글과 관련된 퀴즈를 풀어보세요.</p>
                    <p>자신만의 생각이 담긴 글을 쓰고<br/> 퀴즈 점수와 교육자의 채점 코멘트를 확인할 수 있어요.</p>
                </div>
            </div>
            <footer>
                <img src="footerlogo.png" alt="logo"/>
            </footer>
        </div>
        </>
    );
}

export default HomePage;