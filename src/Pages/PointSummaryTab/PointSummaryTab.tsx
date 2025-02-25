import "../../styles/PointSummaryTab.css";
import React, { useState } from "react";

const PointSummaryTab: React.FC = () => {
  interface User {
    TaskName: string;
    LevelName: string;
    Status: string;
    Points: number;
    DateTime: string;
  }
  const [users] = useState<User[]>([
    {
      TaskName: "Refer your friend",
      LevelName: "Level 2",
      Status: "Completed",
      Points: 440440,
      DateTime: "20 Dec, 2024 at 10:46 AM",
    },
    {
      TaskName: "Refer your friend",
      LevelName: "Level 2",
      Status: "Completed",
      Points: 440440,
      DateTime: "20 Dec, 2024 at 10:46 AM",
    },
    {
      TaskName: "Refer your friend",
      LevelName: "Level 2",
      Status: "Completed",
      Points: 440440,
      DateTime: "20 Dec, 2024 at 10:46 AM",
    },
    {
      TaskName: "Refer your friend",
      LevelName: "Level 2",
      Status: "Completed",
      Points: 440440,
      DateTime: "20 Dec, 2024 at 10:46 AM",
    },
  ]);
  const TableComponent1 = () => {
    return (
      <>
        <div className="w-100" id="PointSummaryTab">
          <table className="">
            <thead>
              <tr>
                <th className="pad">Task Name</th>
                <th>Level Name</th>
                <th>Status</th>
                <th>Points</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item: User) => (
                <>
                  <tr>
                    <td data-title="Task Name" className="pad">
                      <div>{item.TaskName}</div>
                    </td>
                    <td data-title="Level Name">
                      <div>{item.LevelName}</div>
                    </td>
                    <td data-title="Status">
                      <div>{item.Status}</div>
                    </td>
                    <td data-title="Points">
                      <div>{item.Points}</div>
                    </td>
                    <td data-title="Date & Time">
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
  return (
    <div className="w-100">
      {/* section one */}
      <div className="frame-1707480282_PointSummaryTab">
        <div className="frame-1707480258_PointSummaryTab">
          <div className="frame_PointSummaryTab">
            <img
              className="group_PointSummaryTab"
              src="assets/images/total earning point.svg"
            />
          </div>
          <div className="total-earning-points-440490_PointSummaryTab ">
            <span>
              <span className="total-earning-points-440490-span_PointSummaryTab">
                Total Earning Points
                <br />
              </span>
              <span className="total-earning-points-440490-span2_PointSummaryTab">440490</span>
            </span>
          </div>
        </div>
      </div>
      {/* section two */}

      <div className="frame-1707480281_PointSummaryTab">
        <div className="earned-points_PointSummaryTab">Earned Points</div>
        <TableComponent1 />

        {/* <div className="frame-1707480218">
          <div className="frame-9">
            <div className="frame-1">
              <div className="task-name">Task Name</div>
            </div>
            <div className="frame-2">
              <div className="level-name">Level Name</div>
            </div>
            <div className="frame-4">
              <div className="status">Status</div>
            </div>
            <div className="frame-7">
              <div className="points">Points</div>
            </div>
            <div className="frame-8">
              <div className="date-time">Date &amp; Time</div>
            </div>
          </div>
          <div className="frame-1707480217">
            <div className="frame-10">
              <div className="frame-1">
                <div className="refer-your-friend">Refer your friend</div>
              </div>
              <div className="frame-22">
                <div className="level-2-point-summary">Level 2</div>
              </div>
              <div className="frame-4">
                <div className="completed">Completed</div>
              </div>
              <div className="frame-82">
                <div className="_440440">440440</div>
              </div>
              <div className="frame-92">
                <div className="_20-dec-2024-at-10-46-am">
                  20 Dec, 2024 at 10:46 AM
                </div>
              </div>
            </div>
          </div>
          <div className="frame-17074802182">
            <div className="table-body-row">
              <div className="frame-1">
                <div className="_10-daily-streak">10 Daily Streak</div>
              </div>
              <div className="frame-22">
                <div className="daily-streak-starter">Daily Streak Starter</div>
              </div>
              <div className="frame-4">
                <div className="completed">Completed</div>
              </div>
              <div className="frame-82">
                <div className="_50">50</div>
              </div>
              <div className="frame-92">
                <div className="_20-dec-2024-at-11-46-am">
                  20 Dec, 2024 at 11:46 AM
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PointSummaryTab;
