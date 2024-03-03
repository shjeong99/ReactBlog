/* eslint-disable */ //warning 없애기

import { useState } from "react";
import "./App.css";

function App() {
  let [title, titleFunc] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [cnt, cntFunc] = useState([0, 0, 0]);
  let [modalYN, setModal] = useState(false);

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
      {/* <div className="list">
        <h4>{ title[0] } <span onClick={()=>{ cntFunc(cnt++) }}>👍</span> { cnt } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
            setModal(!modalYN); 
          }}>{ title[2] }</h4>
        <Date/>
      </div> */}
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modalYN);
              }}
            >
              {title[i]}
              <span
                onClick={() => {
                  let tempCnt = [...cnt];
                  console.log(tempCnt);
                  tempCnt[i]++;
                  cntFunc(tempCnt);
                }}
              >
                👍
              </span>
              {cnt[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modalYN == true ? <Modal title={title} titleFunc={titleFunc} /> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title[0]}</h4>
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
