import React from "react";
import styled from "styled-components";
import MyPageForm from "../../containers/MyPageForm";
import { useTable } from "react-table";

const TableBlock = styled.div`
  height: 75vh;
  width: 54.5vw;
  display: flex;
  align-items:center;
  margin-top: .5vh;
`;

const EvaluationBlock = styled.div`
  height: 90%;
  width: 100%;
  overflow-y: auto; /* 내용많으면 스크롤됨 */

  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }

  table {
    width: 100%;
    height: 55%;
    text-align: center;
    border-collapse: collapse;
    font-weight: 600;
  }
  thead {
    position: sticky;
    top: 0;
    height: 5vh;
    border-top: 1px solid #5A5A5A;
    border-bottom: 1px solid #5A5A5A;
  }
  td{
    height: 5vh;
  }
  tbody td:nth-child(3) {
    width: 40%;
    text-align: start;
    padding-left: 2vw;
  }
  tbody tr:nth-child(2n+1) {
    background-color: #F4F4F4;
  }
  tbody tr:nth-child(2n) {
    background-color: white;
  }
`;

export default function EvaluationtManage( { columns, data, title } ) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <MyPageForm  userType={"teacher"} teacher_id={"20"} page={"채점 관리"} title ={title}/>
      <TableBlock>
        <EvaluationBlock>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr key={row.id} {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </EvaluationBlock>
      </TableBlock>
    </>
  );
}