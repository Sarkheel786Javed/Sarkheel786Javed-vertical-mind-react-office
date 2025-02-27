import { useState } from "react";
import "../../styles/Challenges.css";
interface Card {
  ChallengeID: number;
  Grade: string;
  Winner: string;
  YourScore: string;
  YourRank: number;
  DateTime: string;
}

const cards: Card[] = [
  {
    ChallengeID: 123412,
    Grade: "Grade 5",
    Winner: "Sheikh hamdani",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023",
  },
  {
    ChallengeID: 123412,
    Grade: "Grade 5",
    Winner: "Sheikh hamdani",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023",
  },
  {
    ChallengeID: 123412,
    Grade: "Grade 5",
    Winner: "Sheikh hamdani",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023",
  },
  {
    ChallengeID: 123412,
    Grade: "Grade 5",
    Winner: "Sheikh hamdani",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023",
  },
  {
    ChallengeID: 123412,
    Grade: "Grade 5",
    Winner: "Sheikh hamdani",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023",
  },
  {
    ChallengeID: 123412,
    Grade: "Grade 5",
    Winner: "Sheikh hamdani",
    YourScore: "99/100",
    YourRank: 99,
    DateTime: "24th, Dec, 2023",
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
                <th className="pad"> ID</th>
                <th>Grade</th>
                <th>Winner</th>
                <th> Score</th>
                <th> Rank</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cards.slice(0, 10).map((item: Card, index) => (
                <>
                  <tr key={index}>
                    <td data-title="ID" className="pad">
                      <div>{item.ChallengeID}</div>
                    </td>
                    <td data-title="Grade">
                      <div>{item.Grade}</div>
                    </td>
                    <td data-title="Winner">
                      <div>{item.Winner}</div>
                    </td>
                    <td data-title="Score">
                      <div>{item.YourScore}</div>
                    </td>
                    <td data-title="Rank">
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
                <th className="pad"> ID</th>
                <th>Grade</th>
                <th>Winner</th>
                <th> Score</th>
                <th> Rank</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cards.slice(0, 10).map((item: Card, index) => (
                <>
                  <tr key={index}>
                    <td data-title="ID" className="pad">
                      <div>{item.ChallengeID}</div>
                    </td>
                    <td data-title="Grade">
                      <div>{item.Grade}</div>
                    </td>
                    <td data-title="Winner">
                      <div>{item.Winner}</div>
                    </td>
                    <td data-title="Score">
                      <div>{item.YourScore}</div>
                    </td>
                    <td data-title="Rank">
                      <div>{item.YourRank}</div>
                    </td>
                    <td data-title="Date">
                      <div>{item.DateTime}</div>
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  //   const cardsPerPage = 3;

  const nextCards = () => {
    if (currentIndex < carouselist.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCards = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= carouselist.length;
  return (
    <div>
      <div className="frame_1707480602_challanges">
        <div className="frame_1707480601_challanges">
          {/* head section start  */}

          <div className="frame_1707480111_challanges">
            <div className="frame_27_challanges h-100">
              <div className="">
                <div className="september-4-2023_challanges">
                  September 4, 2023
                </div>

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
            <div className="d-flex justify-content-center align-items-center gap-2 px-2">
              <button
                className="button_carousel_previous border-0 "
                style={{marginLeft:"10px"}}
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
                      transform: `translateX(calc(-${
                        currentIndex * (100 / 1)
                      }% ))`,
                      transition: "transform 0.5s ease-in-out",
                    }}
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
                              src={`assets/images/challenges/Vector-${
                                1 + (index % colors.length)
                              }.svg`}
                            />
                            <div className="button-upgrade-now_challenges">
                              <div
                                className="start_challenges"
                                style={{
                                  color: colors[1 + (index % colors.length)],
                                }}
                              >
                                Start
                              </div>
                              <div className="frame-1707479493_challenges">
                                <img
                                  className="vector2_challenges"
                                  src={`assets/images/challenges/button-icon-${
                                    1 + (index % colors.length)
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
                              src={`assets/images/challenges/vector-icon-${
                                1 + (index % colors.length)
                              }.svg`}
                            />
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="button_carousel_next border-0"
                style={{marginRight:"10px"}}
                onClick={nextCards}
                disabled={isNextDisabled}
              >
                <img src="assets/images/challenges/carousel-right.svg" alt="" />
              </button>{" "}
            </div>
            {/* carousel section  end*/}
          </div>
          {/* timer section end */}
          <div className="frame_1707480109_challenge">
            <div className="results-of-last-challenge">
              Results of last challenge
            </div>
            <TableComponent />
            <div className="d-flex justify-content-center align-items-center w-100 py-3">
              <div className="frame-1707480211_challenge">
                <div className="frame-1707480213_challenge">
                  <div className="view-full-summary_challenge">
                    View full summary
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame_1707480109_challenge">
            <div className="results-of-last-challenge">
              Your participation in challenges
            </div>
            <TableComponent2 />
            <div className="d-flex justify-content-center align-items-center w-100 py-3">
              <div className="frame-1707480211_challenge">
                <div className="frame-1707480213_challenge">
                  <div className="view-full-summary_challenge">
                    View full summary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
