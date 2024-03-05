/* eslint-disable */ //warning 없애기

import { useState } from "react";
import "./App.css";

function App() {
  let [title, titleFunc] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [cnt, cntFunc] = useState([0, 0, 0]); //좋아요 개수 저장해두는 곳
  let [modalYN, setModal] = useState(false);
  let [num, setNum] = useState(0);
  let [input, setInput] = useState("");
  let [date, setDate] = useState(['2024-03-01', '2024-03-02', '2024-03-03'])

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "16px" }}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let tempArr = [...title];
          tempArr.sort();
          titleFunc(tempArr);
        }}
      >
        가나다순 정렬
      </button>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modalYN);
                setNum(i);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let tempCnt = [...cnt];
                  console.log(tempCnt);
                  tempCnt[i]++;
                  cntFunc(tempCnt);
                }}
              >
                👍
              </span>
              {cnt[i]}
              <button onClick={(e)=>{
                e.stopPropagation();
                let tempArr = [...title];
                tempArr.splice(i, 1);
                titleFunc(tempArr);

                let tmepLike = [...cnt];
                tmepLike.splice(i, 1);
                cntFunc(tmepLike);

                let tempDate = [...date];
                tempDate.splice(i, 1);
                setDate(tempDate);

              }}>글삭제</button>
            </h4>
            <p>{date[i]}</p>
          </div>
        );
      })}
      <input type="text" onChange={(e)=>{
        setInput(e.target.value);
      }}></input>
      <button onClick={()=>{
        if(!input){
          alert("내용을 입력해주세요!");
          return;
        }
        
        let tempArr= [...title];
        tempArr.unshift(input);
        titleFunc(tempArr);

        let tempLike = [...cnt];
        tempLike.unshift(0);
        cntFunc(tempLike);

        let tempDate = [...date];
        var today = new Date().getFullYear() + "-" + (new Date().getMonth() + 1 >= 10 ? (new Date().getMonth() + 1) : "0" + (new Date().getMonth() + 1)) 
                    + "-" + (new Date().getDate() >= 10 ? new Date().getDate() : "0" + new Date().getDate());
        tempDate.unshift(today);
        setDate(tempDate);
        
      }}>글발행</button>
      {modalYN == true ? (
        <Modal num={num} title={title} titleFunc={titleFunc} />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title[props.num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let tempProp = [...props.title];
          tempProp[0] = "여자 코트 추천";
          props.titleFunc(tempProp);
        }}
      >
        글수정
      </button>
    </div>
  );
};

export default App;
