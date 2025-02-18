import "./PointSummaryTab.css";
import React from "react";

const PointSummaryTab: React.FC = () => {
  return (
    <div className="w-100">
      {/* section one */}
      <div className="frame-1707480282">
        <div className="frame-1707480258">
          <div className="frame">
            <img
              className="group"
              src="assets/images/total earning point.svg"
            />
          </div>
          <div className="total-earning-points-440490">
            <span>
              <span className="total-earning-points-440490-span">
                Total Earning Points
                <br />
              </span>
              <span className="total-earning-points-440490-span2">440490</span>
            </span>
          </div>
        </div>
      </div>
      {/* section two */}

      <div className="frame-1707480281">
        <div className="earned-points">Earned Points</div>
        <div className="frame-1707480218">
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
                <div className="level-2">Level 2</div>
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
        </div>
      </div>
    </div>
  );
};

export default PointSummaryTab;
