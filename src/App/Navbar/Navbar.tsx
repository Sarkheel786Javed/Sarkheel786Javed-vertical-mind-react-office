import { Link, NavLink, useLocation } from "react-router";
import "../../styles/navbar.css";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const location = useLocation();
  const [showSubChild, setShowSubChild] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const path = [
    "/Benefit",
    "/Benefit-Reward-Achievement",
    "/Task",
    "/User-Badge",
    "/Earned-Points-Dashboard",
    "/Points-Reward-Achievements",
    "/Refer-Friend",
    "/",
  ];

  useEffect(() => {
    handleClose()
    if (path.includes(location.pathname)) {
      setHovered(true);
      setShowSubChild(false);
    } else {
      setShowSubChild(false);
      setHovered(false);
      
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setShowSubChild(!showSubChild);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const smallScreen = () => {
    return (
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        backdrop="static"
        backdropClassName="backtrop_fade_color"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <button
              type="button"
              className="btn-close text-reset"
              onClick={handleClose}
            ></button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-content" >
            <Link to="/" className="nav-item text-decoration-none" >
              <div className="nav-item2" >
                <div className="nav-item3">Dashboard</div>
              </div>
            </Link>
            <Link to="/home" className="nav-item text-decoration-none">
              <div className="nav-item2">
                <div className="nav-item3">Home</div>
              </div>
            </Link>
            <Link to="/course" className="nav-item text-decoration-none">
              <div className="nav-item2">
                <div className="nav-item3">Course</div>
              </div>
            </Link>
            <Link to="/about-us" className="nav-item text-decoration-none">
              <div className="nav-item2">
                <div className="nav-item3">About Us</div>
              </div>
            </Link>
            <Link to="/contact-us" className="nav-item text-decoration-none">
              <div className="nav-item2">
                <div className="nav-item3">Contact</div>
              </div>
            </Link>
            <div
              className=""
              onMouseEnter={() => setHovered(true)}
              onClick={toggleMenu}
            >
              <div
                className={`table-top-bar ${
                  hovered ? "dropdown_active" : "dropdown_unactive"
                }`}
                style={{
                  backgroundColor: hovered ? "#0b8a44" : "transparent",
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                <div className="point-summary">
                  <div className="frame-1707480279">
                    <div
                      className={`task-management ${
                        hovered ? "text-light" : "text-dark"
                      }`}
                    >
                      Task Management
                    </div>
                    <img
                      className="arrow-drop-down"
                      src={
                        hovered
                          ? "assets/images/Navbar/arrow_drop_down_white.svg"
                          : "assets/images/Navbar/arrow_drop_down.svg"
                      }
                      alt="Arrow"
                    />
                  </div>
                </div>
              </div>
              {showSubChild && (
                <ul className="sub_child ">
                  <NavLink
                    to="/Benefit"
                    className="nav-item text-decoration-none"
                  >
                    <div className="nav-item2">
                      <div className="nav-item3">Benefit </div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/Benefit-Reward-Achievement"
                    className="nav-item text-decoration-none"
                  >
                    <div className="nav-item2">
                      <div className="nav-item3">
                        Benefit Reward Achievement
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="/Task" className="nav-item text-decoration-none">
                    <div className="nav-item2">
                      <div className="nav-item3">Task</div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/User-Badge"
                    className="nav-item text-decoration-none"
                  >
                    <div className="nav-item2">
                      <div className="nav-item3">User Badge</div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/Earned-Points-Dashboard"
                    className="nav-item text-decoration-none"
                  >
                    <div className="nav-item2">
                      <div className="nav-item3">Earned Points Dashboard</div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/Points-Reward-Achievements"
                    className="nav-item text-decoration-none"
                  >
                    <div className="nav-item2">
                      <div className="nav-item3">
                        Points Reward Achievements
                      </div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/Refer-Friend"
                    className="nav-item text-decoration-none"
                  >
                    <div className="nav-item2">
                      <div className="nav-item3">Refer Friend</div>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/"
                    className="nav-item text-decoration-none"
                  >
                    <div className="nav-item2">
                      <div className="nav-item3">Reward System Dashboard</div>
                    </div>
                  </NavLink>
                </ul>
              )}
            </div>
            <div className="auth_Wrapper">
              <NavLink to="/" className="text-decoration-none">
                <button type="button" className="Register btn">
                  <div className="Register2">Register</div>
                </button>
              </NavLink>

              <NavLink to="/" className="text-decoration-none">
                <button type="button" className="Login btn">
                  <div className="Login2">Login</div>
                </button>
              </NavLink>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
  };

  return (
    <div className="navbar">
      <Link to="/" className="text-decoration-none">
        <img
          id="group"
          src="/assets/images/Navbar/vertical_mind_logo.svg"
          alt="Logo"
        />
      </Link>

      <button
        id="toggleButton"
        className="btn"
        type="button"
        onClick={handleShow}
      >
        <img
          src="assets/images/Navbar/ri_menu-3-fill.svg"
          alt=""
          className=""
        />
      </button>
      <div className="wrapper">
        <div className="content">
          <NavLink
            to="/"
            onClick={() => setHovered(false)}
            className="nav-item text-decoration-none"
          >
            <div className="nav-item2">
              <div className="nav-item3">Dashboard</div>
            </div>
          </NavLink>
          <NavLink
            to="/home"
            onClick={() => setHovered(false)}
            className="nav-item text-decoration-none"
          >
            <div className="nav-item2">
              <div className="nav-item3">Home</div>
            </div>
          </NavLink>
          <NavLink
            to="/course"
            onClick={() => setHovered(false)}
            className="nav-item text-decoration-none"
          >
            <div className="nav-item2">
              <div className="nav-item3">Course</div>
            </div>
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={() => setHovered(false)}
            className="nav-item text-decoration-none"
          >
            <div className="nav-item2">
              <div className="nav-item3">About Us</div>
            </div>
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={() => setHovered(false)}
            className="nav-item text-decoration-none"
          >
            <div className="nav-item2">
              <div className="nav-item3">Contact</div>
            </div>
          </NavLink>
          <div
            className={`table-top-bar ${
              hovered ? "dropdown_active" : "dropdown_unactive"
            }`}
            onMouseEnter={() => [setHovered(true), setShowSubChild(true)]}
            onMouseLeave={() => {
              setHovered(false);
              setShowSubChild(false);
            }}
            style={{
              backgroundColor: hovered ? "#0b8a44" : "transparent",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <div className="point-summary">
              <div className="frame-1707480279">
                <div
                  className={`task-management ${
                    hovered ? "text-light" : "text-dark"
                  }`}
                >
                  Task Management
                </div>
                <img
                  className="arrow-drop-down"
                  src={
                    hovered
                      ? "assets/images/Navbar/arrow_drop_down_white.svg"
                      : "assets/images/Navbar/arrow_drop_down.svg"
                  }
                  alt="Arrow"
                />
              </div>
            </div>
            {showSubChild && (
              <ul
                className="dropdown-menu rounded-0 show"
                aria-labelledby="dropdownMenuButton1"
              >
                <NavLink
                  to="/Benefit"
                  className="nav-item text-decoration-none"
                >
                  <div className="nav-item2">
                    <div className="nav-item3">Benefit </div>
                  </div>
                </NavLink>
                <NavLink
                  to="/Benefit-Reward-Achievement"
                  className="nav-item text-decoration-none"
                >
                  <div className="nav-item2">
                    <div className="nav-item3">Benefit Reward Achievement </div>
                  </div>
                </NavLink>
                <NavLink to="/Task" className="nav-item text-decoration-none">
                  <div className="nav-item2">
                    <div className="nav-item3">Task</div>
                  </div>
                </NavLink>
                <NavLink
                  to="/User-Badge"
                  className="nav-item text-decoration-none"
                >
                  <div className="nav-item2">
                    <div className="nav-item3">User Badge</div>
                  </div>
                </NavLink>
                <NavLink
                  to="/Earned-Points-Dashboard"
                  className="nav-item text-decoration-none"
                >
                  <div className="nav-item2">
                    <div className="nav-item3">Earned Points Dashboard</div>
                  </div>
                </NavLink>
                <NavLink
                  to="/Points-Reward-Achievements"
                  className="nav-item text-decoration-none"
                >
                  <div className="nav-item2">
                    <div className="nav-item3">Points Reward Achievements</div>
                  </div>
                </NavLink>
                <NavLink
                  to="/Refer-Friend"
                  className="nav-item text-decoration-none"
                >
                  <div className="nav-item2">
                    <div className="nav-item3">Refer Friend</div>
                  </div>
                </NavLink>
                <NavLink
                  to="/"
                  className="nav-item text-decoration-none"
                >
                  <div className="nav-item2">
                    <div className="nav-item3">Reward System Dashboard</div>
                  </div>
                </NavLink>
              </ul>
            )}
          </div>
        </div>
        <div className="auth_Wrapper">
          <button type="button" className="Register btn">
            <div className="Register2">Register</div>
          </button>
          <button type="button" className="Login btn">
            <div className="Login2">Login</div>
          </button>
        </div>
      </div>

      {/* Offcanvas */}
      {smallScreen()}
    </div>
  );
}

export default Navbar;
