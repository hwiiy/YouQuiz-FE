import EvaluationManage from "./EvaluationManage";
import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EvaluationData() {
  const navigate = useNavigate();
  const [lists, setLists ] = useState(null);
  const [title, settitle ] = useState(null);
    useEffect(() => {
      axios
      .all([axios.get(
            `http://101.101.219.109:8080/teacher/1/evaluationstatus`
          ), axios.get(`http://101.101.219.109:8080/teacher/1/studystatus`)])
          .then(
            axios.spread((res1, res2)  => {
              setLists(res1.data.evaluation_status);
              settitle(res2.data.student_list[0]);
              console.log(res2);
            })
           )
          .catch ((e) => console.log(e));
        }, []);

  const columns = useMemo(
    () => {
      if (!lists) return []; // lists가 null일 때 빈 배열 반환

      return [
        {
          accessor: "number",
          Header: "번호",
        },
        {
          accessor: "chap_id",
          Header: "단계"
          },
        {
          accessor: "title",
          Header: "학습내용",
        },
        {
          accessor: "status",
          Header: "채점완료/정원",
          Cell: ({ value }) => (
            <span>
                <span style={{ color: value.split("/")[0] === value.split("/")[1] ? "green" : "red" }}>
                    {value.split("/")[0]}
                </span>
                /{value.split("/")[1]}
            </span>
        ),
        },
        {
          accessor: "btn",
          Header: "--------",
        }
      ];
    }, [lists]);

  const data = useMemo(
    () => {
      if (!lists) return []; // lists가 null일 때 빈 배열 반환

      return  lists.map((list, index) => {
              const EvaluationData = {
                  number: index + 1,
                  chap_id: list.chap_id+"단계",
                  title: list.title,
                  status: list.complete_student + "/" + list.total_student, 
                  btn:<button 
                        onClick={() => {
                          navigate(`/study/quizmedia`);
                          }
                        }
                        style={{ background: "none", padding: 0, cursor: "pointer",color: "black" }}
                      >채점하기</button>,
              };
              return EvaluationData;
          });
        }, [lists]);

  
  return <EvaluationManage columns={columns} data={data} title={title} />;
}
