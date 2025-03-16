import { useState } from "react";
import "./Question.css";
function Question() {
  const [selectedOption, setSelectedOption] = useState<string>("D");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="_123_question">
        <div className="frame-1707480635_question">
          <div className="question_header">
            <div className="title_question">
              <div className="do-you-use-any-of-thesetools3_question">
                Question 2 of 10
              </div>
            </div>
            <div className="frame-1707479480_question">
              <div className="time-remaining_question">Time Remaining</div>
              <div className="do-you-use-any-of-thesetools4_question">
                00:30
              </div>
            </div>
          </div>


          <div className="cover_question_and_answer">
            <div className="frame-1707480633_question">
              <div className="question_question">Question:</div>
              <div className="a-school-has-2-male-teachers-and-11-female-teachers-there-are-a-school-has-2-male-teachers-and-11-female-teachers-there-are-a-school-has-2-male-teachers-and-11-female-teachers-there-are-a-school-has-2-male-teachers-and-11-female-teachers-there-are_question">
                A school has 2 male teachers and 11 female teachers. There are A
                school has 2 male teachers and 11 female teachers. There are A
                school has 2 male teachers and 11 female teachers. There are A
                school has 2 male teachers and 11 female teachers. There are
              </div>
            </div>
            <div className="frame-1707480634_question">
              <div className="answer_question">Answer:</div>
              <div className="frame-1707480093_question">
                <div className={` ${selectedOption === "A" ? "frame-1707479455_question" : "frame-1707479452_question"}`}>
                  <div className="choices_cover">
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      id="option"
                      className={`form-check-input ${selectedOption === "A" ? "" : "component-32_question"}`}
                      checked={selectedOption === "A"}
                      onChange={() => handleOptionChange("A")}
                    />
                    <div className="a-10_question">
                      <span className="d-flex pt-2 align-items-center">
                        <span className="a-10-span_question">A:</span>
                        <span className="a-10-span2_question">10</span>
                      </span>
                    </div>
                  </div>
                  {selectedOption === "A" && (
                    <>
                      <img
                        className="material-symbols-done"
                        src="assets/images/material-symbols_done.svg"
                        alt="Done"
                      />
                    </>
                  )}

                </div>
                <div className={` ${selectedOption === "B" ? "frame-1707479455_question" : "frame-1707479452_question"}`}>
                  <div className="choices_cover">
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      id="option"
                      className={`form-check-input ${selectedOption === "B" ? "" : "component-32_question"}`}
                      checked={selectedOption === "B"}
                      onChange={() => handleOptionChange("B")}
                    />
                    <div className="a-10_question">
                      <span className="d-flex pt-2 align-items-center">
                        <span className="a-10-span_question">B:</span>
                        <span className="a-10-span2_question">10</span>
                      </span>
                    </div>
                  </div>
                  {selectedOption === "B" && (
                    <>
                      <img
                        className="material-symbols-done"
                        src="assets/images/material-symbols_done.svg"
                        alt="Done"
                      />
                    </>
                  )}

                </div>
                <div className={` ${selectedOption === "C" ? "frame-1707479455_question" : "frame-1707479452_question"}`}>
                  <div className="choices_cover">
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      id="option"
                      className={`form-check-input ${selectedOption === "C" ? "" : "component-32_question"}`}
                      checked={selectedOption === "C"}
                      onChange={() => handleOptionChange("C")}
                    />
                    <div className="a-10_question">
                      <span className="d-flex pt-2 align-items-center">
                        <span className="a-10-span_question">C:</span>
                        <span className="a-10-span2_question">10</span>
                      </span>
                    </div>
                  </div>
                  {selectedOption === "C" && (
                    <>
                      <img
                        className="material-symbols-done"
                        src="assets/images/material-symbols_done.svg"
                        alt="Done"
                      />
                    </>
                  )}

                </div>
                <div className={` ${selectedOption === "D" ? "frame-1707479455_question" : "frame-1707479452_question"}`}>
                  <div className="choices_cover">
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      id="option"
                      className={`form-check-input ${selectedOption === "D" ? "" : "component-32_question"}`}
                      checked={selectedOption === "D"}
                      onChange={() => handleOptionChange("D")}
                    />
                    <div className="a-10_question">
                      <span className="d-flex pt-2 align-items-center">
                        <span className="a-10-span_question">D:</span>
                        <span className="a-10-span2_question">10</span>
                      </span>
                    </div>
                  </div>
                  {selectedOption === "D" && (
                    <>
                      <img
                        className="material-symbols-done"
                        src="assets/images/material-symbols_done.svg"
                        alt="Done"
                      />
                    </>
                  )}

                </div>
              </div>
            </div>
          </div>

          <div className="bottom-btn_question">
            <div className="move_question_button">
              <div className="back3_question">
                <div className="back4_question">Clear</div>
              </div>
              <div className="back5_question">
                <div className="back4_question">Submit</div>
              </div>
            </div>

            <div className="move_question_colors">
              <div className="frame-1707479485_colors_question">
                <div className="ellipse-123_colors_question" />
                <div className="back_colors_question">Answered</div>
              </div>
              <div className="frame-1707479484_colors_question">
                <div className="ellipse-1232_colors_question" />
                <div className="back_colors_question">Current</div>
              </div>
              <div className="frame-1707479486_colors_question">
                <div className="ellipse-1233_colors_question" />
                <div className="back_colors_question">Not Attempted</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-1707480628_question">
          <div className="frame-1707480631_question">
            <div className="frame-1707480629_question">
              <div className="attempted_question">Attempted</div>
              <div className="do-you-use-any-of-thesetools_question">01</div>
            </div>
            <div className="frame-1707480630_question">
              <div className="unattempt_question">Unattempt</div>
              <div className="do-you-use-any-of-thesetools_question">14</div>
            </div>
          </div>
          <div className="frame-1707479482_question">
            <div className="frame-1707479460_question">
              <div className="_1_question">1</div>
            </div>
            <div className="frame-1707479461_question">
              <div className="_2_question">2</div>
            </div>
            <div className="frame-1707479462_question">
              <div className="_3_question">3</div>
            </div>
            <div className="frame-1707479463_question">
              <div className="_3_question">4</div>
            </div>
            <div className="frame-1707479464_question">
              <div className="_3_question">5</div>
            </div>
            <div className="frame-1707479465_question">
              <div className="_3_question">6</div>
            </div>
            <div className="frame-1707479466_question">
              <div className="_3_question">7</div>
            </div>
            <div className="frame-1707479467_question">
              <div className="_3_question">8</div>
            </div>
            <div className="frame-1707479468_question">
              <div className="_3_question">9</div>
            </div>
            <div className="frame-1707479469_question">
              <div className="_3_question">10</div>
            </div>
            <div className="frame-1707479470_question">
              <div className="_3_question">11</div>
            </div>
            <div className="frame-1707479471_question">
              <div className="_3_question">12</div>
            </div>
            <div className="frame-1707479472_question">
              <div className="_3_question">13</div>
            </div>
            <div className="frame-1707479473_question">
              <div className="_3_question">14</div>
            </div>
            <div className="frame-1707479474_question">
              <div className="_3_question">15</div>
            </div>
            <div className="frame-1707479475_question">
              <div className="_3_question">16</div>
            </div>
            <div className="frame-1707479476_question">
              <div className="_3_question">17</div>
            </div>
            <div className="frame-1707479477_question">
              <div className="_3_question">18</div>
            </div>
            <div className="frame-1707479471_question">
              <div className="_3_question">12</div>
            </div>
            <div className="frame-1707479472_question">
              <div className="_3_question">13</div>
            </div>
            <div className="frame-1707479473_question">
              <div className="_3_question">14</div>
            </div>
            <div className="frame-1707479474_question">
              <div className="_3_question">15</div>
            </div>
            <div className="frame-1707479475_question">
              <div className="_3_question">16</div>
            </div>
            <div className="frame-1707479476_question">
              <div className="_3_question">17</div>
            </div>
            <div className="frame-1707479477_question">
              <div className="_3_question">18</div>
            </div>
          </div>
          <div className="frame-1707479481_question">
            <div className="back_question">
              <i className="caret-left_question bi bi-chevron-left"></i>

              <div className="back2_question">Previous</div>
            </div>
            <div className="next_question">
              <div className="next2_question">Next</div>
              <img
                className="caret-right"
                src="assets/images/Caret right.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-1707480648_question">
        <div className="footer-left_question">
          All content of this website are © 2025 Vertical Minds
        </div>
      </div>
    </div>
  );
}

export default Question;
