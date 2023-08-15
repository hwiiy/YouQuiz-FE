import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Sidebar from "./component/base/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import MyPage from "./pages/MyPage";
import QuizPage from "./pages/Quiz/Common/QuizPage";
import Header from "./component/base/Header";
import QuizMedia from "./pages/Quiz/Common/QuizMedia";
import AnswerQuestion from "./pages/Quiz/Student/Question/AnswerQuestion";
import QuizComplate from "./pages/Quiz/Common/QuizComplete";
import FirstQuestion from "./pages/Quiz/Student/Question/FirstQuestion";
import AnswerResult from "./pages/Quiz/Student/Result/AnswerResult";
import AnswerTeacher from "./pages/Quiz/Teacher/AnswerTeacher";
import StudyResult from  "./pages/My/StudyResult";
import StudentStudyRoute from "./Router/StudentRoute";
import TeacherStudyRoute from "./Router/TeacherRoute";
import StudyData from "./pages/My/StudyData";
import EvaluationData from "./pages/My/EvaluationData";

function NotFoundPage() {
  return <div>Page not found.</div>;
}


const App = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // 홈 화면 경로일 때 사이드바와 헤더 숨기기
  const hideSidebarAndHeader = pathname === "/";

  const getPageTitle = () => {
    switch (pathname) {
      case "/login/*":
        return "Login";
      case "/my"://test용
      case "/studyresult"://test용
      case "/student/:student_id":
      case "/student/:student_id/:chap_id/*":
      case "/teacher/:teacher_id/studystatus":
      case "/teacher/:teacher_id/evaluationstatus":
        return "My page";
      case "/register/*":
        return "Sign up";
      case "/quiz"://test
      case "/quizmedia"://test
      case "/firstq"://test
      case "/answerq"://test
      case "/quizcomplate"://test
      case "/answerResult"://test
      case "/answerTeacher"://test
      case "/student/:student_id/study/*":
      case "/teacher/:teacher_id/study/*":
        return "Quiz";
      default:
        return "";
    }
  };
  



  
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
          <Route path="student" element={<LoginPage />} />
          <Route path="teacher" element={<LoginPage />} />
        </Route>
        <Route path="/student/:student_id/*" element={<StudentStudyRoute />} />
        <Route path="/teacher/:teacher_id/*" element={<TeacherStudyRoute />} />
        <Route path="/*" element={<NotFoundPage />} />
        

        {/*Test용 라우터*/ }
        <Route path="/my" element={<MyPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizmedia" element={<QuizMedia />} />
        <Route path="/firstq" element={<FirstQuestion />} />
        <Route path="/answerq" element={<AnswerQuestion />} />
        <Route path="/quizcomplate" element={<QuizComplate />} />
        <Route path="/answerresult" element={<AnswerResult />} />

        <Route path="/answerteacher" element={<AnswerTeacher />} />
        <Route path="/studyresult" element={<StudyResult/>} />
        <Route path="/evaluationstatus" element={<EvaluationData />} />
        <Route path="/studystatus" element={<StudyData />} />
        </Routes>
    </>
  );
};

export default App;