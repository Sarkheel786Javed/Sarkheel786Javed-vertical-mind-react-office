import { useEffect, useState } from "react";
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
  const AddTaskhandleShow = () => {
    EditTaskhandleClose();
    setShowAddTask(true);
  };
  // edit Task buttons

  const [showAEditTask, setShowEditTask] = useState(false);
  const EditTaskhandleClose = () => setShowEditTask(false);
  const EditTaskhandleShow = () => {
    setShowEditTask(true);
  };
  const handleOpenEditModel = () => {
    AddTaskhandleShow();
    EditTaskhandleClose();
  };

  const [validLevelName, setValidLevelName] = useState<boolean>(false);
  useEffect(()=>{
    setValidLevelName(false);
  },[])
 
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
                      <div className="frame-1707480226-task">
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
                                className="add-task"
                                onClick={AddTaskhandleShow}
                              >
                                Add Task
                              </div>
                              <i className="bi bi-plus add-task fs-3"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive w-100">
                      <table className="Table">
                        <thead className="table_header">
                          <tr>
                            <th
                              scope="col"
                              className="Table_Head_column_Task-header ps-3"
                            >
                              Name
                            </th>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Type
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Points
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Level
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Bonus
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Level Criteria
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Level Points
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Status
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Status
                            </td>
                            <td scope="col" className="Table_Head_column_Task-header">
                              Action
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_tr table_tr_bg">
                            <td
                              scope="row"
                              className="ps-3 Table_Head_column_Task"
                            >
                              Complete...
                            </td>
                            <td className="Table_Head_column_Task">
                              Complete...
                            </td>
                            <td className="Table_Head_column_Task">100</td>
                            <td className="Table_Head_column_Task">Level 1</td>
                            <td className="Table_Head_column_Task">0</td>
                            <td className="Table_Head_column_Task">0</td>
                            <td className="Table_Head_column_Task">1</td>
                            <td className="Table_Head_column_Task">1</td>
                            <td className="Table_Head_column_Task">
                              <div className="d-flex justify-content-start align-items-center text-success">
                                Active
                              </div>
                            </td>
                            <td className="Table_Head_column_Task">
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
                    <div className="_3-task">
                      <div className="frame1-16-task">
                        <div className="showpagination-task">Show</div>
                        <div className="select-entries-task">
                          <div className="_10-task">10</div>
                          <img
                            className="bi-caret-down-fill-task"
                            src="assets/images/bi-caret-down-fill0.svg"
                          />
                        </div>
                        <div className="entries-task">Entries</div>
                      </div>
                      <div className="frame2-16-task">
                        <div className="previous-task">Previous</div>
                        <div className="active_page-task">
                          <div className="_1-task">1</div>
                        </div>
                        <div className="frame-162-task">
                          <div className="_2-task">2</div>
                        </div>
                        <div className="frame-17-task">
                          <div className="_2-task">3</div>
                        </div>
                        <div className="next3-task">Next</div>
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
          <Offcanvas.Header className="offcanvas_header">
            <>
              {/* view task  */}
              <div className="frame-1000002761-header">
                <div className="frame-1707480551-header">
                  <div className="frame-1000002997-header">
                    <div className="frame-1000003004-header">
                      <div className="view-task-task-header">
                        {0 > 1 ? <>Update Task</> : <>Add Task</>}
                      </div>
                    </div>
                  </div>
                  <div className="frame-1707480584-header">
                    {"given update id" < "1" && (
                      <div
                        className="button-task-header"
                        onClick={handleOpenEditModel}
                      >
                        <img
                          className="mdi-edit-outline-header"
                          src="assets\images\mdi_edit-outline.svg"
                        />
                      </div>
                    )}
                    <div className="button-task-header">
                      <img
                        className="mdi-edit-outline-header"
                        src="assets\images\close-modal.svg"
                        onClick={AddTaskhandleClose}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="frame-1707480412">
              <div className="d-flex gap-3">
                <div className="w-100">
                  <label className="label-span mb-2">Types</label>
                  <span className="label-span ">*</span>
                  <select
                    className="form-select w-100"
                    value={2}
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
              </div>

              <div className="w-100">
                <label className="label-span mb-2">Description</label>
                <textarea
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                    height: "fit-content",
                  }}
                  className="form-control w-100"
                  placeholder="............. "
                  value="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur"
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
                        switchOn ? "property-1-default" : "property-1-variant-2"
                      }`}
                      style={{ transition: "0.4s ease-in-out" }}
                      onClick={handleAddSwitch}
                    >
                      <div
                        className={`${switchOn ? "ellipseon" : "ellipseoff"}`}
                        style={{ transition: "0.4s ease-in-out" }}
                      />
                      <div
                        className={`${switchOn ? "on" : "off"}`}
                        style={{ transition: "0.4s ease-in-out" }}
                      >
                        {switchOn ? <>ON</> : <>OFF</>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {switchOn && (
                <>
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
                </>
              )}
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
                      style={{ transition: "0.4s ease-in-out" }}
                      onClick={handleSwitchAddLevel}
                    >
                      <div
                        className={`${
                          switchOnAddLevel ? "ellipseon" : "ellipseoff"
                        }`}
                        style={{ transition: "0.4s ease-in-out" }}
                      />
                      <div
                        className={`${switchOnAddLevel ? "on" : "off"}`}
                        style={{ transition: "0.4s ease-in-out" }}
                      >
                        {switchOnAddLevel ? <>ON</> : <>OFF</>}
                      </div>
                    </div>
                  </div>
                </div>
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

              {switchOnAddLevel && (
                <>
                  <div className="d-flex gap-3">
                    <div className="w-100">
                      <label className="label-span mb-2">Level Name</label>
                      <span className="label-2-span4">*</span>
                      <input
                        type="test"
                        className={` w-100 ${
                          validLevelName ? "form-control" : "isInValid"
                        }`}
                        placeholder="Level name"
                      />
                      {!validLevelName && (
                        <>
                          <div className={`isInValidText mt-1 `}>
                            Minimum 3 characters
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-100">
                      <label className="label-span mb-2">Level Number</label>
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
                  </div>
                  <div className="d-flex gap-3">
                    <div className="w-100">
                      <label className="label-span mb-2">Task Point</label>
                      <span className="label-2-span4">*</span>
                      <input
                        style={{
                          borderRadius: "4px 4px 4px 4px",
                          borderWidth: "1px 1px 1px 1px",
                          padding: "7px 14px 7px 14px",
                          border: "1px solid #ced4da",
                        }}
                        type="test"
                        className="form-control w-100"
                        placeholder="Level name"
                      />
                    </div>
                    <div className="w-100">
                      <label className="label-span mb-2">Number/Criteria</label>
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
                  </div>
                  <div className="d-flex gap-3">
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
                        type="test"
                        className="form-control w-100"
                        placeholder="Level name"
                      />
                    </div>
                    <div className="w-100">
                      <label className="label-span mb-2">Bonus</label>
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
                  </div>
                  <div className="w-100">
                    <label className="label-span mb-2">Level Description</label>
                    <textarea
                      style={{
                        borderRadius: "4px 4px 4px 4px",
                        borderWidth: "1px 1px 1px 1px",
                        padding: "7px 14px 7px 14px",
                        border: "1px solid #ced4da",
                        height: "fit-content",
                      }}
                      className="form-control w-100"
                      placeholder="............. "
                      value="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                  </div>
                </>
              )}

              <div className="frame-1707480246">
                <div className="task-levels ">Task Levels</div>
                <div className="no-levels-found">No Levels found</div>
              </div>
              {/* task level table */}
              <div className="rectangle-40508_view_task" />
              <div className="frame-1707480554_view_task">
                <div className="task-levels_view_task">Task Levels</div>
                <div className="table_view_task">
                  <div className="frame-1707480218_view_task">
                    <div className="frame-9_view_task">
                      <div className="frame-13_view_task">
                        <div className="name_view_task">Name</div>
                      </div>
                      <div className="frame-15_view_task">
                        <div className="criteria_view_task">Criteria</div>
                      </div>
                      <div className="frame-17_view_task">
                        <div className="points_view_task">Points</div>
                      </div>
                      <div className="frame-12_view_task">
                        <div className="actions_view_task">Actions</div>
                      </div>
                    </div>
                    <div className="frame-1707480222_view_task">
                      <div className="frame-13_view_task">
                        <div className="one-day-a_view_task">One day a...</div>
                      </div>
                      <div className="frame-15_view_task">
                        <div className="_1_view_task">1</div>
                      </div>
                      <div className="frame-17_view_task">
                        <div className="_4_view_task">4</div>
                      </div>
                      <div className="frame-1707480216_view_task">
                        <div className="frame-1707480208_view_task">
                          <div className="edit_view_task">
                            <img
                              className="group_view_task"
                              src="assets/images/task-level-edit.svg"
                            />
                          </div>
                        </div>
                        <div className="frame-1707480209_view_task">
                          <img
                            className="delete_view_task"
                            src="assets/images/task-level-delete.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-1707480253 mt-2">
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
          </Offcanvas.Body>
        </Offcanvas>
        {/* Edit Task */}
        <Offcanvas
          placement="end"
          show={showAEditTask}
          onHide={EditTaskhandleClose}
          backdrop="static"
          backdropClassName="backtrop_fade_color"
        >
          <Offcanvas.Header className="offcanvas_header">
            <>
              {/* view task  */}
              <div className="frame-1000002761-header">
                <div className="frame-1707480551-header">
                  <div className="frame-1000002997-header">
                    <div className="frame-1000003004-header">
                      <div className="view-task-task-header">View Task</div>
                    </div>
                  </div>
                  <div className="frame-1707480584-header">
                    <div
                      className="button-task-header"
                      onClick={handleOpenEditModel}
                    >
                      <img
                        className="mdi-edit-outline-header"
                        src="assets\images\mdi_edit-outline.svg"
                      />
                    </div>
                    <div className="button-task-header">
                      <img
                        className="mdi-edit-outline-header"
                        src="assets\images\close-modal.svg"
                        onClick={EditTaskhandleClose}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* view task  */}
            <div className="frame-1000008440_view_task">
              <div className="frame-1000008442_view_task">
                <div className="frame-1000003152_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label_view_task">Task Type:</div>
                    </div>
                  </div>
                  <div className="icon-left-text_view_task">
                    <div className="placeholder_view_task">Days Streak</div>
                  </div>
                </div>
                <div className="frame-1000003143_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label_view_task">Name:</div>
                    </div>
                  </div>
                  <div className="placeholder_view_task">Daily Log In</div>
                </div>
                <div className="frame-1707480560_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label_view_task">Description:</div>
                    </div>
                  </div>
                  <div className="icon-left-text2_view_task">
                    <div className="placeholder2_view_task">
                      <span>
                        <span className="placeholder-2-span_view_task">
                          Sed ut perspiciatis, unde omnis iste natus error Sed
                          ut natus error Sed
                        </span>
                        <br />
                        <span className="placeholder-2-span2_view_task">
                          Read More
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="frame-1000003144_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label_view_task">Status:</div>
                    </div>
                  </div>
                  <div className="icon-left-text3_view_task">
                    <div className="frame-1707480549_view_task">
                      <div className="placeholder3_view_task">Active</div>
                    </div>
                  </div>
                </div>
                <div className="frame-1000003145_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label2_view_task">Level Name:</div>
                    </div>
                  </div>
                  <div className="input_view_task">
                    <div className="placeholder_view_task">Level name</div>
                  </div>
                </div>
                <div className="frame-1000003146_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label_view_task">Task Point:</div>
                    </div>
                  </div>
                  <div className="icon-left-text_view_task">
                    <div className="placeholder4_view_task">0</div>
                  </div>
                </div>
                <div className="frame-1000003147_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label_view_task">Number/Criteria:</div>
                    </div>
                  </div>
                  <div className="icon-left-text_view_task">
                    <div className="icon-left-text_view_task">
                      <div className="placeholder4_view_task">0</div>
                    </div>
                  </div>
                </div>
                <div className="frame-1000003150_view_task">
                  <div className="duration_view_task">
                    <div className="label_view_task">Points:</div>
                  </div>
                  <div className="icon-left-text_view_task">
                    <div className="placeholder4_view_task">0</div>
                  </div>
                </div>
                <div className="frame-1000003151_view_task">
                  <div className="duration_view_task">
                    <div className="frame-1000003156_view_task">
                      <div className="label_view_task">Bonus:</div>
                    </div>
                  </div>
                  <div className="icon-left-text_view_task">
                    <div className="placeholder4_view_task">0</div>
                  </div>
                </div>
              </div>
              <div className="rectangle-40508_view_task" />
              <div className="frame-1707480554_view_task">
                <div className="task-levels_view_task">Task Levels</div>
                <div className="table_view_task">
                  <div className="frame-1707480218_view_task">
                    <div className="frame-9_view_task">
                      <div className="frame-13_view_task">
                        <div className="name_view_task">Name</div>
                      </div>
                      <div className="frame-15_view_task">
                        <div className="criteria_view_task">Criteria</div>
                      </div>
                      <div className="frame-17_view_task">
                        <div className="points_view_task">Points</div>
                      </div>
                      <div className="frame-12_view_task">
                        <div className="actions_view_task">Actions</div>
                      </div>
                    </div>
                    <div className="frame-1707480222_view_task">
                      <div className="frame-13_view_task">
                        <div className="one-day-a_view_task">One day a...</div>
                      </div>
                      <div className="frame-15_view_task">
                        <div className="_1_view_task">1</div>
                      </div>
                      <div className="frame-17_view_task">
                        <div className="_4_view_task">4</div>
                      </div>
                      <div className="frame-1707480216_view_task">
                        <div className="frame-1707480208_view_task">
                          <div className="edit_view_task">
                            <img
                              className="group_view_task"
                              src="assets/images/task-level-edit.svg"
                            />
                          </div>
                        </div>
                        <div className="frame-1707480209_view_task">
                          <img
                            className="delete_view_task"
                            src="assets/images/task-level-delete.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Tasks;
