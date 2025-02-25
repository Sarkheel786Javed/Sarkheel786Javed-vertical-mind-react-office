import { useState } from "react";
import "../../styles/EarnedPointsDashboard.css";
import PointSummaryTab from "../PointSummaryTab/PointSummaryTab.tsx";
import ReferFriendTab from "../ReferFriendTab/ReferFriendTab.tsx";
import DailyStreaksTab from "../DailyStreaksTab/DailyStreaksTab.tsx";
import ChallengeStreaksTab from "../ChallengeStreaksTab/ChallengeStreaksTab.tsx";
interface User {
  name: string;
  grade: number;
  AttemptChallenge: number;
  TotalChallengePoints: number;
}
interface User2 {
  ChallengeID: string;
  ChallengeName: string;
  Grade: number;
  Ranking: string;
  Points: number;
  Result: string;
}

function EarnedPointsDashboard() {
  const [tab, setTab] = useState<string>("my-participations-summary");
  const TabNavigate = (name: string) => {
    setTab(name);
  };
  const [users] = useState<User[]>([
    {
      name: "Ali 003",
      grade: 5,
      AttemptChallenge: 1,
      TotalChallengePoints: 99,
    },
  ]);
  const [users2] = useState<User2[]>([
    {
      ChallengeID: "--",
      ChallengeName: "Challenge test",
      Grade: 10,
      Ranking: "-1/3 (Rank : 1)",
      Points: 1,
      Result: "View",
    },
  ]);

  const TableComponent1 = () => {
    return (
      <>
        <div className="w-100" id="no-more-tables">
          <table className="">
            <thead>
              <tr>
                <th className="pad">Name</th>
                <th>Grade</th>
                <th>Attempt Challenge</th>
                <th>T.Challenge points</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item: User) => (
                <>
                  <tr>
                    <td data-title="Name" className="pad">
                      <div>{item.name}</div>
                    </td>
                    <td data-title="Grade">
                      <div>{item.grade}</div>
                    </td>
                    <td data-title="Attempt Challenge">
                      <div>{item.AttemptChallenge}</div>
                    </td>
                    <td data-title="T.Challenge points">
                      <div>{item.TotalChallengePoints}</div>
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
        <div className="w-100" id="no-more-tables2">
          <table className="">
            <thead>
              <tr>
                <th className="pad">ID</th>
                <th>Name</th>
                <th>Grade</th>
                <th>Ranking</th>
                <th>Points</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {users2.map((item: User2) => (
                <>
                  <tr>
                    <td data-title="Challenge ID" className="pad">
                      <div>{item.ChallengeID}</div>
                    </td>
                    <td data-title="Name">
                      <div>{item.ChallengeName}</div>
                    </td>
                    <td data-title="Grade">
                      <div>{item.Grade}</div>
                    </td>
                    <td data-title="Ranking">
                      <div>{item.Ranking}</div>
                    </td>
                    <td data-title="Points">
                      <div>{item.Points}</div>
                    </td>
                    <td data-title="Result">
                      <div>{item.Result}</div>
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
                <TableComponent1 />
              </>
            )}
            {tab === "point-summary-tab" && (
              <>
                <PointSummaryTab />
              </>
            )}
            {tab === "refer-friend" && (
              <>
                <ReferFriendTab />
              </>
            )}
            {tab === "daily-streaks" && (
              <>
                <DailyStreaksTab />
              </>
            )}
            {tab === "challenge-streak" && (
              <>
                <ChallengeStreaksTab />
              </>
            )}
          </div>
          {tab === "my-participations-summary" && (
            <>
              <div className="participation-summary_2 ">
                <div className="participation-summary_2_child">
                  <div className="participation-summary2">
                    Challenge Participation
                  </div>
                  <TableComponent2 />
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
