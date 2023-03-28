import React, { useState } from "react";
import { BsInfoLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import "./index.css";
import cross from "../../Icons/cross.png";
import bulb from "../../Icons/bulb.png";
import chat from "../../Icons/chat.png";
import question from "../../Icons/question.png";
import flower from "../../Icons/flower.png";
import left from "../../Icons/left.png";
import right from "../../Icons/right.png";
import uniDirection from "../../Icons/unidirection.png";
import questionMark from "../../Icons/question-mark.png";
import schedule from "../../Icons/schedule.png";
import meeting from "../../Icons/meeting.png";

import { jsData } from "../../jsonData";

function TechnicalProjectManagment() {
  const [isClicked, setClicked] = useState(false);
  const { title, tasks } = jsData[0];
  const taskTitle = tasks[0].task_title;
  const taskDescription = tasks[0].task_description;
  const assets = tasks[0].assets;

  return (
    <div className="total-cont">
      <div>
        <div
          className="black-slide-bar"
          style={isClicked ? { width: "25vw" } : { width: "10vw" }}
        >
          <h2>{isClicked ? "Journey Board" : ""}</h2>
          <button
            className="side-button"
            onClick={() => setClicked(!isClicked)}
          >
            {isClicked ? (
              <HiOutlineArrowCircleLeft className="side-left-icon" />
            ) : (
              <HiOutlineArrowCircleRight className="side-right-icon" />
            )}
          </button>
        </div>
        <div className="white-slide-bar">
          {isClicked && (
            <ul>
              <li className="side-title">{taskTitle}</li>
            </ul>
          )}
          {isClicked &&
            assets.map((each) => {
              return (
                <ul key={each.asset_id}>
                  <li>{each.asset_title}</li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className="content-cont">
        <div className="technical-head">
          <h1 className="head">{title}</h1>
          <button className="submit-btn">Submit Task</button>
        </div>
        <div className="first-asset">
          <h2 className="first-asset-head">{taskTitle}</h2>
          <p className="first-asset-para">{taskDescription}</p>
        </div>

        <div className="card-container">
          <div className="card-1">
            <div className="card-1-top">
              <h4 className="card-head1">{assets[0].asset_title}</h4>
              <BsInfoLg className="i-icon" />
            </div>
            <div>
              <h3 className="description">
                Description :
                <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                  {assets[0].asset_description}
                </span>
              </h3>
              <iframe className="video" src={assets[0].asset_content}></iframe>
            </div>
          </div>

          <div className="card-1">
            <div className="card-1-top">
              <h4 className="card-head2">{assets[1].asset_title}</h4>
              <BsInfoLg className="i-icon" />
            </div>
            <div>
              <h3 className="description">
                Description :
                <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                  {assets[1].asset_description}
                </span>
              </h3>

              <div className="card-2-top">
                <IoIosArrowUp className="up-arrow" />
                <h3 className="thread-a">Thread A</h3>
              </div>
            </div>
            <div className="bottom-cont">
              <div className="input-cont">
                <div className="sub-thread-cont">
                  <label htmlFor="sub-thread" className="sub-thread-label">
                    Sub thread1
                  </label>
                  <textarea
                    id="sub-thread"
                    type="text"
                    className="input-ele"
                    placeholder="Enter Text here"
                  />
                </div>

                <div className="sub-thread-cont">
                  <label htmlFor="sub-thread" className="sub-thread-label">
                    Sub thread1
                  </label>
                  <textarea
                    id="sub-thread"
                    type="text"
                    className="input-ele"
                    placeholder="Enter Text here"
                  />
                </div>
              </div>
              <div className="icons-drop-down-cont">
                <img className="bcqf-icons" src={bulb} alt="bulb" />
                <img className="bcqf-icons" src={chat} alt="chat" />
                <img className="bcqf-icons" src={question} alt="question" />
                <img className="bcqf-icons" src={flower} alt="flower" />
                <select className="drop-down">
                  <option>Select Categ</option>
                </select>
                <select className="drop-down">
                  <option>Select Proces</option>
                </select>
              </div>
              <div className="sub-thread-text">+ Sub-thread</div>
              <div className="summary-cont">
                <label htmlFor="summary" className="sub-thread-label">
                  Sub thread1
                </label>
                <textarea
                  id="summary"
                  type="text"
                  className="input-ele"
                  placeholder="Enter Text here"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-1">
            <div className="card-1-top">
              <h4 className="card-head1">{assets[2].asset_title}</h4>
              <BsInfoLg className="i-icon" />
            </div>
            <div>
              <h3 className="description">
                Description :
                <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                  {assets[2].asset_description}
                </span>
              </h3>
              <hr />
              <div className="under-hr">
                <div className="title-cont">
                  <label className="title-lable" htmlFor="title">
                    Title
                  </label>
                  <input className="title-input-el" id="title" type="text" />
                </div>
                <div>
                  <h4>Content</h4>
                  <div className="list-of-names-cont">
                    <div className="list-of-names">
                      <p className="list-name">File</p>
                      <p className="list-name">Edit</p>
                      <p className="list-name">View</p>
                      <p className="list-name">Insert</p>
                      <p className="list-name">Format</p>
                      <p className="list-name">Tools</p>
                      <p className="list-name">Table</p>
                      <p className="list-name">Help</p>
                    </div>
                    <div className="list-of-icons">
                      <img src={left} alt="left" />
                      <img src={right} alt="right" />
                      <p className="para-icon">Paragraph</p>
                      <img src={uniDirection} alt="uniDirection" />
                      <SlOptions />
                    </div>
                  </div>
                </div>
                <div className="final-card"></div>
              </div>
            </div>
          </div>

          <div className="card-1">
            <div className="card-1-top">
              <h4 className="card-head2">{assets[3].asset_title}</h4>
              <BsInfoLg className="i-icon" />
            </div>
            <div>
              <h3 className="description">
                Description :
                <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                  {assets[3].asset_description}
                </span>
              </h3>
            </div>

            <div className="bottom-cont">
              <div className="card-2-top-intro">
                <IoIosArrowUp className="up-arrow" />
                <h3 className="thread-a">Introduction</h3>
              </div>
              <div className="final-one">
                <p>The 4SA Method , How to bring a idea into progress ?</p>
                <p className="see-more">See More</p>
              </div>
              <div className="card-2-top-intro">
                <IoIosArrowUp className="up-arrow" />
                <h3 className="thread-a">Thread A</h3>
              </div>
              <div className="final-one">
                <p>
                  How are you going to develop your stratergy ? Which method are
                  you going to use to develop a stratergy ? What if the project
                  is lengthy?
                </p>
                <p className="see-more">See More</p>
              </div>
              <div className="card-2-top-intro">
                <h3 className="thread-a">Example1</h3>
              </div>
              <p>You have a concept , How will you put into progress?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-right-cont">
        <div className="notice-cont">
          <div className="black-notice">
            <img src={cross} className="cross" alt="corss" />
            <div>
              <div>N</div>
              <div>o</div>
              <div>t</div>
              <div>i</div>
              <div>c</div>
              <div>e</div>
            </div>
            <div>
              <div>B</div>
              <div>o</div>
              <div>a</div>
              <div>r</div>
              <div>d</div>
            </div>
          </div>
          <div className="white-notice"></div>
        </div>
        <div className="qms-cont">
          <img className="qms-icons" src={questionMark} alt="questionMark" />
          <img className="qms-icons" src={meeting} alt="meeting" />
          <img className="qms-icons" src={schedule} alt="schedule" />
        </div>
      </div>
    </div>
  );
}

export default TechnicalProjectManagment;
