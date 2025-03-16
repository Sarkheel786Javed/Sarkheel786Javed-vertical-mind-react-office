import { useState } from "react";
import "../../styles/DailyStreaksTab.css";
import Offcanvas from "react-bootstrap/Offcanvas";

// dont touch this code and their css just sent tatal and obtained marks accordin to the types
// it willl automatically work
interface RoundProgressBarProps {
  obtainedMarks: number;
  totalMarks: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const RoundProgressBar: React.FC<RoundProgressBarProps> = ({
  obtainedMarks = 15,
  totalMarks = 100,
}) => {
  const color = "#009146";
  const size = 182;
  const strokeWidth = 20;
  // Calculate progress percentage
  const progress = (obtainedMarks / totalMarks) * 100;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="round-progress-bar" style={{ width: size, height: size }}>
      <div className="center_of_bar">
        <svg width={size} height={size}>
          <circle
            className="background"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="rgba(0, 145, 70, 0.2)"
            fill="none"
          />
          <circle
            className="progress"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={color}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round" // Rounded edges
            transform={`rotate(90 ${size / 2} ${size / 2})`}
          />
        </svg>

        <div className="frame-1707480270">
          <div className="frame-1707480190">
            <img className="" src="assets/images/bar-streak-img.svg" />
            <div className="frame-1707480188-round-progress-bar">
              <div className="day">Day</div>
            </div>
          </div>
          <div className="_1-45">
            {obtainedMarks}/{totalMarks}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Card {
  day: number;
  imageSrc: string;
  claimed: string;
  status: number;
}

const cards: Card[] = [
  {
    day: 1,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 1,
  },
  {
    day: 2,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 2,
  },
  {
    day: 3,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 4,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 5,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 6,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 7,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 8,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 9,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 10,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 11,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 12,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 13,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 14,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 15,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 16,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 17,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 18,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 19,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 20,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 21,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 22,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 23,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 24,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 25,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 26,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 27,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
  {
    day: 28,
    imageSrc: "assets/images/fire.svg",
    claimed: "Claimed",
    status: 3,
  },
];
function DailyStreaksTab() {
  // card carousel dont touch this functionality \\
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const cardsPerPage = 3;

  const nextCards = () => {
    if (currentIndex < cards.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCards = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= cards.length;
  // /////////////////////////////////////////////////// \\
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const handleCloseHistory = () => {
    setShowHistory(false);
  };
  const handleShowHistory = () => {
    setShowHistory(true);
  };
  const data = [
    {
      SerialNo: 1,
      Date: "20 Dec, 2024 AT 10:27 AM",
      Status: "In Progress",
      PointsEarned: "0",
    },
    {
      SerialNo: 1,
      Date: "20 Dec, 2024 AT 10:27 AM",
      Status: "Completed",
      PointsEarned: "0",
    },
    {
      SerialNo: 1,
      Date: "20 Dec, 2024 AT 10:27 AM",
      Status: "In Progress",
      PointsEarned: "0",
    },
    {
      SerialNo: 1,
      Date: "20 Dec, 2024 AT 10:27 AM",
      Status: "Break",
      PointsEarned: "0",
    },
  ];
  const TableComponent1 = () => {
    return (
      <>
        <div className="w-100" id="dailystreakTab">
          <table className="">
            <thead>
              <tr>
                <th className="pad">Sr. No</th>
                <th>Date</th>
                <th>Status</th>
                <th>Points Earned</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 2).map((item) => (
                <>
                  <tr>
                    <td data-title="Sr. No" className="pad">
                      <div>{item.Date}</div>
                    </td>
                    <td data-title="Date">
                      <div>{item.Date}</div>
                    </td>
                    <td data-title="Status">
                      <div>
                        {item.Status === "In Progress" && (
                          <div className="frame-1707480267">
                            <div className="ellipse-454" />
                            <div className="in-progress">In Progress</div>
                          </div>
                        )}
                        {item.Status === "Completed" && (
                          <div className="frame-1707480267">
                            <div className="ellipse-453" />
                            <div className="completed">Completed</div>
                          </div>
                        )}
                        {item.Status === "Break" && (
                          <div className="frame-1707480267">
                            <div className="ellipse-4532" />
                            <div className="break">Break</div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td data-title="Points Earned">
                      <div>{item.PointsEarned}</div>
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
  const TableComponent2 = () => {
    return (
      <>
        <div className="w-100" id="dailystreakTab">
          <table className="">
            <thead>
              <tr>
                <th className="pad">Sr. No</th>
                <th>Date</th>
                <th>Status</th>
                <th>Points Earned</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(1, 4).map((item) => (
                <>
                  <tr>
                    <td data-title="Sr. No" className="pad">
                      <div>{item.Date}</div>
                    </td>
                    <td data-title="Date">
                      <div>{item.Date}</div>
                    </td>
                    <td data-title="Status">
                      <div>
                        {item.Status === "In Progress" && (
                          <div className="frame-1707480267">
                            <div className="ellipse-454" />
                            <div className="in-progress">In Progress</div>
                          </div>
                        )}
                        {item.Status === "Completed" && (
                          <div className="frame-1707480267">
                            <div className="ellipse-453" />
                            <div className="completed">Completed</div>
                          </div>
                        )}
                        {item.Status === "Break" && (
                          <div className="frame-1707480267">
                            <div className="ellipse-4532" />
                            <div className="break">Break</div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td data-title="Points Earned">
                      <div>{item.PointsEarned}</div>
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

  return (
    <>
      <div className="page_wrapper-daily-streaks">
        <div className="daily-streaks">Daily Streaks</div>
        <div className="level 1">
          <div className="scroll">
            <div className="frame-1707480223-daily-streaks-tab">
              <div className="frame-1707480220-daily-streaks-tab">
                <div className="frame-17074802232-daily-streaks-tab">
                  <div className="frame-1707480190-daily-streaks-tab">
                    <div className="frame-1707480188-daily-streaks-tab">
                      <div className="status-daily-streaks-tab">STATUS :</div>
                    </div>
                    <div className="frame-1707480268-daily-streaks-tab">
                      <div className="ellipse-454-daily-streaks-tab" />
                      <div className="incomplete-daily-streaks-tab">
                        Incomplete
                      </div>
                    </div>
                  </div>
                  <div className="frame-1707480226-daily-streaks-tab">
                    <div className="frame-1707480188-daily-streaks-tab">
                      <div className="earned-points-daily-streaks-tab">
                        EARNED POINTS :
                      </div>
                    </div>
                    <div className="frame-1707480268-daily-streaks-tab">
                      <div className="_440-440">440,440</div>
                    </div>
                  </div>
                  <div className="carousel-controls-1">
                    <button
                      className="btn bg-none px-0 py-0"
                      onClick={prevCards}
                      disabled={isPrevDisabled}
                    >
                      {!isPrevDisabled ? (
                        <>
                          <img
                            src="assets/images/angle-circle-left-isPrevEnabled.svg"
                            alt="Previous"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src="assets/images/angle-circle-left-isPrevDisabled.svg"
                            alt="Previous"
                          />
                        </>
                      )}
                    </button>
                    <button
                      className="btn bg-none px-0 py-0"
                      onClick={nextCards}
                      disabled={isNextDisabled}
                    >
                      {!isPrevDisabled ? (
                        <>
                          <img
                            className="angle-circle-right-1"
                            src="assets/images/angle-circle-right-isNextEnabled.svg"
                            alt="Next"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            className="angle-circle-right-1"
                            src="assets/images/angle-circle-right-isNextDisabled.svg"
                            alt="Next"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="streak_cover">
            <div className="frame-1707480195-daily-strek-tab">
              <div className="frame-1707480190">
                <RoundProgressBar obtainedMarks={1} totalMarks={45} />
                <div className="frame-17074801882">
                  <div className="level-1">LEVEL 1</div>
                </div>
                <div className="frame-1707480191">
                  <div className="_01-dec-24-14-jan-25">
                    01 DEC, 24 - 14 JAN, 25
                  </div>
                </div>
              </div>
            </div>
            {/* carousel */}
            <div className="carousel-controls-2">
              <button
                className="btn bg-none px-0 py-0"
                onClick={prevCards}
                disabled={isPrevDisabled}
              >
                {!isPrevDisabled ? (
                  <>
                    <img
                      src="assets/images/angle-circle-left-isPrevEnabled.svg"
                      alt="Previous"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="assets/images/angle-circle-left-isPrevDisabled.svg"
                      alt="Previous"
                    />
                  </>
                )}
              </button>
              <button
                className="btn bg-none px-0 py-0"
                onClick={nextCards}
                disabled={isNextDisabled}
              >
                {!isPrevDisabled ? (
                  <>
                    <img
                      className="angle-circle-right-1"
                      src="assets/images/angle-circle-right-isNextEnabled.svg"
                      alt="Next"
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="angle-circle-right-1"
                      src="assets/images/angle-circle-right-isNextDisabled.svg"
                      alt="Next"
                    />
                  </>
                )}
              </button>
            </div>
            <div className="carousel_cover">
              <div className="carousel-inner-daily-streaks">
                <div
                  className="cards-container-daily-streaks"
                  style={{
                    transform: `translateX(calc(-${
                      currentIndex * (100 / 1)
                    }% + 20px))`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {cards.map((card, index) => (
                    <div key={index} className="frame-1707480205-daily-streaks">
                      <div className="frame-1707480190-daily-streaks">
                        <div className="">
                          {card.status === 1 ? (
                            <div>
                              <img
                                className=""
                                src="assets/images/fire.svg"
                                alt={`Day ${card.day}`}
                              />
                            </div>
                          ) : (
                            <div>
                              <img
                                className=""
                                src="assets/images/fire_2.svg"
                                alt={`Day ${card.day}`}
                              />
                            </div>
                          )}
                        </div>
                        <div className="frame-1707480188-daily-streaks">
                          <div
                            className={`${
                              card.status === 1
                                ? "day-daily-streaks"
                                : "day-daily-streaks-2"
                            }`}
                          >
                            Day {card.day}
                          </div>
                        </div>
                        <div
                          className={`${
                            card.status === 1
                              ? "button-upgrade-now-daily-streaks"
                              : "button-upgrade-now-2"
                          }`}
                        >
                          {card.status === 1 ? (
                            <div>
                              <div className="claimed-daily-streaks">
                                Claimed
                              </div>
                            </div>
                          ) : card.status === 2 ? (
                            <div>
                              <div className="claimed-daily-streaks-2">
                                Claim
                              </div>
                            </div>
                          ) : card.status === 3 ? (
                            <div className="claimed-daily-streaks-2">
                              <img
                                src="assets/images/lock.svg"
                                alt={`lock-streak ${card.day}`}
                                className=""
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* View History button */}
          <div
            className="w-100 d-flex justify-content-center align-items-center py-5"
            onClick={handleShowHistory}
          >
            <div className="frame-1707480211">
              <div className="frame-1707480213">
                <div className="view-history_daily_streak">View History</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas
        placement="end"
        show={showHistory}
        onHide={handleCloseHistory}
        backdrop="static"
        backdropClassName="backtrop_fade_color hello"
        className="Offcanvas_daily_streak"
      >
        <Offcanvas.Header className="offcanvas_header">
          <>
            <div className="frame-1000002761-header">
              <div className="frame-1707480551-header">
                <div className="frame-1000002997-header">
                  <div className="frame-1000003004-header">
                    <div className="view-task-task-header">View History</div>
                  </div>
                </div>
                <div className="frame-1707480584-header">
                  <div
                    className="button-task-header"
                    onClick={handleCloseHistory}
                  >
                    <img
                      className="mdi-edit-outline-header"
                      src="assets/images/radix-icons_cross-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="frame-1707480274_view_history">
            <div id="table">
              <div className="frame-1707480241">
                <div className="frame-1707480222">
                  <div className="frame-1707480220">
                    <div className="frame-1707480223">
                      <div className="level-2">Level 2</div>
                      <div className="frame-1707480225">
                        <div className="frame-1707480226">
                          <div className="frame-1707480188">
                            <div className="earned-points">EARNED POINTS :</div>
                          </div>
                          <div className="frame-1707480268">
                            <div className="_50">0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-17074802232">
                  <div className="frame-1707480332">
                    <div className="log-in-points">LOG IN POINTS :</div>
                    <div className="frame-1707480268">
                      <div className="_40">40</div>
                    </div>
                  </div>
                  <div className="frame-1707480333">
                    <div className="level-points-daily_streak">
                      LEVEL POINTS :
                    </div>
                    <div className="frame-1707480268">
                      <div className="_20">20</div>
                    </div>
                  </div>
                  <div className="frame-1707480334">
                    <div className="bonus-points">BONUS POINTS :</div>
                    <div className="_10">10</div>
                  </div>
                </div>
                {/* table responsiveness */}
                <TableComponent1 />
              </div>
            </div>
            <div id="table">
              <div className="frame-1707480241">
                <div className="frame-1707480222">
                  <div className="frame-1707480220">
                    <div className="frame-1707480223">
                      <div className="level-2">Level 1</div>
                      <div className="frame-1707480225">
                        <div className="frame-1707480226">
                          <div className="frame-1707480188">
                            <div className="earned-points">EARNED POINTS :</div>
                          </div>
                          <div className="frame-1707480268">
                            <div className="_50">0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-17074802232">
                  <div className="frame-1707480332">
                    <div className="log-in-points">LOG IN POINTS :</div>
                    <div className="frame-1707480268">
                      <div className="_40">40</div>
                    </div>
                  </div>
                  <div className="frame-1707480333">
                    <div className="level-points-daily_streak">
                      LEVEL POINTS :
                    </div>
                    <div className="frame-1707480268">
                      <div className="_20">20</div>
                    </div>
                  </div>
                  <div className="frame-1707480334">
                    <div className="bonus-points">BONUS POINTS :</div>
                    <div className="_10">10</div>
                  </div>
                </div>
                {/* table responsiveness */}
                <TableComponent2 />
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DailyStreaksTab;
