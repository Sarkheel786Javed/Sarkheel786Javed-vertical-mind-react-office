import { useCallback, useState } from "react";
import "../../styles/Benefits.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDropzone } from "react-dropzone";
import { SketchPicker } from "react-color";

function Benefits() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
    setColor("#000000");
  };
  const handleShow = () => setShow(true);

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
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
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
            <thead className="table_header rounded-1">
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
                    <div className="frame-1707480216">
                      <div className="frame-1707480208" onClick={handleShow}>
                        <div className="edit">Edit</div>
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
                    <div className="frame-1707480216">
                      <div className="frame-1707480208" onClick={handleShow}>
                        <div className="edit">Edit</div>
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
                        border:"1px solid #ced4da"
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
                    border:"1px solid #ced4da"
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
                    border:"1px solid #ced4da"
                  }}
                />
              </div>
              <div className="frame-17074802302  w-100">
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
                        border:"1px solid #ced4da"
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
            {/* onClick={handleClose} */}
            <div className="frame-1707480452">
              <button
                className="btn p-1  text-reset"
                type="button"
                onClick={handleClose}
              >
                <img src="assets/images/radix-icons_cross-1.svg" />
              </button>
              <div className="add-user-Benefit_offconvax">Add User Benefit</div>
              <div className="frame-1707480234">
                <div className="w-100">
                  <label className="label-span mb-2">User Benefit</label>
                  <span className="label-2-span2">*</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Complete Your Profile"
                    style={{
                      borderRadius: "4px 4px 4px 4px",
                      borderWidth: "1px 1px 1px 1px",
                      padding: "7px 14px 7px 14px",
                      border:"1px solid #ced4da"
                    }}
                  />
                </div>
                <div className="w-100">
                  <label className="label-span mb-2">Points</label>
                  <span className="label-2-span4">*</span>
                  <input
                    type="number"
                    className="form-control w-100"
                    placeholder="100"
                    style={{
                      borderRadius: "4px 4px 4px 4px",
                      borderWidth: "1px 1px 1px 1px",
                      padding: "7px 14px 7px 14px",
                      border:"1px solid #ced4da"
                    }}
                  />
                </div>
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
                      border:"1px solid #ced4da"
                    }}
                  >
                    <option value={0}>Select Type</option>
                  </select>
                </div>
                <div className="select_Color">
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
              {ImageDropzone()}
              <div className="Save" onClick={handleClose}>
                <div className="Save-button">Save</div>
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