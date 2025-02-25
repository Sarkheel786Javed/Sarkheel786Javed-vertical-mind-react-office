import { useState } from "react";
import "../../styles/ChallengeStreaksTab.css";
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
];
function DailyStreaksTab() {
  // card carousel dont touch this functionality \\
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const cardsPerPage = 3;

  const nextCards = () => {
    debugger;
    if (currentIndex < cards.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCards = () => {
    debugger;
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === cards.length;
  // /////////////////////////////////////////////////// \\
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const handleCloseHistory = () => {
    setShowHistory(false);
  };
  const handleShowHistory = () => {
    setShowHistory(true);
  };
  return (
    <>
      <div className="page_wrapper-daily-streaks">
        <div className="daily-streaks">Challenge Streaks</div>
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
        backdropClassName="backtrop_fade_color"
        className="Offcanvas_daily_streak"
      >
        <Offcanvas.Header>
          <div
            className="cancel-daily-streak-challenge-streak"
            onClick={handleCloseHistory}
          >
            <img src="assets/images/offcanvas-close-daily-streak.svg" />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="frame-1707480274_view_history-challenge-streak">
            <div className="frame-1707480394-challenge-streak">
              <div className="streak-history-challenge-streak">
                Streak History
              </div>
              <div className="frame-1707480261-challenge-streak">
                <div className="frame-1707480218-challenge-streak">
                  <div className="frame-1707480223-challenge-streak">
                    <div className="frame-1707480332-challenge-streak">
                      <div className="log-in-points-challenge-streak">
                        LOG IN POINTS :
                      </div>
                      <div className="frame-1707480268-challenge-streak">
                        <div className="_50-challenge-streak">50</div>
                      </div>
                    </div>
                    <div className="frame-1707480333-challenge-streak">
                      <div className="level-points-challenge-streak">
                        LEVEL POINTS :
                      </div>
                      <div className="frame-1707480268-challenge-streak">
                        <div className="_50-challenge-streak">50</div>
                      </div>
                    </div>
                    <div className="frame-1707480334-challenge-streak">
                      <div className="bonus-points-challenge-streak">
                        BONUS POINTS :
                      </div>
                      <div className="_50-challenge-streak">50</div>
                    </div>
                  </div>
                  <div className="frame-9-challenge-streak">
                    <div className="frame-1-challenge-streak">
                      <div className="number-of-attempt-challenge-streak">
                        Number. Of Attempt
                      </div>
                    </div>
                    <div className="frame-2-challenge-streak">
                      <div className="start-date-challenge-streak">
                        Start Date
                      </div>
                    </div>
                    <div className="frame-4-challenge-streak">
                      <div className="end-date-challenge-streak">End Date</div>
                    </div>
                    <div className="frame-7-challenge-streak">
                      <div className="status-challenge-streak">Status</div>
                    </div>
                    <div className="frame-8-challenge-streak">
                      <div className="days">Days</div>
                    </div>
                    <div className="frame-92-challenge-streak">
                      <div className="earned-points-challenge-streak">
                        Earned Points
                      </div>
                    </div>
                  </div>
                  <div className="frame-9-challenge-streak-body">
                    <div className="frame-1-challenge-streak">
                      <div className="number-of-attempt-challenge-streak-body">
                        1
                      </div>
                    </div>
                    <div className="frame-2-challenge-streak">
                      <div className="start-date-challenge-streak-body">
                        7 Dec, 2024 at 05:51 PM
                      </div>
                    </div>
                    <div className="frame-4-challenge-streak">
                      <div className="end-date-challenge-streak-body">
                        7 Dec, 2024 at 05:51 PM
                      </div>
                    </div>
                    <div className="frame-7-challenge-streak">
                      <div className="status-challenge-streak-body">
                        In-Progress
                      </div>
                    </div>
                    <div className="frame-8-challenge-streak">
                      <div className="days">--</div>
                    </div>
                    <div className="frame-92-challenge-streak">
                      <div className="earned-points-challenge-streak-body">
                        50
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DailyStreaksTab;
