import { useCallback, useState } from "react";
import "../../styles/UserBandge.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDropzone } from "react-dropzone";
import { SketchPicker } from "react-color";

function UserBandage() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setColor("#000000");
  };
  const handleShow = () => setShow(true);
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => {
    setShowEdit(false);
    setColor("#000000");
  };
  const handleShowEdit = () => setShowEdit(true);

  // drop zone

  const ImageDropzone = () => {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback(
      (acceptedFiles: File[]) => {
        setFiles([...files, ...acceptedFiles]);
      },
      [files]
    );

    const removeFile = (fileName: string) => {
      setFiles(files.filter((file) => file.name !== fileName));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: { "image/*": [] }, // Accept only images
      multiple: true,
    });

    return (
      <>
        <div className="frame-1707480453 ">
          <div className="choose-file">Choose File</div>
          <div className="frame-19" {...getRootProps()}>
            <div className="frame-1707480245">
              <div className="frame-1707480244">
                <div className="group-3">
                  <div className="vuesax-outline-cloud-add">
                    <img
                      className="vuesax-outline-cloud-add2"
                      src="assets/images/drag_img.svg"
                    />
                  </div>
                </div>
                <div className="frame-16">
                  <input {...getInputProps()} />
                  {!isDragActive && (
                    <>
                      <div className="choose-a-file-or-drag-drop-it-here">
                        Choose a file or drag &amp; drop it here
                      </div>
                      <div className="jpeg-png-pdf-up-to-50-mb">
                        JPEG, PNG,PDF up to 50MB
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="frame-15">
                <div className="browse-file">Browse File</div>
              </div>
            </div>
          </div>
        </div>
        {/* Display Selected Images */}

        <div className="mt-4 w-100">
          {files.map((file, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="object-cover rounded-3"
                width="50px"
                height="50px"
              />
              <button
                onClick={() => removeFile(file.name)}
                className="btn btn-danger"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };
  // colorpicker
  const [color, setColor] = useState("#000000");
  const [tempColor, setTempColor] = useState(color);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleColorChange = (color: any) => {
    setTempColor(color.hex);
  };

  const toggleColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleApply = () => {
    setColor(tempColor);
    setDisplayColorPicker(false);
  };

  const handleCancel = () => {
    setTempColor(color);
    setDisplayColorPicker(false);
  };

  return (
    <div>
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
                      <div className="frame-1707480223">
                        <div className="user-badge">User Badge</div>
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
                            onClick={handleShow}
                          >
                            <div className="frame-1707480213">
                              <div className="add-user-badge">
                                Add User Badge
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
                      <table className="Table w-100">
                        <thead className="table_header">
                          <tr>
                            <th
                              scope="col"
                              className="Table_Head_column_User_bandage ps-3"
                              style={{ width: "20%" }}
                            >
                              Icon
                            </th>
                            <th
                              scope="col"
                              className="Table_Head_column_User_bandage"
                              style={{ width: "20%" }}
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="Table_Head_column_User_bandage"
                              style={{ width: "20%" }}
                            >
                              Color
                            </th>
                            <th
                              scope="col"
                              className="Table_Head_column_User_bandage"
                              style={{ width: "20%" }}
                            >
                              Points
                            </th>
                            <th
                              scope="col"
                              className="Table_Head_column_User_bandage"
                              style={{ width: "20%" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_tr ">
                            <td
                              scope="row"
                              className="ps-3"
                              style={{ width: "20%" }}
                            >
                              <img
                                src="assets/images/377 [Converted] 2.svg"
                                alt=""
                                className=""
                              />
                            </td>
                            <td scope="row" style={{ width: "20%" }}>
                              Blue
                            </td>
                            <td style={{ width: "20%" }}>#09009</td>
                            <td style={{ width: "20%" }}>0</td>
                            <td style={{ width: "20%" }}>
                              <label className="">
                                <div className="frame-1707480216">
                                  <div
                                    className="frame-1707480208_user_badge"
                                    onClick={handleShow}
                                  >
                                    <div className="edit_user_badge">Edit</div>
                                    <div className="edit2">
                                      <img
                                        className="group"
                                        src="assets/images/edit.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className="frame-1707480209 w-auto">
                                    <div className="delete">Delete</div>
                                    <img
                                      className="delete2"
                                      src="assets/images/delete.svg"
                                    />
                                  </div>
                                </div>
                              </label>
                            </td>
                          </tr>
                          <tr className="table_tr ">
                            <td
                              scope="row"
                              className="ps-3"
                              style={{ width: "20%" }}
                            >
                              <img
                                src="assets/images/377 [Converted] 3.svg"
                                alt=""
                                className=""
                              />
                            </td>
                            <td scope="row" style={{ width: "20%" }}>
                              Gold
                            </td>
                            <td style={{ width: "20%" }}>#09009</td>
                            <td style={{ width: "20%" }}>200</td>
                            <td style={{ width: "20%" }}>
                              <label className="">
                                <div className="frame-1707480216">
                                  <div
                                    className="frame-1707480208_user_badge"
                                    onClick={handleShowEdit}
                                  >
                                    <div className="edit_user_badge">Edit</div>
                                    <div className="edit2">
                                      <img
                                        className="group"
                                        src="assets/images/edit.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className="frame-1707480209 w-auto">
                                    <div className="delete">Delete</div>
                                    <img
                                      className="delete2"
                                      src="assets/images/delete.svg"
                                    />
                                  </div>
                                </div>
                              </label>
                            </td>
                          </tr>
                          <tr className="table_tr ">
                            <td
                              scope="row"
                              className="ps-3"
                              style={{ width: "20%" }}
                            >
                              <img
                                src="assets/images/377 [Converted] 4.svg"
                                alt=""
                                className=""
                              />
                            </td>
                            <td scope="row" style={{ width: "20%" }}>
                              Silver
                            </td>
                            <td style={{ width: "20%" }}>#09009</td>
                            <td style={{ width: "20%" }}>3000</td>
                            <td style={{ width: "20%" }}>
                              <label className="">
                                <div className="frame-1707480216">
                                  <div
                                    className="frame-1707480208_user_badge"
                                    onClick={handleShow}
                                  >
                                    <div className="edit_user_badge">Edit</div>
                                    <div className="edit2">
                                      <img
                                        className="group"
                                        src="assets/images/edit.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className="frame-1707480209 w-auto">
                                    <div className="delete">Delete</div>
                                    <img
                                      className="delete2"
                                      src="assets/images/delete.svg"
                                    />
                                  </div>
                                </div>
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {/* ----------------- section one end ---------------------- * /} */}
        {/* right sidebar  */}
        <Offcanvas
          placement="end"
          show={show}
          onHide={handleClose}
          backdrop="static"
          backdropClassName="backtrop_fade_color"
        >
          <Offcanvas.Header className="offcanvas_header">
            <>
              <div className="frame-1000002761-header">
                <div className="frame-1707480551-header">
                  <div className="frame-1000002997-header">
                    <div className="frame-1000003004-header">
                      <div className="view-task-task-header">
                        Add User Badge
                      </div>
                    </div>
                  </div>
                  <div className="frame-1707480584-header">
                    <div className="button-task-header" onClick={handleClose}>
                      <img
                        className="mdi-edit-outline-header"
                        src="assets/images/radix-icons_cross-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* onClick={handleClose} */}
            <div className="frame-1707480452">
              <div className="frame-1707480234">
                <div className="w-100">
                  <label className="label-span mb-2">User Badge</label>
                  <span className="label-2-span2">*</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Complete Your Profile"
                  />
                </div>
                <div className="w-100">
                  <label className="label-span mb-2">Points</label>
                  <span className="label-2-span4">*</span>
                  <input
                    type="number"
                    className="form-control w-100"
                    placeholder="100"
                  />
                </div>
                <div className="w-100">
                  <label className="label-span mb-2">Types</label>
                  <span className="label-span ">*</span>
                  <select
                    className="form-select w-100"
                    aria-label="Default select example"
                  >
                    <option selected>Select Type</option>
                  </select>
                </div>
                <div className="select_Color">
                  <div className="frame-17074802302  w-100">
                    <div className="label">
                      <span>
                        <span className="label-span7">Color</span>
                        <span className="label-span8">*</span>
                      </span>
                    </div>
                    <div
                      className="frame-17074802302  w-100"
                      onClick={toggleColorPicker}
                    >
                      <div className="frame-1707480328">
                        <>
                          <div className="d-flex align-items-center">
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                background: color,
                                cursor: "pointer",
                              }}
                              onClick={toggleColorPicker}
                            />
                            <div className="ml-3 ms-2">{color}</div>
                          </div>
                          {displayColorPicker ? (
                            <div style={{ position: "absolute", zIndex: 2 }}>
                              <div
                                style={{
                                  position: "fixed",
                                  top: "0px",
                                  right: "0px",
                                  bottom: "0px",
                                  left: "0px",
                                }}
                                onClick={toggleColorPicker}
                              />
                              <div
                                className="border shadow"
                                style={{
                                  position: "relative",
                                  zIndex: 2,
                                  backgroundColor: "white",
                                  padding: "",
                                  borderRadius: "5px",
                                  boxShadow: "none",
                                }}
                              >
                                <SketchPicker
                                  className="shadow-none"
                                  color={tempColor}
                                  onChange={handleColorChange}
                                />
                                <div
                                  className="d-flex justify-content-end gap-3"
                                  style={{
                                    padding: "10px",
                                  }}
                                >
                                  <button
                                    className="btn rounded-2 colors-button-cancel"
                                    onClick={handleCancel}
                                  >
                                    <div className="colors-button-Child-cancel">
                                      Cancel
                                    </div>
                                  </button>
                                  <button
                                    className="btn rounded-2 colors-button-apply"
                                    onClick={handleApply}
                                  >
                                    <div className="colors-button-Child">
                                      Apply
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {ImageDropzone()}
              <div className="Save" onClick={handleClose}>
                <div className="Save-button">Save</div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/* Edit*/}
        <Offcanvas
          placement="end"
          show={showEdit}
          onHide={handleCloseEdit}
          backdrop="static"
          backdropClassName="backtrop_fade_color"
        >
          <Offcanvas.Header className="offcanvas_header">
            <>
              <div className="frame-1000002761-header">
                <div className="frame-1707480551-header">
                  <div className="frame-1000002997-header">
                    <div className="frame-1000003004-header">
                      <div className="view-task-task-header">
                        Update User Badge
                      </div>
                    </div>
                  </div>
                  <div className="frame-1707480584-header">
                    <div
                      className="button-task-header"
                      onClick={handleCloseEdit}
                    >
                      <img
                        className="mdi-edit-outline-header"
                        src="assets/images/radix-icons_cross-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* onClick={handleClose} */}
            <div className="frame-1707480452">
              <div className="frame-1707480234">
                <div className="w-100">
                  <label className="label-span mb-2">User Badge</label>
                  <span className="label-2-span2">*</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Complete Your Profile"
                  />
                </div>
                <div className="w-100">
                  <label className="label-span mb-2">Points</label>
                  <span className="label-2-span4">*</span>
                  <input
                    type="number"
                    className="form-control w-100"
                    placeholder="100"
                  />
                </div>
                <div className="w-100">
                  <label className="label-span mb-2">Types</label>
                  <span className="label-span ">*</span>
                  <select
                    className="form-select w-100"
                    aria-label="Default select example"
                  >
                    <option selected>Select Type</option>
                  </select>
                </div>
                <div className="select_Color">
                  <div className="frame-17074802302  w-100">
                    <div className="label">
                      <span>
                        <span className="label-span7">Color</span>
                        <span className="label-span8">*</span>
                      </span>
                    </div>
                    <div
                      className="frame-17074802302  w-100"
                      onClick={toggleColorPicker}
                    >
                      <div className="frame-1707480328">
                        <>
                          <div className="d-flex align-items-center">
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                background: color,
                                cursor: "pointer",
                              }}
                              onClick={toggleColorPicker}
                            />
                            <div className="ml-3 ms-2">{color}</div>
                          </div>
                          {displayColorPicker ? (
                            <div style={{ position: "absolute", zIndex: 2 }}>
                              <div
                                style={{
                                  position: "fixed",
                                  top: "0px",
                                  right: "0px",
                                  bottom: "0px",
                                  left: "0px",
                                }}
                                onClick={toggleColorPicker}
                              />
                              <div
                                className="border shadow"
                                style={{
                                  position: "relative",
                                  zIndex: 2,
                                  backgroundColor: "white",
                                  padding: "",
                                  borderRadius: "5px",
                                  boxShadow: "none",
                                }}
                              >
                                <SketchPicker
                                  className="shadow-none"
                                  color={tempColor}
                                  onChange={handleColorChange}
                                />
                                <div
                                  className="d-flex justify-content-end gap-3"
                                  style={{
                                    padding: "10px",
                                  }}
                                >
                                  <button
                                    className="btn rounded-2 colors-button-cancel"
                                    onClick={handleCancel}
                                  >
                                    <div className="colors-button-Child-cancel">
                                      Cancel
                                    </div>
                                  </button>
                                  <button
                                    className="btn rounded-2 colors-button-apply"
                                    onClick={handleApply}
                                  >
                                    <div className="colors-button-Child">
                                      Apply
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {ImageDropzone()}
              <div className="Save" onClick={handleCloseEdit}>
                <div className="Save-button">Save</div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default UserBandage;
