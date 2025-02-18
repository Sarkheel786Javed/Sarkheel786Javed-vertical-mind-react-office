import { useState } from "react";
import "../../styles/Tasks.css";
import Offcanvas from "react-bootstrap/Offcanvas";

function Tasks() {
  // Add Task buttons
  const [showAddTask, setShowAddTask] = useState(false);
  const [switchOn, setSwitchOff] = useState(false);
  const [switchOnAddLevel, setSwitchOffAddLevel] = useState(true);

  const handleAddSwitch = () => {
    setSwitchOff(!switchOn);
  };
  const handleSwitchAddLevel = () => {
    setSwitchOffAddLevel(!switchOnAddLevel);
  };
  const AddTaskhandleClose = () => {
    setShowAddTask(false);
    setSwitchOff(false);
    setSwitchOffAddLevel(true);
  };
  const AddTaskhandleShow = () => setShowAddTask(true);
  // Add Task buttons

  const [showAEditTask, setShowEditTask] = useState(false);
  const [editSwitchOn, setEditSwitchOff] = useState(false);
  const [switchOnEditLevel, setSwitchOffEditlevel] = useState(true);

  const handleEditSwitch = () => {
    setEditSwitchOff(!editSwitchOn);
  };
  const handleSwitchEditTask = () => {
    setSwitchOffEditlevel(!switchOnEditLevel);
  };
  const EditTaskhandleClose = () => setShowEditTask(false);
  const EditTaskhandleShow = () => {
    setShowEditTask(true);
    setEditSwitchOff(false);
    setEditSwitchOff(true);
  };
  return (
    <div>
      <div>
        {/* content */}
        <div className=" cover_list">
          {/* {/* ----------------- section one ---------------------- * /} */}
          <div className="conteiner-fluid">
            <div className="row my-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                <div className="task-table">
                  <div className="frame-1707480227">
                    <div className="frame-1707480240">
                      <div className="frame-1707480226">
                        <div className="tasks ">Tasks</div>
                        <div className="frame-1707480220">
                          <div className="frame-1707480224">
                            <div className="tasksearchsample">
                              <div className="item">
                                <input
                                  className="form-control w-100 rounded-pill"
                                  style={{ height: "44px" }}
                                  placeholder="Search by name"
                                />
                                <img
                                  className="_01-align-center"
                                  src="assets/images/Search_icon.svg"
                                />
                              </div>
                            </div>
                            <div className="Add-Task btn">
                              <div
                                className="add-task text-light"
                                onClick={AddTaskhandleShow}
                              >
                                Add Task
                              </div>
                              <img
                                className="plus-small-1"
                                src="assets/images/plus-small 1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive w-100">
                      <table className="Table">
                        <thead className="table_header rounded-1">
                          <tr>
                            <th scope="col" className="Table_Head_column_Task ps-3">
                              Name
                            </th>
                            <td scope="col" className="Table_Head_column_Task">
                              Type
                            </td>
                            <td scope="col" className="Table_Head_column_Task">
                              Points
                            </td>
                            <td scope="col" className="Table_Head_column_Task">
                              Level
                            </td>
                            <td scope="col" className="Table_Head_column_Task">
                              Bonus
                            </td>
                            <td scope="col" className="Table_Head_column_Task">
                              Level Criteria
                            </td>
                            <td scope="col" className="Table_Head_column_Task">
                              Level Points
                            </td>
                            <td scope="col" className="Table_Head_column_Task">
                              Status
                            </td>
                            <td scope="col" className="Table_Head_column_Task">
                              Action
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_tr table_tr_bg">
                            <td
                              scope="row"
                              className="ps-3"
                              style={{ width: "11.1%" }}
                            >
                              Complete...
                            </td>
                            <td style={{ width: "11.1%" }}>Complete...</td>
                            <td style={{ width: "11.1%" }}>100</td>
                            <td style={{ width: "11.1%" }}>Level 1</td>
                            <td style={{ width: "11.1%" }}>0</td>
                            <td style={{ width: "11.1%" }}>1</td>
                            <td style={{ width: "11.1%" }}>1</td>
                            <td style={{ width: "11.1%" }}>
                              <div className="d-flex justify-content-start align-items-center text-success">
                                Active
                              </div>
                            </td>
                            <td style={{ width: "11.1%" }}>
                              <div className="text-decoration-none d-flex justify-content-start w-auto">
                                <div
                                  className="view-Details w-auto btn"
                                  onClick={EditTaskhandleShow}
                                >
                                  <div className="view">View</div>
                                  <img
                                    className="eye-2-1"
                                    src="assets/images/eye (2) 1.svg"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="_3">
                      <div className="frame1-16">
                        <div className="showpagination">Show</div>
                        <div className="select-entries">
                          <div className="_10">10</div>
                          <img
                            className="bi-caret-down-fill"
                            src="assets/images/bi-caret-down-fill0.svg"
                          />
                        </div>
                        <div className="entries">Entries</div>
                      </div>
                      <div className="frame2-16">
                        <div className="previous">Previous</div>
                        <div className="active_page">
                          <div className="_1">1</div>
                        </div>
                        <div className="frame-162">
                          <div className="_2">2</div>
                        </div>
                        <div className="frame-17">
                          <div className="_2">3</div>
                        </div>
                        <div className="next3">Next</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {/* ----------------- section one end ---------------------- * /} */}
        {/* right sidebar  */}
        {/* Add Task */}
        <Offcanvas
          placement="end"
          show={showAddTask}
          onHide={AddTaskhandleClose}
          backdrop="static"
          backdropClassName="backtrop_fade_color"
        >
          <Offcanvas.Body>
            <div className="frame-1707480412">
              <button
                className="btn p-1  text-reset"
                type="button"
                onClick={AddTaskhandleClose}
              >
                <img src="assets/images/radix-icons_cross-1.svg" />
              </button>
              <div className="update-task">Task Details</div>
              <div className="w-100">
                <label className="label-span mb-2">Types</label>
                <span className="label-span ">*</span>
                <select
                  className="form-select w-100"
                  aria-label="Default select example"
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                >
                  <option selected>Select Task Type</option>
                  <option value={1}>Refer a Friend</option>
                  <option value={2}>Days Streak</option>
                  <option value={3}>Compete Profile</option>
                  <option value={3}>Challenge</option>
                </select>
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Name</label>
                <span className="label-2-span2">*</span>
                <input
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Complete Your Profile"
                />
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Points</label>
                <span className="label-2-span4">*</span>
                <input
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                  type="number"
                  className="form-control w-100"
                  placeholder="100"
                />
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Description</label>
                <textarea
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                  className="form-control w-100"
                  placeholder="........."
                  id="floatingTextarea"
                  defaultValue={""}
                />
              </div>
              <div className="input-field">
                <div className="frame-17074802302  w-1002">
                  <label className="label-span mb-2">Status</label>
                  <div className="frame-1707480243">
                    <div className="input3">
                      <div className="placeholder3">Active</div>
                    </div>
                    <div className="input4">
                      <div className="placeholder4">Inactive</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1707480248">
                <div className="input-field2">
                  <div className="frame-1707480228">
                    <div className="label4 ">Switch</div>
                    <div
                      className={`${
                        switchOn ? "property-1-default" : "property-1-variant-2"
                      }`}
                      onClick={handleAddSwitch}
                    >
                      <div
                        className={`${switchOn ? "ellipseon" : "ellipseoff"}`}
                      />
                      <div className={`${switchOn ? "on" : "off"}`}>
                        {switchOn ? <>ON</> : <>OFF</>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Days</label>
                <input
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                  type="number"
                  className="form-control w-100"
                  placeholder="100"
                />
              </div>
              <div className="frame-1707480248">
                <div className="input-field2">
                  <div className="frame-1707480228">
                    <div className="label4 ">Add Level</div>
                    <div
                      className={`${
                        switchOnAddLevel
                          ? "property-1-default"
                          : "property-1-variant-2"
                      }`}
                      onClick={handleSwitchAddLevel}
                    >
                      <div
                        className={`${
                          switchOnAddLevel ? "ellipseon" : "ellipseoff"
                        }`}
                      />
                      <div className={`${switchOnAddLevel ? "on" : "off"}`}>
                        {switchOnAddLevel ? <>ON</> : <>OFF</>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1707480246">
                <div className="task-levels ">Task Levels</div>
                <div className="no-levels-found">No Levels found</div>
              </div>
              <div className="frame-1707480253">
                <div className="back">
                  <div className="back2" onClick={AddTaskhandleClose}>
                    Cancel
                  </div>
                </div>
                <div className="back3">
                  <div className="back4" onClick={AddTaskhandleClose}>
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/* Edit Task */}
        <Offcanvas
          placement="end"
          show={showAEditTask}
          onHide={AddTaskhandleClose}
          backdrop="static"
          backdropClassName="backtrop_fade_color"
        >
          <Offcanvas.Body>
            <div className="frame-1707480412">
              <button
                className="btn p-1  text-reset"
                type="button"
                onClick={EditTaskhandleClose}
              >
                <img src="assets/images/radix-icons_cross-1.svg" />
              </button>
              <div className="update-task">Task Details</div>
              <div className="w-100">
                <label className="label-span mb-2">Types</label>
                <span className="label-span ">*</span>
                <select
                  className="form-select w-100"
                  aria-label="Default select example"
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                >
                  <option selected>Select Task Type</option>
                  <option value={1}>Refer a Friend</option>
                  <option value={2}>Days Streak</option>
                  <option value={3}>Compete Profile</option>
                  <option value={3}>Challenge</option>
                </select>
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Name</label>
                <span className="label-2-span2">*</span>
                <input
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Complete Your Profile"
                />
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Points</label>
                <span className="label-2-span4">*</span>
                <input
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                  type="number"
                  className="form-control w-100"
                  placeholder="100"
                />
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Description</label>
                <textarea
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                  className="form-control w-100"
                  placeholder="........."
                  id="floatingTextarea"
                  defaultValue={""}
                />
              </div>
              <div className="input-field">
                <div className="frame-17074802302  w-1002">
                  <label className="label-span mb-2">Status</label>
                  <div className="frame-1707480243">
                    <div className={1 == 1 ? "input2" : "input3"}>
                      <div className={1 == 1 ? "placeholder2" : "placeholder3"}>
                        Active
                      </div>
                    </div>
                    <div className={!1 ? "input2" : "input3"}>
                      <div className={!1 ? "placeholder2" : "placeholder3"}>
                        Inactive
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1707480248">
                <div className="input-field2">
                  <div className="frame-1707480228">
                    <div className="label4 ">Switch</div>
                    <div
                      className={`${
                        editSwitchOn
                          ? "property-1-default"
                          : "property-1-variant-2"
                      }`}
                      onClick={handleEditSwitch}
                    >
                      <div
                        className={`${
                          editSwitchOn ? "ellipseon" : "ellipseoff"
                        }`}
                      />
                      <div className={`${editSwitchOn ? "on" : "off"}`}>
                        {editSwitchOn ? <>ON</> : <>OFF</>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field2">
                  <div className="frame-1707480228">
                    <div className="label4 ">Add Level</div>
                    <div
                      className={`${
                        switchOnEditLevel
                          ? "property-1-default"
                          : "property-1-variant-2"
                      }`}
                      onClick={handleSwitchEditTask}
                    >
                      <div
                        className={`${
                          switchOnEditLevel ? "ellipseon" : "ellipseoff"
                        }`}
                      />
                      <div className={`${switchOnEditLevel ? "on" : "off"}`}>
                        {switchOnEditLevel ? <>ON</> : <>OFF</>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1707480246">
                <div className="task-levels ">Task Levels</div>
                <div className="no-levels-found">No Levels found</div>
              </div>
              <button
                type="button"
                className="w-100 rounded-pill btn btn-success"
                onClick={EditTaskhandleClose}
              >
                Submit
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Tasks;
