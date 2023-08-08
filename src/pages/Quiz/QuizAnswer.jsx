import React, { useState } from "react";
import QuizTitle from "../../component/base/QuizTitle";
import "bootstrap/dist/css/bootstrap.css";
import "../../style/QuizAnswer.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShortAnswer = () => {
	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};
	return (
	<>
		<QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" />
		<div className="answer-container">
			<div className="question">
				<h1>Q4</h1>
				<Container className="problem-container">주관식 문제</Container>
			</div>
			<textarea className="form"
				value={text}
				onChange={handleChange}
				placeholder="자유롭게 의견을 써주세요."
				rows={8}/>
		</div>
		<div className="btn">
			<Link to="/">
				<img width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="circled-left-2"/>
				{/*<img width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-left-2.png" alt="circled-left-2"/>*/}
			</Link>
			<Link to="/quizcomplate">
				<button onClick={ () => console.log(text)}>제출</button>
			</Link>
		</div>
	</>
	)
}

export default ShortAnswer;
