import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
import PointsRewardAchievements from "./Pages/PointRewardAchievements/PointRewardAchievements.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./Pages/Tasks/Tasks.tsx";
import UserBandge from "./Pages/UserBandge/UserBandge.tsx";
import ReferFriend from "./Pages/ReferFriend/ReferFriend.tsx";
import Layout from "./App/Layout.tsx";
import Benefits from "./Pages/Benefits/Benefits.tsx";
import BenefitRewardAchivement from "./Pages/BenefitRewardAchivement/BenefitRewardAchivement.tsx";
import EarnedPointsDashboard from "./Pages/EarnedPointsDashboard/EarnedPointsDashboard.tsx";
import Challenge from "./Pages/Challenge/Challenge.tsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.tsx";
import Question from "./Pages/Question/Question.tsx";
import Board from "./Pages/Board/Board.tsx";
import Topic from "./Pages/Topic/Topic.tsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/question"
            element={
              <Layout>
                <Question />
              </Layout>
            }
          />
          <Route
            path="/board"
            element={
              <Layout>
                <Board />
              </Layout>
            }
          />
          <Route
            path="/topic"
            element={
              <Layout>
                <Topic />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <ErrorPage />
              </Layout>
            }
          />
          <Route
            path="/challenge"
            element={
              <Layout>
                <Challenge />
              </Layout>
            }
          />
          <Route
            path="/Points-Reward-Achievements"
            element={
              <Layout>
                <PointsRewardAchievements />
              </Layout>
            }
          />
          <Route
            path="/Task"
            element={
              <Layout>
                <Tasks />
              </Layout>
            }
          />
          <Route
            path="/User-Badge"
            element={
              <Layout>
                <UserBandge />
              </Layout>
            }
          />
          <Route
            path="/Refer-Friend"
            element={
              <Layout>
                <ReferFriend />
              </Layout>
            }
          />
          <Route
            path="/Benefit"
            element={
              <Layout>
                <Benefits />
              </Layout>
            }
          />
          <Route
            path="/Benefit-Reward-Achievement"
            element={
              <Layout>
                <BenefitRewardAchivement />
              </Layout>
            }
          />
          <Route
            path="/Earned-Points-Dashboard"
            element={
              <Layout>
                <EarnedPointsDashboard />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
