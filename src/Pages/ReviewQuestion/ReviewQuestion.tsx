import { useState } from "react";
import "./ReviewQuestion.css";
const data = [
  {
    id: 1,
    name: "B-type natriuretic peptide",
    isright: true,
    img: "assets/images/review_session_correct.svg",
    description:
      "A 78-years-old man with a history of stable angina visits his GP for a routine V",
  },
  {
    id: 1,
    name: "Upper limb anatomy",
    isright: false,
    img: "assets/images/review_session_wrong.svg",
    description:
      "Menachem is a 24-year-old male who presents to the emergency department with an ",
  },
  {
    id: 1,
    name: "Hypersensitivity",
    isright: true,
    img: "assets/images/review_session_correct.svg",
    description:
      "A new medical student presents to your general practice to check his tuberculosi",
  },
  {
    id: 1,
    name: "Theophylline",
    isright: false,
    img: "assets/images/review_session_wrong.svg",
    description:
      "A 24-year-old male is brought to the emergency department by his mum. He is agit",
  },
  {
    id: 1,
    name: "Myasthenia gravis",
    isright: true,
    img: "assets/images/review_session_correct.svg",
    description:
      "A 29-year-old woman presents to her GP with fatigue. She says that for the last ",
  },
  {
    id: 1,
    name: "Blood products",
    isright: false,
    img: "assets/images/review_session_wrong.svg",
    description: "Blood products",
  },
];
function ReviewQuestion() {
  const isactive = false;
  const colors = ["#FFFFFF", "#F5FDFB"];
  const [switchTabs, setSwitchTabs] = useState("Sort By Date");
  const handleSwitchTabs = (tabName: string) => {
    setSwitchTabs(tabName);
  };
  return (
    <div className="SessionReview_cover_Review_Question">
      {/* header section  */}
      <div className="frame-1707480843_Review_Question">
        <div className="do-you-use-any-of-thesetools_Review_Question">
          Review Question and key concepts
        </div>

        {/* tabs for large screen  */}
        <div className="frame-1707480824_Review_Question">
          <div className="frame-1707480858_Review_Question">
            <div className="frame-1707480614_Review_Question">
              <div className="questions_Review_Question">Questions</div>
            </div>
            <div className="frame-1707480615_Review_Question">
              <div className="key-concepts_Review_Question">Key Concepts</div>
            </div>
          </div>

          <div className="frame-1707480815_Review_Question">
            <div
              className={`${
                switchTabs === "All questions"
                  ? "frame-1707480722_Review_Question_Active pointer"
                  : "frame-1707480722_Review_Question pointer"
              }`}
              onClick={() => handleSwitchTabs("All questions")}
              style={{ transition: " 0.3s ease-in-out" }}
            >
              <div className="all-questions_Review_Question">All questions</div>
            </div>
            <div
              className={`${
                switchTabs === "Correct"
                  ? "frame-1707480725_Review_Question_Active pointer"
                  : "frame-1707480725_Review_Question pointer"
              }`}
              onClick={() => handleSwitchTabs("Correct")}
              style={{ transition: " 0.3s ease-in-out" }}
            >
              <div className="correct_Review_Question">Correct</div>
            </div>
            <div
              className={`${
                switchTabs === "Incorrect"
                  ? "frame-1707480724_Review_Question_Active pointer"
                  : "frame-1707480724_Review_Question pointer"
              }`}
              onClick={() => handleSwitchTabs("Incorrect")}
              style={{ transition: " 0.3s ease-in-out" }}
            >
              <div className="incorrect_Review_Question">Incorrect</div>
            </div>
          </div>
        </div>
        {/* filters for small screen  */}
        <div className="frame-1707480722_filter_Review_Question">
          <div className="frame-1707480849_Review_Question">
            <div className="frame-1707480848_Review_Question">
              <div className="angle-small-down-3-1_Review_Question">
                <img
                  className="settings-sliders-1_Review_Question pointer"
                  src="assets/images/settings-sliders 1.svg"
                />
              </div>
              <div className="filter-questions_Review_Question">
                Filter questions
              </div>
            </div>
            <img
              className="angle-small-down-3-12_Review_Question pointer"
              src="assets/images/dropdown_fillter.svg"
            />
          </div>
        </div>
      </div>

      {/* content section  */}
      <div className="frame-1707480844_Review_Question">
        <div className="frame-1707480336_Review_Question">
          <div className="frame-17074803362_Review_Question">
            <div className="frame-1707480845_Review_Question">
              <div className="frame-1707480842_Review_Question">
                <div className="frame-1707480318_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="all_Review_Question">All</div>
                </div>
                <div className="frame-1707480320_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="spatial-understanding_Review_Question">
                    Spatial Understanding (50)
                  </div>
                </div>
                <div className="frame-1707480321_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="numbers-from-1-to-10_Review_Question">
                    Patterns and Shapes (09)
                  </div>
                </div>
                <div className="frame-1707480322_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="numbers-from-11-to-20_Review_Question">
                    Skip Counting (12)
                  </div>
                </div>
                <div className="frame-1707480324_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="subtraction-1-to-20_Review_Question">
                    Subtraction (20)
                  </div>
                </div>
                <div className="frame-1707480323_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="addition-1-to-20_Review_Question">
                    Addition (40)
                  </div>
                </div>
                <div className="frame-1707480325_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="multiplication_Review_Question">
                    Multiplication (22)
                  </div>
                </div>
                <div className="frame-1707480326_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="skip-counting_Review_Question">
                    Skip Counting (18)
                  </div>
                </div>
                <div className="frame-1707480327_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="patterns-and-shapes_Review_Question">
                    Patterns and Shapes (24)
                  </div>
                </div>
                <div className="frame-1707480328_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="patterns-and-shapes_Review_Question">
                    Patterns and Shapes (15)
                  </div>
                </div>
                <div className="frame-1707480329_Review_Question">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Review_Question">
                        <div className="frame_Review_Question" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Review_Question">
                          <img
                            className="frame2_Review_Question"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="skip-counting_Review_Question">
                    Skip Counting (12)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-1707480841_Review_Question">
          {/* {switchTabs === "All questions" && ( */}
          <div className="data_table_Review_Question">
            {data.map((item, index) => (
              <>
                <div
                  className="frame-1707480826_Review_Question"
                  style={{ background: colors[index % colors.length] }}
                >
                  <div className="frame-1707480835_Review_Question">
                    <div className="group-1707480483_Review_Question">
                      <div className="frame-1707480872_Review_Question">
                        <div className="_19-mar-2025_Review_Question">
                          19 Mar 2025
                        </div>

                        <div className="frame-1707480871_Review_Question">
                          <div className="b-type-natriuretic-peptide_Review_Question">
                            {item.name}
                          </div>
                          <div className="a-78-years-old-man-with-a-history-of-stable-angina-visits-his-gp-for-a-routine-v_Review_Question">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-1707480836_Review_Question">
                      <div className="check-1_Review_Question">
                        <img className="group" src={`${item.img}`} />
                      </div>
                      <button
                        type="button"
                        className="btn frame-1707480825_Review_Question"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* )} */}

          {/* pagination */}
          <div className="_3_Review_Question">
            <div className="frame-16_Review_Question">
              <div className="show_Review_Question">Show</div>
              <div className="frame-15_Review_Question">
                <div className="_07_Review_Question">07</div>
                <img
                  className="bi-caret-down-fill_Review_Question"
                  src="assets\images/entries_in_pagination.svg"
                />
              </div>
              <div className="entries_Review_Question">entries</div>
            </div>
            <div className="frame-162_Review_Question">
              <div className="previous_Review_Question">Previous</div>
              <div className="frame-152_Review_Question">
                <div className="_1_Review_Question">1</div>
              </div>
              <div className="frame-163_Review_Question">
                <div className="_2_Review_Question">2</div>
              </div>
              <div className="frame-17_Review_Question">
                <div className="_32_Review_Question">3</div>
              </div>
              <div className="next_Review_Question">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewQuestion;
