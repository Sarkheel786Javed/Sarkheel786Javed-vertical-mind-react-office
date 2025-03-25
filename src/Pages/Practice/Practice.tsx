import { useEffect, useState } from "react";
import "./Practice.css";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";

const GradeData = {
  gradeName: "Grade 4",
  gradeCourse: [
    {
      courseName: "Numbers (4-Digit)",
      courseCategory: [
        {
          questionCatergoryName: "Representation of Numbers one ",
          questionSubCatergory: [
            { Name: "Numerals and Number Names" },
            { Name: "Write Numerals for number Names" },
            { Name: "Write Number Names for Numerals" },
            { Name: "Numbers on Abacus" },
          ],
        },
        {
          questionCatergoryName: "Representation of Numbers two",
          questionSubCatergory: [
            { Name: "Numerals and Number Names" },
            { Name: "Write Numerals for number Names" },
            { Name: "Write Number Names for Numerals" },
            { Name: "Numbers on Abacus" },
          ],
        },
        {
          questionCatergoryName: "Representation of Numbers three",
          questionSubCatergory: [
            { Name: "Numerals and Number Names" },
            { Name: "Write Numerals for number Names" },
            { Name: "Write Number Names for Numerals" },
            { Name: "Numbers on Abacus" },
          ],
        },
      ],
    },
    {
      courseName: "Addition and Subtraction 1 to 20",
      courseCategory: [
        {
          questionCatergoryName:
            "Representation of Numbers Representation of Numbers",
          questionSubCatergory: [
            { Name: "Numerals and Number Names" },
            { Name: "Write Numerals for number Names" },
            { Name: "Write Number Names for Numerals" },
            { Name: "Numbers on Abacus" },
          ],
        },
        {
          questionCatergoryName:
            "Representation of Numbers Representation of Numbers",
          questionSubCatergory: [
            { Name: "Numerals and Number Names" },
            { Name: "Write Numerals for number Names" },
            { Name: "Write Number Names for Numerals" },
            { Name: "Numbers on Abacus" },
          ],
        },
      ],
    },
  ],
};
function Topic() {
  // State management
  const [selectedCourseIndex, setSelectedCourseIndex] = useState<number>(0); // Default to first course
  const [selectedCourseCategory, setSelectedCourseCategory] = useState<any[]>(
    GradeData.gradeCourse[0]?.courseCategory || []
  );
  const [selectedQuestionCategoryIndices, setSelectedQuestionCategoryIndices] =
    useState<number[]>([]);
  const [isGradeSelected, setIsGradeSelected] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [disablePracticeButton, setDisablePracticeButton] = useState(false);
  const [show, setShow] = useState(false);
  const [screenSize, setScreenSize] = useState<any>();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLevelTypeOption, setSelectedLevelTypeOption] = useState(null);
  const navigate = useNavigate();

  // Initialize with first course selected by default
  useEffect(() => {
    if (GradeData.gradeCourse.length > 0) {
      setSelectedCourseIndex(0);
      setSelectedCourseCategory(GradeData.gradeCourse[0].courseCategory);
    }
  }, []);

  // Toggle grade selection
  const handleSelectedGrade = () => {
    const newGradeSelectedState = !isGradeSelected;
    setIsGradeSelected(newGradeSelectedState);

    if (newGradeSelectedState) {
      // Select all courses and their question categories
      const allCourseIndices = GradeData.gradeCourse.map((_, index) => index);
      setSelectedCourses(allCourseIndices);

      const allQuestionIndices = GradeData.gradeCourse.flatMap((course) =>
        course.courseCategory.map((_, qIndex) => qIndex)
      );
      setSelectedQuestionCategoryIndices(allQuestionIndices);
    } else {
      // Deselect everything
      setSelectedCourses([]);
      setSelectedQuestionCategoryIndices([]);
    }
  };

  // Toggle course selection (only affects checkbox)
  const handleCourseCheckbox = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the course name click

    if (selectedCourses.includes(index)) {
      // Remove from selected courses
      const newSelectedCourses = selectedCourses.filter((i) => i !== index);
      setSelectedCourses(newSelectedCourses);

      // Remove this course's question categories from selection
      const courseCategories = GradeData.gradeCourse[index].courseCategory;
      const newSelectedQuestions = selectedQuestionCategoryIndices.filter(
        (i) => !courseCategories.some((_, qIndex) => qIndex === i)
      );
      setSelectedQuestionCategoryIndices(newSelectedQuestions);

      // If grade was selected and we're unchecking a course, unselect grade
      if (
        isGradeSelected &&
        newSelectedCourses.length !== GradeData.gradeCourse.length
      ) {
        setIsGradeSelected(false);
      }
    } else {
      // Add to selected courses
      const newSelectedCourses = [...selectedCourses, index];
      setSelectedCourses(newSelectedCourses);

      // Add this course's question categories to selection
      const newQuestionIndices = GradeData.gradeCourse[
        index
      ].courseCategory.map((_, qIndex) => qIndex);
      setSelectedQuestionCategoryIndices([
        ...selectedQuestionCategoryIndices,
        ...newQuestionIndices.filter(
          (i) => !selectedQuestionCategoryIndices.includes(i)
        ),
      ]);

      // If all courses are now selected, select grade
      if (newSelectedCourses.length === GradeData.gradeCourse.length) {
        setIsGradeSelected(true);
      }
    }
  };

  // Toggle course visibility (click on course name)
  const handleCourseNameClick = (index: number) => {
    setSelectedCourseIndex(index);
    setSelectedCourseCategory(GradeData.gradeCourse[index].courseCategory);
  };

  // Toggle question category selection
  const handleQuestionCategory = (index: number) => {
    if (selectedQuestionCategoryIndices.includes(index)) {
      setSelectedQuestionCategoryIndices(
        selectedQuestionCategoryIndices.filter((i) => i !== index)
      );
    } else {
      setSelectedQuestionCategoryIndices([
        ...selectedQuestionCategoryIndices,
        index,
      ]);
    }
  };
  const [isShowSubQuestionCategory, setIsShowSubQuestionCategory] =
    useState(false);
  const handleShowQuestionSubCategory = () => {
    const tempt = !isShowSubQuestionCategory;
    setIsShowSubQuestionCategory(tempt);
  };
  // Modal handlers
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (selectedQuestionCategoryIndices.length > 0) {
      setShow(true);
    }
  };

  // Screen size detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) setScreenSize("sm");
      else if (width >= 320 && width < 767) setScreenSize("md");
      else if (width >= 768 && width < 1024) setScreenSize("md");
      else if (width >= 1024 && width < 1440) setScreenSize("xl");
      else if (width >= 1440 && width < 2559) setScreenSize("xl");
      else if (width >= 2560) setScreenSize("xl");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update practice button state
  useEffect(() => {
    setDisablePracticeButton(selectedQuestionCategoryIndices.length > 0);
  }, [selectedQuestionCategoryIndices]);

  // Test options handlers
  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const handleSelectLevelType = (option: any) => {
    setSelectedLevelTypeOption(option);
  };

  const NavigateToPracticeQuestion = () => {
    if (selectedOption && selectedLevelTypeOption) {
      setShow(false);
      navigate("/PracticeQuestion");
    }
  };

  return (
    <>
      <div className="frame-1707480619_practice_question_bank">
        <div className="frame-1707480693_practice_question_bank">
          <div className="frame-1707480814_practice_question_bank">
            <div className="question-bank_practice_question_bank">
              Question Bank
            </div>
            <div className="welcome-to-the-main-question-bank_practice_question_bank">
              Welcome to the main question bank
            </div>
          </div>
          <div className="frame-1707480820_practice_question_bank">
            <div className="frame-1707480819_practice_question_bank">
              <div className="info-indicator_practice_question_bank">
                <div
                  className="progress"
                  style={{
                    width: "100%",
                    backgroundColor: "#cccccc",
                    height: "8px",
                  }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "15%", backgroundColor: "#ff0505" }}
                  />
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%", backgroundColor: "#009146" }}
                  />
                </div>
                <div className="information_practice_question_bank">
                  <div className="_22-2_practice_question_bank">22.2%</div>
                </div>
              </div>
              <div className="you-ve-answered-27-questions-with-an-average-score-of-22-2-more_practice_question_bank">
                <span className="you-ve-answered_text_cover_practice_question_bank">
                  <div className="">
                    <span className="you-ve-answered-27-questions-with-an-average-score-of-22-2-more-span_practice_question_bank">
                      You've answered
                    </span>
                    <span className="mx-1 you-ve-answered-27-questions-with-an-average-score-of-22-2-more-span2_practice_question_bank">
                      27
                    </span>
                    <span className="you-ve-answered-27-questions-with-an-average-score-of-22-2-more-span3_practice_question_bank">
                      questions with an
                    </span>
                  </div>
                  <div className="mx-1">
                    <span className="you-ve-answered-27-questions-with-an-average-score-of-22-2-more-span3_practice_question_bank">
                      average score of 22.2%.
                    </span>
                    <span className="you-ve-answered-27-questions-with-an-average-score-of-22-2-more-span5_practice_question_bank">
                      More
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div className="frame-1707480816_practice_question_bank">
              <div className="frame-1707480614_practice_question_bank">
                <div className="punjab-board_practice_question_bank">
                  Punjab Board
                </div>
              </div>
              <div
                className="frame-1707480615_practice_question_bank"
                data-bs-toggle="dropdown"
                style={{cursor:"pointer"}}
              >
                <div className="math-subject_practice_question_bank">
                  Math Subject
                </div>
                <img
                  className=""
                  style={{ transform: `rotate(${1 === 1 ? "0" : "180"}deg)` }}
                  src="assets\images\Practice\arrow_down.svg"
                />
              </div>
              <div className="dropdown-menu grade_course_practice_question_bank">
                <div className="subjects-dropdown_practice_question_bank">
                  <div className="dropdown-option-item_practice_question_bank">
                    <div className="maths_practice_question_bank">Maths</div>
                  </div>
                  <img
                    className="divider_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-5_practice_question_bank">
                      Grade 5
                    </div>
                  </div>
                  <img
                    className="divider2_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-6_practice_question_bank">
                      Grade 6
                    </div>
                  </div>
                  <img
                    className="divider3_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-7_practice_question_bank">
                      Grade 7
                    </div>
                  </div>
                  <img
                    className="divider4_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-8_practice_question_bank">
                      Grade 8
                    </div>
                  </div>
                  <img
                    className="divider5_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-9_practice_question_bank">
                      Grade 9
                    </div>
                  </div>
                  <img
                    className="divider6_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-10_practice_question_bank">
                      Grade 10
                    </div>
                  </div>
                  <img
                    className="divider7_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-11_practice_question_bank">
                      Grade 11
                    </div>
                  </div>
                  <img
                    className="divider8_practice_question_bank"
                    src="assets\images\Practice\Divider.svg"
                  />
                  <div className="dropdown-option-item2_practice_question_bank">
                    <div className="grade-12_practice_question_bank">
                      Grade 12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-1707480801_practice_question_bank">
          <div className="frame-1707480336_practice_question_bank">
            <div className="frame-1707480307_practice_question_bank">
              {/* geade and search section */}
              <div className="grade_name_and_search_for_small_screen">
                <div className="frame-1707480395_practice_question_bank">
                  <div className="frame-1707480308_practice_question_bank">
                    <div className="d-flex gap-2 align-items-center">
                      <div
                        className={`${
                          isGradeSelected
                            ? "checkbox_Active_practice_question_bank"
                            : "checkbox_practice_question_bank"
                        }`}
                        onClick={handleSelectedGrade}
                        style={{
                          transition: "0.3s ease-in-out",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className={`${
                            isGradeSelected
                              ? "frame_Active_practice_question_bank"
                              : "frame_practice_question_bank"
                          }`}
                          style={{ transition: "0.3s ease-in-out" }}
                        >
                          {isGradeSelected && (
                            <img
                              className="frame2_practice_question_bank"
                              src="assets\images\Practice\tick_img.svg"
                            />
                          )}
                        </div>
                      </div>
                      <div className="grade-4_practice_question_bank">
                        {GradeData.gradeName}
                      </div>
                    </div>
                    {selectedQuestionCategoryIndices.length > 0 && (
                      <div className="total-questions-06_practice_question_bank">
                        Total Questions :
                        {selectedQuestionCategoryIndices.length}
                      </div>
                    )}
                  </div>
                </div>
                <div className="frame-1707480225_practice_question_bank">
                  <input
                    type="text"
                    className="sample_practice_question_bank"
                    placeholder="Search for topics/skills"
                  />
                  <img
                    className="_01-align-center_practice_question_bank"
                    src="assets\images\Practice\searchIcon.svg"
                  />
                </div>
              </div>
              <div className="list_course_practice">
                {GradeData.gradeCourse.map((item, index) => (
                  <div
                    key={index}
                    className="frame-1707480396_practice_question_bank mt-2"
                  >
                    <div
                      className={`${
                        selectedCourseIndex === index
                          ? "frame-1707480317_practice_question_bank"
                          : "frame-1707480318_practice_question_bank"
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Course checkbox */}
                      <div
                        className={`${
                          isGradeSelected || selectedCourses.includes(index)
                            ? "checkbox_Active_practice_question_bank"
                            : "checkbox_practice_question_bank"
                        }`}
                        onClick={(e) => handleCourseCheckbox(index, e)}
                        style={{
                          transition: "0.3s ease-in-out",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className={`${
                            isGradeSelected || selectedCourses.includes(index)
                              ? "frame_Active_practice_question_bank"
                              : "frame_practice_question_bank"
                          }`}
                        >
                          {(isGradeSelected ||
                            selectedCourses.includes(index)) && (
                            <img
                              className="frame2_practice_question_bank"
                              src="assets\images\Practice\tick_img.svg"
                            />
                          )}
                        </div>
                      </div>

                      {/* Course name */}
                      <div
                        className="course-name-container"
                        style={{ flex: 1 }}
                      >
                        <div
                          onClick={() => handleCourseNameClick(index)}
                          className={`ellipse_text_practice ${
                            selectedCourseIndex === index
                              ? "shapes-and-solids-around-us_practice_question_bank"
                              : "addition-and-subtraction-1-to-20_practice_question_bank"
                          }`}
                        >
                          {item.courseName}
                        </div>
                        <img
                          onClick={() => handleCourseNameClick(index)}
                          className="small_screen_course_chevron_icon"
                          style={{
                            transform: `rotate(${
                              selectedCourseIndex === index ? "0" : "180"
                            }deg)`,
                          }}
                          src="assets\images\Practice\arrow_up.svg"
                        />
                      </div>
                    </div>

                    {/* Question categories for small screen  */}
                    {selectedCourseIndex === index && (
                      <div
                        className="small_screen_course_list"
                        style={{ marginLeft: "10px" }}
                      >
                        {selectedCourseCategory.map((category, catIndex) => (
                          <div
                            key={catIndex}
                            className="addition-multiple-dropdown"
                          >
                            <div
                              className={`${
                                isGradeSelected ||
                                selectedQuestionCategoryIndices.includes(
                                  catIndex
                                )
                                  ? "checkbox_Active_practice_question_bank"
                                  : "checkbox_practice_question_bank"
                              }`}
                              onClick={() => handleQuestionCategory(catIndex)}
                              style={{ cursor: "pointer" }}
                            >
                              <div
                                className={`${
                                  isGradeSelected ||
                                  selectedQuestionCategoryIndices.includes(
                                    catIndex
                                  )
                                    ? "frame_Active_practice_question_bank"
                                    : "frame_practice_question_bank"
                                }`}
                              >
                                {(isGradeSelected ||
                                  selectedQuestionCategoryIndices.includes(
                                    catIndex
                                  )) && (
                                  <img
                                    className="frame2_practice_question_bank"
                                    src="assets\images\Practice\tick_img.svg"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="frame-1707480338">
                              <div className="frame-1707480336">
                                <div className="representation-of-numbers ellipse_text_practice">
                                  {category.questionCatergoryName}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="frame-1707480370_practice2">
                <div className="frame-1707480471_practice">
                  <div className="frame-1707480470_practice" />
                </div>
                <button
                  type="button"
                  disabled={!disablePracticeButton}
                  className={`${
                    disablePracticeButton
                      ? "frame-1707480311_practice_enable"
                      : "frame-1707480311_practice"
                  }`}
                  onClick={handleShow}
                >
                  <div className="practice_practice">Practice</div>
                </button>
              </div>
            </div>
          </div>
          <div className="frame-1707480371_practice_question_bank">
            {GradeData.gradeCourse.length > 0 && (
              <>
                <div className="frame-1707480799_practice_question_bank">
                  {selectedCourseCategory.map((category, index) => (
                    <div className="w-100">
                      <div className="frame-1707480222_practice_question_bank">
                        <div className="frame-1707480220_practice_question_bank">
                          <div className="frame-1707480223_practice_question_bank">
                            <div className="shapes-and-solids-around-us2_practice_question_bank">
                              {
                                GradeData.gradeCourse[selectedCourseIndex]
                                  ?.courseName
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div key={index} className="addition-multiple-dropdown">
                        <div
                          className={`${
                            selectedQuestionCategoryIndices.includes(index)
                              ? "checkbox_Active_practice_question_bank"
                              : "checkbox_practice_question_bank"
                          }`}
                          onClick={() => handleQuestionCategory(index)}
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className={`${
                              selectedQuestionCategoryIndices.includes(index)
                                ? "frame_Active_practice_question_bank"
                                : "frame_practice_question_bank"
                            }`}
                          >
                            {selectedQuestionCategoryIndices.includes(
                              index
                            ) && (
                              <img
                                className="frame2_practice_question_bank"
                                src="assets\images\Practice\tick_img.svg"
                              />
                            )}
                          </div>
                        </div>
                        <div className="frame-1707480338">
                          <div className="frame-1707480336">
                            <div className="representation-of-numbers ">
                              {category.questionCatergoryName}
                              <img
                                className=""
                                style={{
                                  transform: `rotate(${
                                    1 === 1 ? "0" : "180"
                                  }deg)`,
                                  cursor:"pointer"
                                }}
                                src="assets\images\Practice\arrow_down.svg"
                                onClick={handleShowQuestionSubCategory}
                              />
                            </div>
                          </div>
                          {isShowSubQuestionCategory && (
                            <>
                              <div className="frame-1707480339">
                                <div className="frame-1707480340_practice_question_bank">
                                  <div className="frame-17074803392_practice_question_bank">
                                    <div className="addition-multiple-dropdown2_practice_question_bank">
                                      <div className="frame-17074803382_practice_question_bank">
                                        <div className="frame-17074803362_practice_question_bank">
                                          {category.questionSubCatergory.map(
                                            (subItem: any, subIndex: any) => (
                                              <div
                                                key={subIndex}
                                                className="numerals-and-number-names"
                                              >
                                                {subItem.Name}
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="frame-1707480370_practice">
              <div className="frame-1707480471_practice">
                <div className="frame-1707480470_practice" />
              </div>
              <button
                type="button"
                disabled={!disablePracticeButton}
                className={`${
                  disablePracticeButton
                    ? "frame-1707480311_practice_enable"
                    : "frame-1707480311_practice"
                }`}
                onClick={handleShow}
              >
                <div className="practice_practice">Practice</div>
              </button>
            </div>
          </div>
        </div>
        <Modal
          centered={true}
          show={show}
          onHide={handleClose}
          backdrop="static"
          size={screenSize}
        >
          <Modal.Header>
            <div className="logo_board">
              <img
                className="vertical-minds-logo-blue-01-1_board"
                src="assets/images/Vertical Minds Logo Blue-01 1.svg"
              />
              <div className="frame-1707480584_board">
                <div className="button_board" onClick={handleClose}>
                  <img
                    className="remove_board"
                    src="assets/images/remove.svg"
                  />
                </div>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column gap-4">
              <div className="options_practice_question_bank">
                <div className="start-your-practice_practice_question_bank">
                  Start your practice
                </div>
                <div className="begin-your-learning-journey-with-interactive-exercises-designed-to-enhance-your-skills-and-knowledge_practice_question_bank">
                  Begin your learning journey with interactive exercises
                  designed to enhance your skills and knowledge.
                </div>
                <div className="frame-1707480592_practice_question_bank">
                  <div className="difficulty-lever_practice_question_bank">
                    <div
                      className={`${
                        selectedLevelTypeOption === "easy"
                          ? "cell-open_practice_question_bank2"
                          : "cell-open_practice_question_bank"
                      }`}
                      onClick={() => handleSelectLevelType("easy")}
                    >
                      <div
                        className={`${
                          selectedLevelTypeOption === "easy"
                            ? "frame-1707480682_practice_question_bank2"
                            : "frame-1707480682_practice_question_bank"
                        }`}
                      >
                        <div className="frame-1707480685_practice_question_bank">
                          <div
                            className={`${
                              selectedLevelTypeOption === "easy"
                                ? "rectangle-34625063_practice_question_bank2"
                                : "rectangle-34625063_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedLevelTypeOption === "easy"
                                ? "rectangle-34625064_practice_question_bank2"
                                : "rectangle-34625064_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedLevelTypeOption === "easy"
                                ? "rectangle-34625065_practice_question_bank2"
                                : "rectangle-34625065_practice_question_bank"
                            }`}
                          />
                        </div>
                        <div
                          className={`${
                            selectedLevelTypeOption === "easy"
                              ? "_04_practice_question_bank2"
                              : "_04_practice_question_bank"
                          }`}
                        >
                          Easy
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        selectedLevelTypeOption === "medium"
                          ? "cell-open2_practice_question_bank2"
                          : "cell-open2_practice_question_bank"
                      }`}
                      onClick={() => handleSelectLevelType("medium")}
                    >
                      <div className="frame-1707480683_practice_question_bank">
                        <div
                          className={`${
                            selectedLevelTypeOption === "medium"
                              ? "frame-1707480686_practice_question_bank2"
                              : "frame-1707480686_practice_question_bank"
                          }`}
                        >
                          <div
                            className={`${
                              selectedLevelTypeOption === "medium"
                                ? "rectangle-346250632_practice_question_bank2"
                                : "rectangle-346250632_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedLevelTypeOption === "medium"
                                ? "rectangle-346250642_practice_question_bank2"
                                : "rectangle-346250642_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedLevelTypeOption === "medium"
                                ? "rectangle-346250652_practice_question_bank2"
                                : "rectangle-346250652_practice_question_bank"
                            }`}
                          />
                        </div>
                        <div
                          className={`${
                            selectedLevelTypeOption === "medium"
                              ? "_042_practice_question_bank2"
                              : "_042_practice_question_bank"
                          }`}
                        >
                          Medium
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        selectedLevelTypeOption === "hard"
                          ? "cell-1-open_practice_question_bank2"
                          : "cell-1-open_practice_question_bank"
                      }`}
                      onClick={() => handleSelectLevelType("hard")}
                    >
                      <div className="frame-1707480684_practice_question_bank">
                        <div className="frame-1707480687_practice_question_bank">
                          <div
                            className={`${
                              selectedLevelTypeOption === "hard"
                                ? "rectangle-346250633_practice_question_bank2"
                                : "rectangle-346250633_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedLevelTypeOption === "hard"
                                ? "rectangle-346250643_practice_question_bank2"
                                : "rectangle-346250643_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedLevelTypeOption === "hard"
                                ? "rectangle-346250653_practice_question_bank2"
                                : "rectangle-346250653_practice_question_bank"
                            }`}
                          />
                        </div>
                        <div
                          className={`${
                            selectedLevelTypeOption === "hard"
                              ? "_043_practice_question_bank2"
                              : "_043_practice_question_bank"
                          }`}
                        >
                          Hard
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="frame-1707480593_practice_question_bank">
                  <div className="question-type_practice_question_bank">
                    Question Type
                  </div>
                  <div className="question-selection_practice_question_bank">
                    <div
                      className="frame-1707480594_practice_question_bank"
                      onClick={() => handleOptionClick("new")}
                    >
                      <div className="radio-button-1_practice_question_bank">
                        <div className="frame-4_practice_question_bank">
                          <div
                            className={`${
                              selectedOption === "new"
                                ? "ellipse-2_practice_question_bank"
                                : "ellipse-22_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedOption === "new"
                                ? "ellipse-1_practice_question_bank"
                                : "ellipse-22_practice_question_bank"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="show-me-new-questions-only_practice_question_bank">
                        Show me new questions only
                      </div>
                    </div>
                    <div
                      className="frame-1707480595_practice_question_bank"
                      onClick={() => handleOptionClick("repeat")}
                    >
                      <div className="radio-button-12_practice_question_bank">
                        <div className="frame-3_practice_question_bank">
                          <div
                            className={`${
                              selectedOption === "repeat"
                                ? "ellipse-2_practice_question_bank"
                                : "ellipse-22_practice_question_bank"
                            }`}
                          />
                          <div
                            className={`${
                              selectedOption === "repeat"
                                ? "ellipse-1_practice_question_bank"
                                : "ellipse-22_practice_question_bank"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="repeat-questions-marked-incorrect_practice_question_bank">
                        Repeat questions marked incorrect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center align-items-center">
            <div className="bottom-btn_practice_question_bank">
              <div className="frame-1707480652_practice_question_bank">
                <div className="back_practice_question_bank">
                  <div
                    className="back2_practice_question_bank"
                    onClick={handleClose}
                  >
                    Cancel
                  </div>
                </div>
                <div className="back3_practice_question_bank">
                  <div
                    className="back4_practice_question_bank"
                    onClick={NavigateToPracticeQuestion}
                  >
                    Start Test
                  </div>
                </div>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Topic;
