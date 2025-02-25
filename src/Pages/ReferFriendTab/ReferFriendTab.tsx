import { useEffect, useState } from "react";
import styles from "../../styles/ReferFriendTab.module.css";
interface Points {
  AcceptancePoints: number;
  LevelPoints: number;
  BonusPoints: number;
}
interface Item {
  ReferenceName: string;
  AcceptedDate: string;
  status: string;
  points: number;
}
interface ReferFriendData {
  levelName: string;
  levelpoints: number;
  totalfirends: number;
  referralLinkusedfriend: number;
  status: string;
  points: Points;
  itemsData: Item[];
}

const Data = [
  {
    levelName: "Level 1",
    levelpoints: 440490,
    totalfirends: 3,
    referralLinkusedfriend: 3,
    status: "Complete",
    points: { AcceptancePoints: 10, LevelPoints: 440491, BonusPoints: 15 },
    itemsData: [
      {
        ReferenceName: "Ali Yaseen",
        AcceptedDate: "20-Dec-2024",
        status: "Accepted",
        points: 440490,
      },
      {
        ReferenceName: "Ali Hamza",
        AcceptedDate: "20-Dec-2024",
        status: "Accepted",
        points: 440490,
      },
      {
        ReferenceName: "Ali Ahmad",
        AcceptedDate: "20-Dec-2024",
        status: "Accepted",
        points: 440490,
      },
    ],
  },
  {
    levelName: "Level 2",
    levelpoints: 440490,
    totalfirends: 2,
    referralLinkusedfriend: 2,
    status: "Complete",
    points: { AcceptancePoints: 5, LevelPoints: 440490, BonusPoints: 10 },
    itemsData: [
      {
        ReferenceName: "Ali Yaseen",
        AcceptedDate: "20-Dec-2024",
        status: "Accepted",
        points: 440490,
      },
      {
        ReferenceName: "Ali Hamza",
        AcceptedDate: "20-Dec-2024",
        status: "Accepted",
        points: 440490,
      },
    ],
  },
];
function ReferFriendTab() {
  const [data, setData] = useState<ReferFriendData[]>([]);
  useEffect(() => {
    setData(Data);
  }, []);

  return (
    <div className="w-100">
      {/* search section */}
      <div className={`${styles.frame_1707480223_referfriend_tab}`}>
        <div className={`${styles.refer_friend}`}>Refer Friend</div>
        <div className={`${styles.frame_1707480225_referfriend_tab}`}>
          <div className={`${styles.sample}`}>
            <div className={`${styles.item}`}>
              <input
                className={`form-control w-100 rounded-pill`}
                style={{ height: "44px" }}
                placeholder="Search by name"
              />
              <img
                className={`${styles._01_align_center}`}
                src="assets/images/Search_icon.svg"
              />
            </div>
          </div>
          <div className={`${styles.frame_1707480211}`}>
            <div className={`${styles.frame_1707480213}`}>
              <div className={`${styles.refer_new_friend}`}>
                Refer New Friend
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tables section */}
      {data.map((row, index) => (
        <>
          <div className={`mt-3  ${styles.frame_1707480329}`}>
            <div className={`${styles.table_referfriend_tab}`}>
              <div className={`${styles.frame_1707480327}`}>
                <div className={`${styles.group36}`}>
                  <img
                    src={`assets/images/Refer-Friend-Levels/level-${
                      index + 1
                    }.svg`}
                  />
                </div>
                <div className={`${styles.frame_1707480326}`}>
                  <div className={`${styles.frame_1707480258_referfriend_tab}`}>
                    <div className={`${styles.frame_1707480324}`}>
                      <div className={`${styles.frame_13}`}>
                        <div className={`${styles.level_1}`}>
                          {row.levelName} :
                        </div>
                        <div className={`${styles._440490}`}>
                          {row.levelpoints}
                        </div>
                      </div>
                      <div className={`${styles.frame_5434}`}>
                        <div className={`${styles.friends_1}`}>
                          Friends {row.referralLinkusedfriend} :
                        </div>
                        <div className={`${styles.usedreferel_1}`}>
                          {row.referralLinkusedfriend}/{row.totalfirends}
                        </div>
                      </div>
                      <div className={`${styles.frame_5435}`}>
                        <div className={`${styles.complete}`}>{row.status}</div>
                      </div>
                      <div
                        className={`${styles.frame_5436_referfriend_tab}`}
                        data-bs-toggle="dropdown"
                      >
                        <div className={`${styles.see_all}`}>See All</div>
                      </div>
                      <div
                        className={`dropdown-menu border-0`}
                        style={{
                          maxWidth: "240px",
                          backgroundColor: "#ffffff00",
                        }}
                      >
                        <div className={`${styles.points_dropdown_menu}`}>
                          <div className={`${styles.dropdown_option_item2}`}>
                            <div className={`${styles.frame_17074803282}`}>
                              <div className={`${styles.acceptance_points}`}>
                                Acceptance Points
                              </div>
                              <div className={`${styles._0}`}>0</div>
                            </div>
                          </div>
                          <div className={`${styles.dropdown_option_item2}`}>
                            <div className={`${styles.frame_17074803282}`}>
                              <div className={`${styles.level_points}`}>
                                Level Points
                              </div>
                              <div className={`${styles._0}`}>0</div>
                            </div>
                          </div>
                          <div className={`${styles.dropdown_option_item2}`}>
                            <div className={`${styles.frame_17074803282}`}>
                              <div className={`${styles.bonus_points}`}>
                                Bonus Points
                              </div>
                              <div className={`${styles._0}`}>0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100" id={`${styles.ReferFriendTab}`}>
                <table className="">
                  <thead>
                    <tr>
                      <th className="pad">Reference Name</th>
                      <th>Accepted Date</th>
                      <th>Status</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {row.itemsData.map((item) => (
                      <>
                        <tr>
                          <td data-title="Reference Name" className="pad">
                            <div>{item.ReferenceName}</div>
                          </td>
                          <td data-title="Accepted Date">
                            <div>{item.AcceptedDate}</div>
                          </td>
                          <td data-title="Status">
                            <div>{item.status}</div>
                          </td>
                          <td data-title="Points">
                            <div>{item.points}</div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default ReferFriendTab;
