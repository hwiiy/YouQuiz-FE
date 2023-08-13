import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import MyPageForm from "../../containers/MyPageForm";


const ListBlock = styled.div`
  height: 100%;
`;

const sample = {
  score: "111",
  chap_id: "10",
  youtube_url: "https://youtu.be/YhY5PojUD_M",
};



export default function QuizPage() {
  const [lists, setLists] = useState(null);


{/* 실제코드
  return (
    <>
      <MyPageForm  userType={"teacher"} teacher_id={"teacher_id"} page={"학습 관리"} />
        <ListBlock>

        </ListBlock>
    </>
  );
          */}

  return (
    <>
      <MyPageForm  userType={"teacher"} teacher_id={"20"} page={"학습 관리"} />
        <ListBlock>
            {/*학생들목록이랑 이수여부 보는 표 */}
        </ListBlock>
    </>
  );
}
