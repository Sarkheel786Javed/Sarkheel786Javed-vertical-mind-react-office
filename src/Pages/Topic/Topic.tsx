import "./Topic.css";

const GradeColor = [
  "#ffffff",
  "#43A2FF",
  "#0BC26A",
  "#F99A24",
  "#9959FA",
  "#FF5562",
  "#282C30",
  "#AC1D97",
  "#593C98",
];
const GradeData = [
  {
    id: "1",
    gradeName: "Math Grade",
  },
  {
    id: "2",
    gradeName: "Math Grade",
  },
  {
    id: "3",
    gradeName: "Math Grade",
  },
  {
    id: "4",
    gradeName: "Math Grade",
  },
  {
    id: "5",
    gradeName: "Math Grade",
  },
  {
    id: "6",
    gradeName: "Math Grade",
  },
  {
    id: "7",
    gradeName: "Math Grade",
  },
  {
    id: "8",
    gradeName: "Math Grade",
  },
  {
    id: "9",
    gradeName: "Math Grade",
  },
];
function Topic() {
  return (
    <div className="w-100 cover_topic">
      <div className="frame-1707480619_topic">
        <div className="frame-1707480616_topic">
          <div className="topic-module_topic">Topic Module</div>
          <div className="frame-1707480614_topic">
            <div className="punjab-board_topic">Punjab Board</div>
            <img className="arrow-drop-down" src="arrow-drop-down0.svg" />
          </div>
          <div className="frame-1707480615_topic">
            <div className="math-subject_topic">Math Subject</div>
            <img className="arrow-drop-down2" src="arrow-drop-down1.svg" />
          </div>
        </div>
        <div className="tabs_topic">
          {GradeData.map((item, index) => (
            <>
              <div
                className="cell-open_topic"
                style={{
                  background: GradeColor[index % GradeColor.length],
                  border: `${
                    item.id === GradeData[0].id
                      ? "1px solid #dcdde2"
                      : "0px solid #dcdde2"
                  }`,
                }}
              >
                <div className="tab-title_topic">
                  <div className="frame-16_topic">
                    <div
                      className="_04_topic"
                      style={{
                        color: `${
                          item.id === GradeData[0].id ? " #272a33" : " #ffffff"
                        }`,
                      }}
                    >
                      {item.gradeName} {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}

        </div>
        
      </div>
    </div>
  );
}

export default Topic;
