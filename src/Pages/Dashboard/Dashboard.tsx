import "../../styles/Dashboard.css";
function Dashboard() {
  const user = {
    image: "/assets/images/vertical-mind.png",
    name: "Mr Ahmad Jamal",
  };
  return (
    <div className="container cover1">
      {/* ----------------- section one ---------------------- */}
      <div className="card border-0 rounded-5 radius24">
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="p-2">
              <div className="d-flex justify-content-center align-items-center">
                {user.image ? (
                  <>
                    <div className="user-profile border border-1">
                      <img
                        src={user.image}
                        width="100%"
                        height="100%"
                        alt=""
                        className="border"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="user-profile border" />
                  </>
                )}
              </div>
              <div className=" text-center">
                <h4 className="mt-2 userName">{user.name}</h4>
              </div>
              <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
                <div className="rounded-pill streak_count">
                  <img
                    src="assets/images/emojione-v1_ghost.png"
                    alt="emojione-v1_ghost.png"
                    width="16px"
                    height="16px"
                    className=""
                  />
                  <label htmlFor="streak-count" className="ms-1">
                    10,000,000
                  </label>
                </div>
                <div className="rounded-pill streak_day">
                  <img
                    src="assets/images/noto_fire.png"
                    alt="emojione-v1_ghost.png"
                    width="16px"
                    height="16px"
                    className=""
                  />
                  <label htmlFor="streak-count" className="ms-1">
                    5 day Streak
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 container-fluid py-3">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="progressbar-section p-1">
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="status">
                      <img className="" src="assets/images/silver.svg" />
                      <div className="frame-1707480257">
                        <div className="text">Silver</div>
                        <div className="badge" />
                      </div>
                    </div>
                    <div className="status2">
                      <div className="text">95%</div>
                      <div className="badge" />
                    </div>
                  </div>
                  <div className="progressbar">
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: `${95}%` }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="progressbar-section p-1">
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="status">
                      <img className="" src="assets/images/Gold.svg" />
                      <div className="frame-1707480257">
                        <div className="text">Gold</div>
                        <div className="badge" />
                      </div>
                    </div>
                    <div className="status2">
                      <div className="text">0%</div>
                      <div className="badge" />
                    </div>
                  </div>
                  <div className="progressbar">
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: `${0}%` }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="progressbar-section p-1">
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="status">
                      <img className="" src="assets/images/Diamond.svg" />
                      <div className="frame-1707480257">
                        <div className="text">Diamond</div>
                        <div className="badge" />
                      </div>
                    </div>
                    <div className="status2">
                      <div className="text">0%</div>
                      <div className="badge" />
                    </div>
                  </div>
                  <div className="progressbar">
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: `${0}%` }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------- section one end ---------------------- */}

      {/* ----------------- section two ---------------------- */}
      <div className="card border-0  mt-3 points radius24 p-2">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-3 d-flex justify-content-start">
              <div className="frame-1707480169">
                <div className="group-283">
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={40} cy={40} r={40} fill="#9259FF" />
                    <g clipPath="url(#clip0_20_664)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M38.8818 40.9725H51.93V42.2344C51.93 46.0888 50.4423 49.714 47.7422 52.4395C45.042 55.165 41.4503 56.6666 37.6317 56.6666C33.8131 56.6666 30.2214 55.165 27.5213 52.4395C24.8211 49.714 23.3334 46.0888 23.3334 42.2344C23.3334 38.38 24.8211 34.7547 27.5213 32.0293C30.2214 29.3038 33.8131 27.8022 37.6317 27.8022H38.8818V40.9725ZM49.364 43.4962H36.3816V30.3922C30.4618 31.0243 25.8337 36.0946 25.8337 42.2344C25.8337 48.8005 31.1265 54.1429 37.6317 54.1429C43.7146 54.1429 48.7378 49.4714 49.364 43.4962ZM41.1182 23.3333H42.3684C46.187 23.3333 49.7786 24.8349 52.4788 27.5603C55.179 30.2858 56.6667 33.9111 56.6667 37.7655V39.0273H41.1182V23.3333ZM43.6185 25.9233V36.5036H54.1007C53.5179 30.9433 49.1272 26.5115 43.6185 25.9233Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20_664">
                        <rect
                          width={40}
                          height={40}
                          fill="white"
                          transform="translate(20 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="frame-1707480168">
                  <div className="points">Points</div>
                  <div className="frame-1707480167">
                    <div className="_5">5</div>
                    <div className="how-to-withdraw">How to withdraw</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-3 d-flex justify-content-start">
              <div className="frame-1707480171">
                <div className="group-283">
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40.98" cy={40} r={40} fill="#4CCBA3" />
                    <g clipPath="url(#clip0_20_674)">
                      <path
                        d="M40.9806 56.6654C50.1854 56.6654 57.6473 49.2034 57.6473 39.9987C57.6473 30.794 50.1854 23.332 40.9806 23.332C31.7759 23.332 24.314 30.794 24.314 39.9987C24.314 49.2034 31.7759 56.6654 40.9806 56.6654Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M45.6466 35.0006C45.3447 34.4769 44.9061 34.0451 44.3776 33.7515C43.8492 33.4579 43.2508 33.3136 42.6466 33.3339H39.3133C38.4293 33.3339 37.5814 33.6851 36.9563 34.3102C36.3312 34.9354 35.98 35.7832 35.98 36.6673C35.98 37.5513 36.3312 38.3992 36.9563 39.0243C37.5814 39.6494 38.4293 40.0006 39.3133 40.0006H42.6466C43.5307 40.0006 44.3785 40.3518 45.0037 40.9769C45.6288 41.602 45.98 42.4499 45.98 43.3339C45.98 44.218 45.6288 45.0658 45.0037 45.6909C44.3785 46.3161 43.5307 46.6673 42.6466 46.6673H39.3133C38.7091 46.6876 38.1108 46.5432 37.5823 46.2497C37.0539 45.9561 36.6152 45.5243 36.3133 45.0006"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.98 30V33.3333M40.98 46.6667V50"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20_674">
                        <rect
                          width={40}
                          height={40}
                          fill="white"
                          transform="translate(20.98 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="frame-1707480170">
                  <div className="level">Level</div>
                  <div className="silver">Silver</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-3 d-flex justify-content-start">
              <div className="frame-1707480173">
                <div className="group-283">
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40.96" cy={40} r={40} fill="#0B8A44" />
                    <g clipPath="url(#clip0_20_686)">
                      <path
                        d="M35.9606 38.3333C39.6425 38.3333 42.6273 35.3486 42.6273 31.6667C42.6273 27.9848 39.6425 25 35.9606 25C32.2787 25 29.2939 27.9848 29.2939 31.6667C29.2939 35.3486 32.2787 38.3333 35.9606 38.3333Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.96 55V51.6667C25.96 49.8986 26.6623 48.2029 27.9126 46.9526C29.1628 45.7024 30.8585 45 32.6266 45H39.2933C41.0614 45 42.7571 45.7024 44.0073 46.9526C45.2576 48.2029 45.96 49.8986 45.96 51.6667V55"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M47.626 25.2168C49.06 25.584 50.331 26.418 51.2387 27.5873C52.1464 28.7567 52.639 30.1948 52.639 31.6751C52.639 33.1554 52.1464 34.5936 51.2387 35.7629C50.331 36.9323 49.06 37.7663 47.626 38.1335"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M55.96 54.9971V51.6637C55.9515 50.1923 55.4565 48.7651 54.5521 47.6044C53.6477 46.4437 52.3847 45.6149 50.96 45.2471"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20_686">
                        <rect
                          width={40}
                          height={40}
                          fill="white"
                          transform="translate(20.96 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="frame-1707480172">
                  <div className="invited-friends">Invited Friends</div>
                  <div className="level-1-1-level-2-10">
                    <span className="d-flex flex-wrap justify-content-start align-items-center">
                      <span className="level-1-1-level-2-10-span">
                        Level 1:1
                      </span>
                      <span className="level-1-1-level-2-10-span2" />
                      <span className="level-1-1-level-2-10-span3">
                        / Level 2:10
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------- section two end ---------------------- */}
      {/* ----------------- section three ---------------------- */}
      <div className="row my-3">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <div className="frame-1707480178">
            <div className="card rectangle-12065 border-0 radius24">
              <div className=" card-header next border-0">
                <img className="vector" src="assets/images/email.svg" />
                <div className="verify-email">Verify Email</div>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div className="frame-1707480176">
                  <div className="points_email">Points</div>
                  <div className="_50">50</div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="button btn mb-3">
                  <div className="next2">Verify</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <div className="frame-1707480178">
            <div className="card rectangle-12065 border-0 radius24">
              <div className=" card-header next border-0">
                <img className="vector" src="assets/images/facebook.svg" />
                <div className="verify-email">Share User Feedback</div>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div className="frame-1707480176">
                  <div className="points_email">Points</div>
                  <div className="_50">50</div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="button btn mb-3">
                  <div className="next2">Share</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <div className="frame-1707480178">
            <div className="card rectangle-12065 border-0 radius24">
              <div className=" card-header next border-0">
                <img className="vector" src="assets/images/x.svg" />
                <div className="verify-email">Follow us on X</div>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div className="frame-1707480176">
                  <div className="points_email">Points</div>
                  <div className="_50">50</div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="button btn mb-3">
                  <div className="next2">Follow</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <div className="frame-1707480178">
            <div className="card rectangle-12065 border-0 radius24">
              <div className=" card-header next border-0">
                <img className="vector" src="assets/images/user.svg" />
                <div className="verify-email">Refer a friend</div>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div className="frame-1707480176">
                  <div className="points_email">Points</div>
                  <div className="_50">50</div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="button btn mb-3">
                  <div className="next2">Refer</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------- section three end ---------------------- */}
    </div>
  );
}

export default Dashboard;
