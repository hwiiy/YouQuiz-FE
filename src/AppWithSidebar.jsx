import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./component/base/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import MyPage from "./pages/MyPage";
import QuizPage from "./pages/Quiz/QuizPage";
import Header from "./component/base/Header";
import QuizMedia from "./pages/Quiz/QuizMedia";
import AnswerQuestion from "./pages/Quiz/Student/AnswerQuestion";
import QuizComplate from "./pages/Quiz/QuizComplete";
import FirstQuestion from "./pages/Quiz/FirstQuestion";
import AnswerResult from "./pages/Quiz/Student/AnswerResult";
import AnswerTeacher from "./pages/Quiz/Teacher/AnswerTeacher";
import StudyResult from  "./pages/My/StudyResult";
import QuizResult from  "./pages/My/StudyResult";
import StudentManage from "./pages/My/StudentManage";
import AnswerManage from "./pages/My/AnswerManage";
import QuestionPage from "./pages/Quiz/QuestionPage";

const AppWithSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // 홈 화면 경로일 때 사이드바와 헤더 숨기기
  const hideSidebarAndHeader = pathname === "/";

  const getPageTitle = () => {
    switch (pathname) {
      case "/login":
        return "Login";
      case "/my":
      case "/studyresult":
        return "Mypage";
      case "/register":
      case "/register/*":
        return "Sign up";
      case "/quiz":
      case "/quizmedia":
      case "/firstq":
      case "/answerq":
      case "/quizcomplate":
      case "/answerResult":
      case "/answerTeacher":
        return "Quiz";
      default:
        return "";
    }
  };
  
  function NotFoundPage() {
    return <div>Page not found.</div>;
  }

  return (
    <>
      {!hideSidebarAndHeader && (
        <>
          <Sidebar />
          <Header page={getPageTitle()} />
        </>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}>
          <Route path="/student" element={<LoginPage />} />
          <Route path="/teacher" element={<LoginPage />} />
        </Route>
        {/*Student*/ }
        <Route path="/student/:student_id" element={<StudyResult />}>{ /*마이페이지-학습결과*/ }
          <Route path="/:chap_id" element={<QuizResult />} /> { /*학습결과-결과보기 버튼*/ }
          <Route path="/study" element={<QuizPage />}> { /*학습*/ }
            <Route path="/:chap_id" element={<QuizMedia />} />{ /*학습-학습하기버튼*/ }
            <Route path="/:chap_id/:question_number" element={<QuestionPage />} />{ /*media, Q1,2,3,4, complete*/ }
          </Route>
        </Route>
        {/*Teacher*/ }
        <Route path="/teacher/:teacher_id/studystatus" element={<StudentManage />} />{ /*마이페이지-학습관리*/ }
        <Route path="/teacher/:teacher_id/evaluationstatus" element={<AnswerManage />} /> { /*마이페이지-채점관리*/ }
        <Route path="/teacher/:teacher_id/study" element={<QuizPage />}> { /*학습*/ }
            <Route path="/:chap_id" element={<QuizMedia />} />{ /*학습-학습하기버튼*/ }
            <Route path="/:chap_id/:question_number" element={<QuestionPage />} />{ /*media, Q1,2,3,4, complete*/ }
        </Route>
        <Route path="/*" element={<NotFoundPage />} />


        {/*Test용 라우터*/ }
        <Route path="/student" element={<MyPage />} />
        <Route path="/register/*" element={<RegisterPage />} />
        
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizmedia" element={<QuizMedia />} />
        <Route path="/firstq" element={<FirstQuestion />} />
        <Route path="/answerq" element={<AnswerQuestion />} />
        <Route path="/quizcomplate" element={<QuizComplate />} />
        <Route path="/answerresult" element={<AnswerResult />} />

        <Route path="/answerteacher" element={<AnswerTeacher />} />
        <Route path="/studyresult" element={<StudyResult/>} />
      </Routes>
    </>
  );
};

export default AppWithSidebar;
