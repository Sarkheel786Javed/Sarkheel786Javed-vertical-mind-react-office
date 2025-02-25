import { useState } from "react";
import "../../styles/Benefits.css";
import Offcanvas from "react-bootstrap/Offcanvas";

function Benefits() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [addBenefit, setAddBenefit] = useState<boolean>(false);

  const handleShowAddBenefit = () => {
    setAddBenefit(true);
  };
  const handleHideAddBenefit = () => {
    setAddBenefit(false);
  };

  const TableComponent = () => {
    const [samePictureOnPerk, setSamePictureOnPerk] = useState<boolean>(false);
    const handleSamePictureOnPerk = () => {
      setSamePictureOnPerk(!samePictureOnPerk);
    };
    const [perkFile, setPerkFile] = useState<File | undefined>();

    return (
      <>
        {/* table list */}
        <div className="table-responsive w-100">
          <table className="Table w-100">
            <thead className="table_header">
              <tr>
                <th scope="col" className="Table_Head_column_benefits ps-3">
                  Benefit Name
                </th>
                <th scope="col" className="Table_Head_column_benefits">
                  Perk Name
                </th>
                <th scope="col" className="Table_Head_column_benefits">
                  Perk Type
                </th>
                <th scope="col" className="Table_Head_column_benefits">
                  Points
                </th>
                <th scope="col" className="Table_Head_column_benefits">
                  Picture
                </th>
                <th scope="col" className="Table_Head_column_benefits">
                  Status
                </th>
                <th scope="col" className="Table_Head_column_benefits">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table_tr ">
                <td scope="row" className="ps-3">
                  Coca C...
                </td>
                <td>Scholar</td>
                <td>Education</td>
                <td>0</td>
                <td scope="row" style={{ width: "14%" }}>
                  <img
                    src="assets/images/benefit-nextcola.svg"
                    alt=""
                    className=""
                  />
                </td>
                <td className="text-success">Active</td>
                <td>
                  <label className="">
                    <div className="frame-1707480216-benefit">
                      <div
                        className="frame-1707480208-benefit"
                        onClick={handleShow}
                      >
                        <div className="edit-benefit">Edit</div>
                        <div className="edit2">
                          <img className="group" src="assets/images/edit.svg" />
                        </div>
                      </div>
                    </div>
                  </label>
                </td>
              </tr>
              <tr className="table_tr ">
                <td scope="row" className="ps-3">
                  Coca C...
                </td>
                <td>Scholar</td>
                <td>Education</td>
                <td>0</td>
                <td scope="row" style={{ width: "14%" }}>
                  <img
                    src="assets/images/benefit-nextcola.svg"
                    alt=""
                    className=""
                  />
                </td>
                <td className="text-danger">Inactive</td>
                <td>
                  <label className="">
                    <div className="frame-1707480216-benefit">
                      <div
                        className="frame-1707480208-benefit"
                        onClick={handleShow}
                      >
                        <div className="edit-benefit">Edit</div>
                        <div className="edit2">
                          <img className="group" src="assets/images/edit.svg" />
                        </div>
                      </div>
                    </div>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* table left sidebar for Add benefit  */}
        <Offcanvas
          placement="end"
          show={addBenefit}
          onHide={handleShowAddBenefit}
          backdrop="static"
          backdropClassName="backtrop_fade_color"
        >
          <Offcanvas.Body>
            <div className="frame-1707480379">
              <button
                className="btn p-1  text-reset"
                type="button"
                onClick={handleHideAddBenefit}
              >
                <img src="assets/images/radix-icons_cross-1.svg" />
              </button>
              <div className="frame-1707480381">
                <div className="create-benefit">Create Benefit</div>
                <div className="benefit-details">Benefit Details</div>
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Name</label>
                <span className="label-span ">*</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value={0}>Select Type</option>
                  <option value={1}>One benefit edited</option>
                  <option value={1}>Super Mario</option>
                  <option value={1}>Coca Cola</option>
                  <option value={1}>Enhanced Productivity</option>
                  <option value={1}>Improved Mental Health</option>
                  <option value={1}>Increased Efficiency</option>
                  <option value={1}>Greater Flexibility</option>
                  <option value={1}>Strengthen Relationships </option>
                  <option value={1}>Pepsi</option>
                  <option value={1}>Advanced Studies</option>
                </select>
              </div>
              {!perkFile ? (
                <>
                  <div className="w-100">
                    <label className="label-span mb-2">Upload Pictures</label>
                    <span className="label-span ">*</span>
                    <input
                      className="form-control w-100 "
                      onChange={(e) =>
                        setPerkFile(
                          e.target.files ? e.target.files[0] : undefined
                        )
                      }
                      style={{
                        borderRadius: "4px 4px 4px 4px",
                        borderWidth: "1px 1px 1px 1px",
                        padding: "7px 14px 7px 14px",
                        border: "1px solid #ced4da",
                      }}
                      type="file"
                      id="formFile"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="frame-1707480384">
                    <div className="frame-1171275144">
                      <div className="group-1000003675">
                        <div className="card-img">
                          <img
                            className=""
                            // src="assets\images\benefits_Picture.svg"
                            src={URL.createObjectURL(perkFile)}
                          />
                        </div>
                        <div
                          className="group-1000003674"
                          onClick={() => setPerkFile(undefined)}
                        >
                          <i className="bi bi-x text-light"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div
                className="frame-1707480383"
                onClick={handleSamePictureOnPerk}
              >
                {samePictureOnPerk ? (
                  <>
                    <div className="activate-toggle">
                      <div className="ellipse_on" />
                    </div>
                    <div className="picture_switch_label">
                      Same as picture for all perks
                    </div>
                  </>
                ) : (
                  <>
                    <div className="in-activate-toggle">
                      <div className="ellipse_off" />
                    </div>
                    <div className="picture_switch_label">
                      Same as picture for all perks
                    </div>
                  </>
                )}
              </div>
              <div className="label3">Perks</div>
              <div className="w-100">
                <label className="label-span mb-2">Perk Name</label>
                <span className="label-span ">*</span>
                <input
                  className="form-control "
                  placeholder="0"
                  type="number"
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                />
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Perk Type</label>
                <span className="label-span ">*</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Type</option>
                </select>
              </div>
              <div className="label3">Perks</div>
              <div className="w-100">
                <label className="label-span mb-2">Points</label>
                <span className="label-span ">*</span>
                <input
                  className="form-control "
                  placeholder="0"
                  type="number"
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                />
              </div>
              <div className="frame-17074802302  w-100">
                <label className="label-span mb-2">Status</label>
                <div className="frame-1707480243">
                  <div
                    className={1 == 1 ? "input2" : "input3"}
                    style={{ transition: "0.4s ease-in-out" }}
                  >
                    <div
                      className={1 == 1 ? "placeholder2" : "placeholder3"}
                      style={{ transition: "0.4s ease-in-out" }}
                    >
                      Active
                    </div>
                  </div>
                  <div
                    className={!1 ? "input2" : "input3"}
                    style={{ transition: "0.4s ease-in-out" }}
                  >
                    <div
                      className={!1 ? "placeholder2" : "placeholder3"}
                      style={{ transition: "0.4s ease-in-out" }}
                    >
                      Inactive
                    </div>
                  </div>
                </div>
              </div>

              {!perkFile ? (
                <>
                  <div className="w-100">
                    <label className="label-span mb-2">Upload Pictures</label>
                    <span className="label-span ">*</span>
                    <input
                      className="form-control w-100 "
                      onChange={(e) =>
                        setPerkFile(
                          e.target.files ? e.target.files[0] : undefined
                        )
                      }
                      style={{
                        borderRadius: "4px 4px 4px 4px",
                        borderWidth: "1px 1px 1px 1px",
                        padding: "7px 14px 7px 14px",
                        border: "1px solid #ced4da",
                      }}
                      type="file"
                      id="formFile"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="frame-1707480384">
                    <div className="frame-1171275144">
                      <div className="group-1000003675">
                        <div className="card-img">
                          <img
                            className=""
                            // src="assets\images\benefits_Picture.svg"
                            src={URL.createObjectURL(perkFile)}
                          />
                        </div>
                        <div
                          className="group-1000003674"
                          onClick={() => setPerkFile(undefined)}
                        >
                          <i className="bi bi-x text-light"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="Add-perk_button">
                <div className="frame-1707480378">
                  <img src="assets/images/plus-small 2.svg" />
                  <div className="frame-1707480332">
                    <div className="add-perk">Add Perk</div>
                  </div>
                </div>
              </div>
              <div className="frame-1707480261">
                <div className="frame-1707480218">
                  <div className="frame-9">
                    <div className="frame-1_benefit">
                      <div className="perk">Perk</div>
                    </div>
                    <div className="frame-2_benefit">
                      <div className="perk-type">Perk Type</div>
                    </div>
                    <div className="frame-4_benefit">
                      <div className="points">Points</div>
                    </div>
                    <div className="frame-7_benefit">
                      <div className="edit-benefit">Edit</div>
                    </div>
                  </div>
                  <div className="frame-1707480217">
                    <div className="frame-10">
                      <div className="frame-1_benefit">
                        <div className="scholarship">Scholarship</div>
                      </div>
                      <div className="frame-2_benefit">
                        <div className="education">Education</div>
                      </div>
                      <div className="frame-4_benefit">
                        <div className="_0">0</div>
                      </div>
                      <div className="frame-7_benefit">
                        <img src="assets/images/edit.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-1707480224_benefits">
                    <div className="frame-102">
                      <div className="frame-1_benefit">
                        <div className="tin-pack">Tin Pack</div>
                      </div>
                      <div className="frame-2_benefit">
                        <div className="_4-tins">4 Tins</div>
                      </div>
                      <div className="frame-4_benefit">
                        <div className="_20">20</div>
                      </div>
                      <div className="frame-7_benefit">
                        <img src="assets/images/edit.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="Add-perk_button">
                <div className="frame-1707480378">
                  <img src="assets/images/plus-small 2.svg" />
                  <div className="frame-1707480332">
                    <div className="add-perk">Add Perk</div>
                  </div>
                </div>
              </div> */}
              <div
                className="save_button_benefits"
                onClick={handleHideAddBenefit}
              >
                <div className="save_button_child">Save</div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/* table left sidebar for edit  */}
        <Offcanvas
          placement="end"
          show={show}
          onHide={handleClose}
          backdrop="static"
          backdropClassName="backtrop_fade_color"
        >
          <Offcanvas.Body>
            <div className="frame-1707480379">
              <button
                className="btn p-1  text-reset"
                type="button"
                onClick={handleClose}
              >
                <img src="assets/images/radix-icons_cross-1.svg" />
              </button>
              <div className="frame-1707480381">
                <div className="add-user-Benefit_offconvax">
                  Update User Benefit
                </div>
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Name</label>
                <span className="label-span ">*</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value={0}>Select Type</option>
                  <option value={1}>One benefit edited</option>
                  <option value={1}>Super Mario</option>
                  <option value={1}>Coca Cola</option>
                  <option value={1}>Enhanced Productivity</option>
                  <option value={1}>Improved Mental Health</option>
                  <option value={1}>Increased Efficiency</option>
                  <option value={1}>Greater Flexibility</option>
                  <option value={1}>Strengthen Relationships </option>
                  <option value={1}>Pepsi</option>
                  <option value={1}>Advanced Studies</option>
                </select>
              </div>
              {!perkFile ? (
                <>
                  <div className="w-100">
                    <label className="label-span mb-2">Upload Pictures</label>
                    <span className="label-span ">*</span>
                    <input
                      className="form-control w-100 "
                      onChange={(e) =>
                        setPerkFile(
                          e.target.files ? e.target.files[0] : undefined
                        )
                      }
                      style={{
                        borderRadius: "4px 4px 4px 4px",
                        borderWidth: "1px 1px 1px 1px",
                        padding: "7px 14px 7px 14px",
                        border: "1px solid #ced4da",
                      }}
                      type="file"
                      id="formFile"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="frame-1707480384">
                    <div className="frame-1171275144">
                      <div className="group-1000003675">
                        <div className="card-img">
                          <img
                            className=""
                            // src="assets\images\benefits_Picture.svg"
                            src={URL.createObjectURL(perkFile)}
                          />
                        </div>
                        <div
                          className="group-1000003674"
                          onClick={() => setPerkFile(undefined)}
                        >
                          <i className="bi bi-x text-light"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div
                className="frame-1707480383"
                onClick={handleSamePictureOnPerk}
              >
                {samePictureOnPerk ? (
                  <>
                    <div className="activate-toggle">
                      <div className="ellipse_on" />
                    </div>
                    <div className="picture_switch_label">
                      Same as picture for all perks
                    </div>
                  </>
                ) : (
                  <>
                    <div className="in-activate-toggle">
                      <div className="ellipse_off" />
                    </div>
                    <div className="picture_switch_label">
                      Same as picture for all perks
                    </div>
                  </>
                )}
              </div>
              <div className="label3">Perks</div>
              <div className="w-100">
                <label className="label-span mb-2">Perk Name</label>
                <span className="label-span ">*</span>
                <input
                  className="form-control "
                  placeholder="0"
                  type="number"
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                />
              </div>
              <div className="w-100">
                <label className="label-span mb-2">Perk Type</label>
                <span className="label-span ">*</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Type</option>
                </select>
              </div>
              <div className="label3">Perks</div>
              <div className="w-100">
                <label className="label-span mb-2">Points</label>
                <span className="label-span ">*</span>
                <input
                  className="form-control "
                  placeholder="0"
                  type="number"
                  style={{
                    borderRadius: "4px 4px 4px 4px",
                    borderWidth: "1px 1px 1px 1px",
                    padding: "7px 14px 7px 14px",
                    border: "1px solid #ced4da",
                  }}
                />
              </div>
              <div className="frame-17074802302  w-100">
                <label className="label-span mb-2">Status</label>
                <div className="frame-1707480243">
                  <div
                    className={1 == 1 ? "input2" : "input3"}
                    style={{ transition: "0.4s ease-in-out" }}
                  >
                    <div
                      className={1 == 1 ? "placeholder2" : "placeholder3"}
                      style={{ transition: "0.4s ease-in-out" }}
                    >
                      Active
                    </div>
                  </div>
                  <div
                    className={!1 ? "input2" : "input3"}
                    style={{ transition: "0.4s ease-in-out" }}
                  >
                    <div
                      className={!1 ? "placeholder2" : "placeholder3"}
                      style={{ transition: "0.4s ease-in-out" }}
                    >
                      Inactive
                    </div>
                  </div>
                </div>
              </div>

              <div className="Add-perk_button">
                <div className="frame-1707480378">
                  <img src="assets/images/plus-small 2.svg" />
                  <div className="frame-1707480332">
                    <div className="add-perk">Add Perk</div>
                  </div>
                </div>
              </div>
              <div className="frame-1707480261">
                <div className="frame-1707480218">
                  <div className="frame-9">
                    <div className="frame-1_benefit">
                      <div className="perk">Perk</div>
                    </div>
                    <div className="frame-2_benefit">
                      <div className="perk-type">Perk Type</div>
                    </div>
                    <div className="frame-4_benefit">
                      <div className="points">Points</div>
                    </div>
                    <div className="frame-7_benefit">
                      <div className="edit-benefit">Edit</div>
                    </div>
                  </div>
                  <div className="frame-1707480217">
                    <div className="frame-10">
                      <div className="frame-1_benefit">
                        <div className="scholarship">Scholarship</div>
                      </div>
                      <div className="frame-2_benefit">
                        <div className="education">Education</div>
                      </div>
                      <div className="frame-4_benefit">
                        <div className="_0">0</div>
                      </div>
                      <div className="frame-7_benefit">
                        <img src="assets/images/edit.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-1707480224_benefits">
                    <div className="frame-102">
                      <div className="frame-1_benefit">
                        <div className="tin-pack">Tin Pack</div>
                      </div>
                      <div className="frame-2_benefit">
                        <div className="_4-tins">4 Tins</div>
                      </div>
                      <div className="frame-4_benefit">
                        <div className="_20">20</div>
                      </div>
                      <div className="frame-7_benefit">
                        <img src="assets/images/edit.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {!perkFile ? (
                <>
                  <div className="w-100">
                    <label className="label-span mb-2">Upload Pictures</label>
                    <span className="label-span ">*</span>
                    <input
                      className="form-control w-100 "
                      onChange={(e) =>
                        setPerkFile(
                          e.target.files ? e.target.files[0] : undefined
                        )
                      }
                      style={{
                        borderRadius: "4px 4px 4px 4px",
                        borderWidth: "1px 1px 1px 1px",
                        padding: "7px 14px 7px 14px",
                        border: "1px solid #ced4da",
                      }}
                      type="file"
                      id="formFile"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="frame-1707480384">
                    <div className="frame-1171275144">
                      <div className="group-1000003675">
                        <div className="card-img">
                          <img
                            className=""
                            // src="assets\images\benefits_Picture.svg"
                            src={URL.createObjectURL(perkFile)}
                          />
                        </div>
                        <div
                          className="group-1000003674"
                          onClick={() => setPerkFile(undefined)}
                        >
                          <i className="bi bi-x text-light"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* <div className="Add-perk_button">
                <div className="frame-1707480378">
                  <img src="assets/images/plus-small 2.svg" />
                  <div className="frame-1707480332">
                    <div className="add-perk">Add Perk</div>
                  </div>
                </div>
              </div> */}
              <div className="save_button_benefits" onClick={handleClose}>
                <div className="save_button_child">Save</div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

  return (
    <div>
      {/* Dashboard */}
      <div className=" cover_list">
        {/* {/* ----------------- section one ---------------------- * /} */}
        <div className="conteiner-fluid">
          <div className="row my-3">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
              <div className="task-table">
                <div className="frame-1707480227">
                  <div className="frame-1707480220">
                    <div className="Add-perk_button">
                      <div className="user-Benefit"> Benefit</div>
                      <div className="frame-1707480225">
                        <div className="sample">
                          <div className="item">
                            <input
                              className="form-control w-100 rounded-pill"
                              placeholder="Search by name"
                              style={{ height: "44px" }}
                            />
                            <img
                              className="_01-align-center"
                              src="assets/images/Search_icon.svg"
                            />
                          </div>
                        </div>
                        <div
                          className="frame-1707480211"
                          onClick={handleShowAddBenefit}
                        >
                          <div className="frame-1707480213">
                            <div className="add-user-Benefit">
                              Add User Benefit
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

                  <TableComponent></TableComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {/* ----------------- section one end ---------------------- * /} */}
    </div>
  );
}

export default Benefits;
