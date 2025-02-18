import { useState } from "react";
import "../../styles/EarnedPointsDashboard.css";
import PointSummaryTab from "../PointSummaryTab/PointSummaryTab.tsx";
function EarnedPointsDashboard() {
  const [tab, setTab] = useState<string>("my-participations-summary");
  const TabNavigate = (name: string) => {
    setTab(name);
  };
  return (
    <div>
      <div className="frame-1707480426">
        <div className="frame-1707480369">
          <div className="participation-summary">
            <div className="tab-group">
              <img className="line" src="line0.svg" />
              <div className="tabs">
                <div
                  className={`${
                    tab === "my-participations-summary"
                      ? "active_tab"
                      : "unactive_tab"
                  }`}
                  onClick={() => TabNavigate("my-participations-summary")}
                >
                  <div className="line-height">
                    <div className="my-participations-summary2">
                      My Participations Summary
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    tab === "point-summary-tab" ? "active_tab" : "unactive_tab"
                  }`}
                  onClick={() => TabNavigate("point-summary-tab")}
                >
                  <div className="line-height">
                    <div className="point-summary2">Point Summary</div>
                  </div>
                  <div className="indicator2" />
                </div>
                <div
                  className={`${
                    tab === "refer-friend" ? "active_tab" : "unactive_tab"
                  }`}
                  onClick={() => TabNavigate("refer-friend")}
                >
                  <div className="line-height">
                    <div className="refer-friend2">Refer Friend</div>
                  </div>
                  <div className="indicator2" />
                </div>
                <div
                  className={`${
                    tab === "daily-streaks" ? "active_tab" : "unactive_tab"
                  }`}
                  onClick={() => TabNavigate("daily-streaks")}
                >
                  <div className="line-height">
                    <div className="daily-streaks2">Daily Streaks</div>
                  </div>
                  <div className="indicator3" />
                </div>
                <div
                  className={`${
                    tab === "challenge-streak" ? "active_tab" : "unactive_tab"
                  }`}
                  onClick={() => TabNavigate("challenge-streak")}
                >
                  <div className="line-height">
                    <div className="challenge-streak2">Challenge Streak</div>
                  </div>
                  <div className="indicator3" />
                </div>
                <div
                  className={`${
                    tab === "Class / School" ? "active_tab" : "unactive_tab"
                  }`}
                  onClick={() => TabNavigate("Class / School")}
                >
                  <div className="line-height">
                    <div className="class-school">Class / School</div>
                  </div>
                  <div className="indicator4" />
                </div>
              </div>
            </div>
            {tab === "my-participations-summary" && (
              <>
                <div className="participation-summary2">
                  Participation Summary
                </div>
                <div className="w-100 overflow-x-auto">
                  <div className="frame-1707480218">
                    <div className="frame-9">
                      <div className="frame-1">
                        <div className="name">Name</div>
                      </div>
                      <div className="frame-2">
                        <div className="grade">Grade</div>
                      </div>
                      <div className="frame-4">
                        <div className="attempt-challenge">
                          Attempt Challenge
                        </div>
                      </div>
                      <div className="frame-7">
                        <div className="total-challenge-points">
                          Total Challenge points
                        </div>
                      </div>
                    </div>
                    <div className="frame-9_2 bg-none">
                      <div className="frame-1">
                        <div className="name">Reward system student 1</div>
                      </div>
                      <div className="frame-2">
                        <div className="grade">--</div>
                      </div>
                      <div className="frame-4">
                        <div className="attempt-challenge">1</div>
                      </div>
                      <div className="frame-7">
                        <div className="total-challenge-points">50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {tab === "point-summary-tab" && (
              <>
                <PointSummaryTab />
              </>
            )}
          </div>
          {tab === "my-participations-summary" && (
            <>
              <div className="challenge-participation">
                <div className="challenge-participation2">
                  Challenge Participation
                </div>
                <div className="w-100 overflow-x-auto">
                  <div className="frame-1707480218">
                    <div className="frame-9">
                      <div className="frame-1">
                        <div className="challenge-id">Challenge ID</div>
                      </div>
                      <div className="frame-2">
                        <div className="challenge-name">Challenge Name</div>
                      </div>
                      <div className="frame-4">
                        <div className="grade">Grade</div>
                      </div>
                      <div className="frame-7">
                        <div className="ranking">Ranking</div>
                      </div>
                      <div className="frame-8">
                        <div className="points">Points</div>
                      </div>
                      <div className="frame-92">
                        <div className="result">Result</div>
                      </div>
                    </div>
                    <div className="frame-9_2">
                      <div className="frame-1">
                        <div className="challenge-id">--</div>
                      </div>
                      <div className="frame-2">
                        <div className="challenge-name">
                          Challenge for testing
                        </div>
                      </div>
                      <div className="frame-4">
                        <div className="grade">10th</div>
                      </div>
                      <div className="frame-7">
                        <div className="ranking">-1/3 (Rank : 1)</div>
                      </div>
                      <div className="frame-8">
                        <div className="points">50</div>
                      </div>
                      <div className="frame-92">
                        <div className="result">View</div>
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
  );
}

export default EarnedPointsDashboard;
