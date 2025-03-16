import { useEffect, useState } from "react";
import "./Board.css"
import Modal from 'react-bootstrap/Modal';

function Board() {
    const [showBoard, setShowBoard] = useState(true);
    const [showGrade, setShowGrade] = useState(false);
    const [screenSize, setScreenSize] = useState<any>();

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 576) {
                setScreenSize('sm');
            } else if (width >= 320 && width < 767) {
                setScreenSize('sm');
            } else if (width >= 768 && width < 1024) {
                setScreenSize('md');
            } else if (width >= 1024 && width < 1440) {
                setScreenSize('lg');
            } else if (width >= 1440 && width < 2559) {
                setScreenSize('lg');
            } else if (width >= 2560) {
                setScreenSize('xl');
            }
        };

        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [board, setBoard] = useState<number>();
    const [grade, setGrade] = useState<number>();
    const handleBoard = (item: any) => {
        setBoard(item)
    }
    const handleGrade = (item: any) => {
        setGrade(item)
    }
    const handleShowGrade = () => {
        setShowGrade(true)
        setShowBoard(false)
    }

    return (
        <div className="">
            {/* for board */}
            <Modal
                show={showBoard}
                onHide={() => setShowBoard(false)}
                backdropClassName="modal-backdrop"
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                // centered
                // scrollable={true}
                backdrop="static"
                size={screenSize}
            >
                <Modal.Header >
                    <div className="logo_board">
                        <img className="vertical-minds-logo-blue-01-1_board" src="assets/images/Vertical Minds Logo Blue-01 1.svg" />
                        <div className="frame-1707480584_board">
                            <div className="button_board " onClick={() => setShowBoard(false)}>
                                <img className="remove_board" src="assets/images/remove.svg" />
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <div className="frame-1707480708_board">
                        <div className="frame-1707480707_board">
                            <div className="frame-1707480803_board">
                                <div className="do-you-use-any-of-thesetools_board">Select Board</div>
                                <div className="select-your-board-to-access-curriculum-specific-study-materials_board">
                                    Select your board to access curriculum-specific study materials
                                </div>
                            </div>
                            <div className="frame-1707480653_board">
                                {boardData.map((item) => (
                                    <>
                                        <div className="wrike_board">
                                            <div className="option_board">
                                                <img className="image-1_board" src="assets/images/board_1.svg" />
                                                <div className="frame-189_board">
                                                    <div className="wrike2_board">{item.name}</div>
                                                </div>
                                            </div>
                                            <div className="radio-button-1_board" onClick={() => handleBoard(item.id)}>
                                                <div className={`${board === item.id ? "frame-326_board_click" : "frame-326_board"}`} style={{ transition: "0.3s ease-in" }}>
                                                    <div className={`${board === item.id ? "record_board_click" : "record_board"}`} style={{ transition: "0.3s ease-in" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                            <div className="trello_board">See More</div>
                        </div>
                        <div className="w-100">
                            <div className="progress " style={{ height: "10px" }} id="progress_board">
                                <div className="progress-bar" role="progressbar"
                                    style={{ width: `${board ? "50%" : board && grade ? "100%" : "0%"}`, backgroundColor: " linear-gradient(90deg,rgba(5, 147, 69, 0.8) 0%,rgba(148, 217, 57, 0.8) 100%)" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <div className="bottom-btn_board">
                    <div className="frame-1707480652_board">
                        <button type="button" className="back_board" disabled={!board} onClick={() => [setShowGrade(false), setShowBoard(true)]}>
                            <div className="back2_board">Back</div>
                        </button>
                        <button type="button" className="back3_board">
                            <div className="back4_board" onClick={() => handleShowGrade()}>Next</div>
                        </button>
                    </div>
                </div>
            </Modal>
            {/* for grae */}
            <Modal
                show={showGrade}
                onHide={() => setShowGrade(false)}
                backdropClassName="modal-backdrop"
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                // centered
                // scrollable={true}
                backdrop="static"
                size={screenSize}
            >
                <Modal.Header >
                    <div className="logo_board">
                        <img className="vertical-minds-logo-blue-01-1_board" src="assets/images/Vertical Minds Logo Blue-01 1.svg" />
                        <div className="frame-1707480584_board">
                            <div className="button_board " onClick={() => setShowGrade(false)}>
                                <img className="remove_board" src="assets/images/remove.svg" />
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <div className="frame-1707480708_board">
                        <div className="frame-1707480707_board">
                            <div className="frame-1707480803_board">
                                <div className="do-you-use-any-of-thesetools_board">Select Grade</div>
                                <div className="select-your-board-to-access-curriculum-specific-study-materials_board">
                                    Select your grade to access tailored learning materials and resources                                </div>
                            </div>
                            <div className="frame-1707480653_board">
                                {GradeData.map((item) => (
                                    <>
                                        <div className="wrike_board">
                                            <div className="option_board">
                                                <div className="frame-189_board">
                                                    <div className="wrike2_board">{item.name}</div>
                                                </div>
                                            </div>
                                            <div className="radio-button-1_board" onClick={() => handleGrade(item.id)}>
                                                <div className={`${grade === item.id ? "frame-326_board_click" : "frame-326_board"}`} style={{ transition: "0.3s ease-in" }}>
                                                    <div className={`${grade === item.id ? "record_board_click" : "record_board"}`} style={{ transition: "0.3s ease-in" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                            <div className="trello_board">See More</div>
                        </div>
                        <div className="w-100">
                            <div className="progress " style={{ height: "10px" }} id="progress_board">
                                <div className="progress-bar" role="progressbar"
                                    style={{ width: `${board && grade ? "100%" : board ? "50%" : "0%"}`, backgroundColor: " linear-gradient(90deg,rgba(5, 147, 69, 0.8) 0%,rgba(148, 217, 57, 0.8) 100%)" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className="bottom-btn_board">
                        <div className="frame-1707480652_board">
                            <button type="button" className="back_board" onClick={() => [setShowGrade(false), setShowBoard(true)]}>
                                <div className="back2_board" >Back</div>
                            </button>
                            <button type="button" className="back3_board" onClick={() => [setShowGrade(false), setShowBoard(false)]}>
                                <div className="back4_board" >Next</div>
                            </button>
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Board

const boardData = [
    {
        id: 1,
        name: "FBISE",
        img: "assets/images/board_1.svg"
    },
    {
        id: 2,
        name: "BISE Kohat",
        img: "assets/images/board_2.svg"
    },
    {
        id: 3,
        name: "BISE BWP",
        img: "assets/images/board_3.svg"
    },
    {
        id: 4,
        name: "BISE DG Khan",
        img: "assets/images/board_4.svg"
    },
    {
        id: 5,
        name: "BISE Lahore",
        img: "assets/images/board_5.svg"
    },
    {
        id: 6,
        name: "FBISE",
        img: "assets/images/board_1.svg"
    },
    {
        id: 7,
        name: "BISE Kohat",
        img: "assets/images/board_2.svg"
    },
    {
        id: 8,
        name: "BISE BWP",
        img: "assets/images/board_3.svg"
    },
    {
        id: 9,
        name: "BISE DG Khan",
        img: "assets/images/board_4.svg"
    },
    {
        id: 10,
        name: "BISE Lahore",
        img: "assets/images/board_5.svg"
    },
]
const GradeData = [
    {
        id: 1,
        name: "Grade 1",
    },
    {
        id: 2,
        name: "Grade 2",
    },
    {
        id: 3,
        name: "Grade 3",
    },
    {
        id: 4,
        name: "Grade 4",
    },
    {
        id: 5,
        name: "Grade 5",
    },
    {
        id: 6,
        name: "Grade 6",
    },
    {
        id: 7,
        name: "Grade 7",
    },
    {
        id: 8,
        name: "Grade 8",
    },
    {
        id: 9,
        name: "Grade 9",
    },
    {
        id: 10,
        name: "Grade 10",
    },
]