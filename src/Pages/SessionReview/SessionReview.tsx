import { useState } from "react";
import "./SessionReview.css";
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
function SessionReview() {
  const isactive = false;
  const colors = ["#FFFFFF", "#F5FDFB"];
  const [switchTabs, setSwitchTabs] = useState("All questions");
  const handleSwitchTabs = (tabName: string) => {
    setSwitchTabs(tabName);
  };
  return (
    <div className="SessionReview_cover_Session_Review">
      {/* header section  */}
      <div className="frame-1707480843_Session_Review">
        <div className="do-you-use-any-of-thesetools_Session_Review">
          Session Review
        </div>
        <div className="you-attempted-7-questions-scoring-24_Session_Review">
          You attempted 7 questions, scoring 24%
        </div>

        {/* tabs for large screen  */}
        <div className="frame-1707480824_Session_Review">
          <div className="frame-1707480858_Session_Review">
            <div className="frame-1707480614_Session_Review">
              <div className="questions_Session_Review">Questions</div>
            </div>
            <div className="frame-1707480615_Session_Review">
              <div className="key-concepts_Session_Review">Key Concepts</div>
            </div>
          </div>

          <div className="frame-1707480815_Session_Review">
            <div
              className={`${
                switchTabs === "All questions"
                  ? "frame-1707480722_Session_Review_Active pointer"
                  : "frame-1707480722_Session_Review pointer"
              }`}
              onClick={() => handleSwitchTabs("All questions")}
              style={{ transition: " 0.3s ease-in-out" }}
            >
              <div className="all-questions_Session_Review">All questions</div>
            </div>
            <div
              className={`${
                switchTabs === "Correct"
                  ? "frame-1707480725_Session_Review_Active pointer"
                  : "frame-1707480725_Session_Review pointer"
              }`}
              onClick={() => handleSwitchTabs("Correct")}
              style={{ transition: " 0.3s ease-in-out" }}
            >
              <div className="correct_Session_Review">Correct</div>
            </div>
            <div
              className={`${
                switchTabs === "Incorrect"
                  ? "frame-1707480724_Session_Review_Active pointer"
                  : "frame-1707480724_Session_Review pointer"
              }`}
              onClick={() => handleSwitchTabs("Incorrect")}
              style={{ transition: " 0.3s ease-in-out" }}
            >
              <div className="incorrect_Session_Review">Incorrect</div>
            </div>
          </div>
        </div>
        {/* filters for small screen  */}
        <div className="frame-1707480722_filter_Session_Review">
          <div className="frame-1707480849_Session_Review">
            <div className="frame-1707480848_Session_Review">
              <div className="angle-small-down-3-1_Session_Review">
                <img
                  className="settings-sliders-1_Session_Review pointer"
                  src="assets/images/settings-sliders 1.svg"
                />
              </div>
              <div className="filter-questions_Session_Review">
                Filter questions
              </div>
            </div>
            <img
              className="angle-small-down-3-12_Session_Review pointer"
              src="assets/images/dropdown_fillter.svg"
            />
          </div>
        </div>
      </div>

      {/* content section  */}
      <div className="frame-1707480844_Session_Review">
        <div className="frame-1707480336_Session_Review">
          <div className="frame-17074803362_Session_Review">
            <div className="frame-1707480845_Session_Review">
              <div className="frame-1707480842_Session_Review">
                <div className="frame-1707480318_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="all_Session_Review">All</div>
                </div>
                <div className="frame-1707480320_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="spatial-understanding_Session_Review">
                    Spatial Understanding (50)
                  </div>
                </div>
                <div className="frame-1707480321_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="numbers-from-1-to-10_Session_Review">
                    Patterns and Shapes (09)
                  </div>
                </div>
                <div className="frame-1707480322_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="numbers-from-11-to-20_Session_Review">
                    Skip Counting (12)
                  </div>
                </div>
                <div className="frame-1707480324_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="subtraction-1-to-20_Session_Review">
                    Subtraction (20)
                  </div>
                </div>
                <div className="frame-1707480323_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="addition-1-to-20_Session_Review">
                    Addition (40)
                  </div>
                </div>
                <div className="frame-1707480325_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="multiplication_Session_Review">
                    Multiplication (22)
                  </div>
                </div>
                <div className="frame-1707480326_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="skip-counting_Session_Review">
                    Skip Counting (18)
                  </div>
                </div>
                <div className="frame-1707480327_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="patterns-and-shapes_Session_Review">
                    Patterns and Shapes (24)
                  </div>
                </div>
                <div className="frame-1707480328_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="patterns-and-shapes_Session_Review">
                    Patterns and Shapes (15)
                  </div>
                </div>
                <div className="frame-1707480329_Session_Review">
                  <div className="pointer">
                    {isactive ? (
                      <div className="checkbox_Session_Review">
                        <div className="frame_Session_Review" />
                      </div>
                    ) : (
                      <>
                        <div className="frame_Session_Review">
                          <img
                            className="frame2_Session_Review"
                            src="assets\images\Practice\tick_img.svg"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="skip-counting_Session_Review">
                    Skip Counting (12)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-1707480841_Session_Review">
          {switchTabs === "All questions" && (
            <div className="data_table_Session_Review">
              {data.map((item, index) => (
                <>
                  <div
                    className="frame-1707480826_Session_Review"
                    style={{ background: colors[index % colors.length] }}
                  >
                    <div className="frame-1707480835_Session_Review">
                      <div className="group-1707480483_Session_Review">
                        <div className="frame-1707480872_Session_Review">
                          <div className="id_1_Session_Review">
                            {index + 1}.
                          </div>
                          <div className="frame-1707480871_Session_Review">
                            <div className="b-type-natriuretic-peptide_Session_Review">
                              {item.name}
                            </div>
                            <div className="a-78-years-old-man-with-a-history-of-stable-angina-visits-his-gp-for-a-routine-v_Session_Review">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-1707480836_Session_Review">
                        <div className="check-1_Session_Review">
                          <img className="group" src={`${item.img}`} />
                        </div>
                        <button
                          type="button"
                          className="btn frame-1707480825_Session_Review"
                        >
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
          {switchTabs === "Correct" && (
            <div className="data_table_Session_Review">
              {data.map((item, index) => (
                <>
                  <div
                    className="frame-1707480826_Session_Review"
                    style={{ background: colors[index % colors.length] }}
                  >
                    <div className="frame-1707480835_Session_Review">
                      <div className="group-1707480483_Session_Review">
                        <div className="frame-1707480872_Session_Review">
                          <div className="id_1_Session_Review">1.</div>
                          <div className="frame-1707480871_Session_Review">
                            <div className="b-type-natriuretic-peptide_Session_Review">
                              {item.name}
                            </div>
                            <div className="a-78-years-old-man-with-a-history-of-stable-angina-visits-his-gp-for-a-routine-v_Session_Review">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-1707480836_Session_Review">
                        <div className="check-1_Session_Review">
                          <img className="group" src={`${item.img}`} />
                        </div>
                        <button
                          type="button"
                          className="btn frame-1707480825_Session_Review"
                        >
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
          {switchTabs === "Incorrect" && (
            <div className="data_table_Session_Review">
              {data.map((item, index) => (
                <>
                  <div
                    className="frame-1707480826_Session_Review"
                    style={{ background: colors[index % colors.length] }}
                  >
                    <div className="frame-1707480835_Session_Review">
                      <div className="group-1707480483_Session_Review">
                        <div className="frame-1707480872_Session_Review">
                          <div className="id_1_Session_Review">1.</div>
                          <div className="frame-1707480871_Session_Review">
                            <div className="b-type-natriuretic-peptide_Session_Review">
                              {item.name}
                            </div>
                            <div className="a-78-years-old-man-with-a-history-of-stable-angina-visits-his-gp-for-a-routine-v_Session_Review">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-1707480836_Session_Review">
                        <div className="check-1_Session_Review">
                          <img className="group" src={`${item.img}`} />
                        </div>
                        <button
                          type="button"
                          className="btn frame-1707480825_Session_Review"
                        >
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}

          {/* pagination */}
          <div className="_3_Session_Review">
            <div className="frame-16_Session_Review">
              <div className="show_Session_Review">Show</div>
              <div className="frame-15_Session_Review">
                <div className="_07_Session_Review">07</div>
                <img
                  className="bi-caret-down-fill_Session_Review"
                  src="assets\images\Practice\arrow_down.svg"
                />
              </div>
              <div className="entries_Session_Review">entries</div>
            </div>
            <div className="frame-162_Session_Review">
              <div className="previous_Session_Review">Previous</div>
              <div className="frame-152_Session_Review">
                <div className="_1_Session_Review">1</div>
              </div>
              <div className="frame-163_Session_Review">
                <div className="_2_Session_Review">2</div>
              </div>
              <div className="frame-17_Session_Review">
                <div className="_32_Session_Review">3</div>
              </div>
              <div className="next_Session_Review">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionReview;
