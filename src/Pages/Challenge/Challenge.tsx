import "../../styles/Challenges.css";
import { Link } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const cards = [
  {
    GradeId: 1,
    Grade: "Grade 100",
    Winner: "Sheikh 1234",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023 ",
  },
  {
    GradeId: 1,
    Grade: "Grade 2",
    Winner: "Ali Hamza 1234 124 1234 1234 1234 1234 1234",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023 ",
  },
  {
    GradeId: 1,
    Grade: "Grade 3",
    Winner: "Muhammad Ali",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023 ",
  },
  {
    GradeId: 1,
    Grade: "Grade grad 5",
    Winner: "Sheikh",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023 ",
  },
  {
    GradeId: 1,
    Grade: "Grade grad 5",
    Winner: "Sheikh",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023 ",
  },
  {
    GradeId: 1,
    Grade: "Grade grad 5",
    Winner: "Sheikh",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023 ",
  },
];
function Challenge() {
  const TableComponent = () => {
    return (
      <>
        <div className="w-100" id="challenges">
          <table className="">
            <thead>
              <tr>
                <th className="pad">Challenge ID</th>
                <th>Grade</th>
                <th>Winner</th>
                <th>Your Score</th>
                <th>Your Rank</th>
                <th>Date & Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cards.slice(0, 3).map((item, index) => (
                <>
                  <tr key={index}>
                    <td data-title="Challenge ID" className="pad">
                      <div>{item.GradeId}</div>
                    </td>
                    <td data-title="Grade">
                      <div>{item.Grade}</div>
                    </td>
                    <td data-title="Winner">
                      <div className="ellipse_text">{item.Winner}</div>
                    </td>
                    <td data-title="Your Score">
                      <div>{item.YourScore}</div>
                    </td>
                    <td data-title="Your Rank">
                      <div>{item.YourRank}</div>
                    </td>
                    <td data-title="Date">
                      <div>{item.DateTime}</div>
                    </td>
                    <td data-title="">
                      <div className="challenges_cup_cover">
                        <img
                          src="assets/images/challenges_cup.svg"
                          alt="challenges_cup"
                        />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const colors = [
    " #05602D ",
    " #1877F2 ",
    "#FF5765",
    "#FF782D",
    "#1877F2",
    "#7751FE",
    "#4A3AFF",
  ];

  const TableComponent2 = () => {
    return (
      <>
        <div className="w-100" id="challenges2">
          <table className="">
            <thead>
              <tr>
                <th className="pad">Challenge ID</th>
                <th >Grade</th>
                <th>Your Score</th>
                <th>Your Rank</th>
                <th>Date & Time</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {cards.slice(0, 3).map((item, index) => (
                <>
                  <tr key={index}>

                    <td data-title="Challenge ID" className="pad">
                      <div>{item.GradeId}</div>
                    </td>
                    <td data-title="Grade">
                      <div>{item.Grade}</div>
                    </td>

                    <td data-title="Your Score">
                      <div>{item.YourScore}</div>
                    </td>
                    <td data-title="Your Rank">
                      <div>{item.YourRank}</div>
                    </td>
                    <td data-title="Date">
                      <div>{item.DateTime}</div>
                    </td>
                    <td data-title="Date">
                      <div className="click_here_challenges">Click here</div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const carouselist = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
  ];

  // carousel cards 

  const responsive = {
    one: {
      breakpoint: { max: 2560, min: 2325 },
      items: 10,
    },
    two: {
      breakpoint: { max: 2324, min: 2141 },
      items: 9,
    },
    three: {
      breakpoint: { max: 2141, min: 1936 },
      items: 8,
    },
    four: {
      breakpoint: { max: 1936, min: 1749 },
      items: 7,
    },
    five: {
      breakpoint: { max: 1749, min: 1540 },
      items: 6,
    },
    six: {
      breakpoint: { max: 1540, min: 1313 },
      items: 5.5,
    },
    seven: {
      breakpoint: { max: 1313, min: 1126 },
      items: 4.5,
    },
    eight: {
      breakpoint: { max: 1126, min: 831 },
      items: 4,
    },
    nine: {
      breakpoint: { max: 831, min: 733 },
      items: 3.5,
    },
    ten: {
      breakpoint: { max: 733, min: 647 },
      items: 3,
    },
    eleven: {
      breakpoint: { max: 647, min: 549 },
      items: 2.5,
    },
    twelve: {
      breakpoint: { max: 549, min: 461 },
      items: 2,
    },
    thirteen: {
      breakpoint: { max: 461, min: 371 },
      items: 1.5,
    },
    fourrteen: {
      breakpoint: { max: 371, min: 320 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="frame_1707480602_challanges">
        <div className="frame_1707480601_challanges">
          {/* head section start  */}

          <div className="frame_1707480111_challanges">
            <div className="frame_27_challanges">
              <div className="">
                <div className="september-4-2023_challanges">September 4</div>

                <div className="welcome-back-john_challanges mb-2 mt-4">
                  Welcome back, John!
                </div>
                <div className="always-stay-updated-in-your-student-portal_challanges">
                  Always stay updated in your student portal
                </div>
              </div>
            </div>
            <div className="img_cover_challenges ">
              <img
                className="_5-college-student_challanges"
                src="assets/images/Scholarcap scroll.svg"
              />
            </div>
          </div>
          {/* head section start  */}
          {/* timer section */}
          <div className="frame_1707480110_challenges">
            <div className="Timer_Cover_challenges">
              <div className="ongoing_challenges">Ongoing Challenges</div>
              <div className="the_timer_below_challanges">
                The timer below shows the remaining time (GMT). Once the time is
                up, your results will be displayed!
              </div>
              <div className="group-2_challenges">
                <div className="_08-12-44-28_challenges">08 : 12 : 44 : 28</div>
                <div className="days_challenges">Days</div>
                <div className="hours_challenges">Hours</div>
                <div className="minutos_challenges">Minutes</div>
                <div className="seconds_challenges">Seconds</div>
              </div>
            </div>
            <div className="the_timer_below_challanges d-flex justify-content-start">
              Class Wise Competition: A thrilling challenge for Grades 4–12 to
              showcase talent and win big!
            </div>
            {/* carousel section */}

            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-0-px"
            >
              {carouselist.map((item, index) => (
                <>
                  <div
                    key={item.id}
                    className="frame-1707480205_challenge"
                  >
                    <div
                      key={index}
                      className="in-app-banner-vi-01_challenges"
                      style={{
                        background: colors[index % colors.length],
                      }}
                    >
                      <img
                        className="vector_challenges"
                        src={`assets/images/challenges/Vector-${1 + (index % colors.length)
                          }.svg`}
                      />
                      <div className="button-upgrade-now_challenges">
                        <div
                          className="start_challenges"
                          style={{
                            color: colors[(index % colors.length)],
                          }}
                        >
                          Start
                        </div>
                        <div className="frame-1707479493_challenges">
                          <img
                            className="vector2_challenges"
                            src={`assets/images/challenges/button-icon-${1 + (index % colors.length)
                              }.svg`}
                          />
                        </div>
                      </div>
                      <div className="frame-1707480111_challenges">
                        <div className="grade_challenges">Grade</div>
                        <div className="_04_challenges">
                          {index >= 9 ? index + 1 : `0${index + 1}`}
                        </div>
                      </div>
                      <img
                        className="m_challenges"
                        src={`assets/images/challenges/vector-icon-${1 + (index % colors.length)
                          }.svg`}
                      />
                    </div>
                  </div>
                </>
              ))}
            </Carousel>

            {/* <div className="d-flex justify-content-center align-items-center gap-2 px-2">
              <button
                className="button_carousel_previous border-0 "
                style={{ marginLeft: "10px" }}
                onClick={prevCards}
                disabled={isPrevDisabled}
              >
                <img src="assets/images/challenges/carousel-left.svg" alt="" />
              </button>
              <div className="carousel_cover_challenge">
                <div className="carousel-inner_challenge">
                  <div
                    className="cards-container_challenge"
                    style={{
                      transform: `translateX(calc(-${currentIndex * (100 / 1)
                        }% ))`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                  >
                 
                  </div>
                </div>
              </div>
              <button
                className="button_carousel_next border-0"
                style={{ marginRight: "10px" }}
                onClick={nextCards}
                disabled={isNextDisabled}
              >
                <img src="assets/images/challenges/carousel-right.svg" alt="" />
              </button>{" "}
            </div> */}
            {/* carousel section  end*/}
          </div>
          {/* timer section end */}
          <div className="frame_1707480109_challenge">
            <div className="results-of-last-challenge">
              Results of last challenge
            </div>
            <TableComponent />
            <div className="view_more_cover w-100">
              <Link
                to="/Earned-Points-Dashboard"
                className="text-decoration-none"
              >
                <div className="frame-1707480211_2_challenge">
                  <div className="frame-1707480213_challenge">
                    <div className="view-full-summary_challenge">View More</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="frame_1707480109_challenge">
            <div className="results-of-last-challenge">
              Your participation in challenges
            </div>
            <TableComponent2 />
            <div className="view_more_cover w-100">
              <Link
                to="/Earned-Points-Dashboard"
                className="text-decoration-none"
              >
                <div className="frame-1707480211_challenge">
                  <div className="frame-1707480213_challenge">
                    <div className="view-full-summary_challenge">View More</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
