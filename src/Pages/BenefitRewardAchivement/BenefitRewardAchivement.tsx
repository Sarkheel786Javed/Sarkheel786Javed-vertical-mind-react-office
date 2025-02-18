import { useEffect, useState } from "react";
import "../../styles/BenefitRewardAchivement.css";
import Offcanvas from "react-bootstrap/Offcanvas";

function BenefitRewardAchivement() {
  interface Data {
    title: string;
    type: string;
    amount: number;
    points: number;
    img: string;
  }
  const data: Data[] = [
    {
      title: "Cola Next",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Cola-Next.svg",
    },
    {
      title: "Fizup",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Fizup.svg",
    },
    {
      title: "Pakola",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Pakola.svg",
    },
    {
      title: "Cola Next",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Cola-Next.svg",
    },
    {
      title: "Fizup",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Fizup.svg",
    },
    {
      title: "Pakola",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Pakola.svg",
    },
    {
      title: "Cola Next",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Cola-Next.svg",
    },
    {
      title: "Fizup",
      type: "Bottle Pack",
      amount: 4,
      points: 30,
      img: "assets/images/Fizup.svg",
    },
  ];
  const [benefitRewardAchivementData, setBenefitRewardAchivementData] =
    useState<Data[]>([]);
  useEffect(() => {
    setBenefitRewardAchivementData(data);
  }, []);
  const [viewbenefitRewardAchivementData, setViewbenefitRewardAchivementData] =
    useState<Data>();
  const handleRedeemBenefit = (item: Data) => {
    setViewbenefitRewardAchivementData(item);
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="frame-1707480440">
        <div className="frame-1707480438">
          <div className="benefit-reward-achievement">
            Benefit Reward Achievement
          </div>
          <div className="container-fluid">
            <div className="row">
              {benefitRewardAchivementData.map((row) => (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3">
                  <div
                    className="frame-1707480201"
                    onClick={() => handleRedeemBenefit(row)}
                  >
                    <div className="frame-1707480190">
                      <img className="image" src={row.img} />
                      <div className="frame-1707480387">
                        <div className="fizup">{row.title}</div>
                        <div className="frame-1707480388">
                          <div className="bottle-pack">{row.type}</div>
                          <div className="_4-bottles">{row.amount} Bottles</div>
                          <div className="_30-points">{row.points} Points</div>
                        </div>
                        <div className="Redeem_Benefits_button">
                          <div className="redeem-benefits">Redeem Benefits</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* redeme benefits details  */}
      {/* viewbenefitRewardAchivementData */}

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
            <div className="frame-1707480392">
              <div className="frame-1707480391">
                <div className="diamond">
                  <img
                    className="image"
                    src={viewbenefitRewardAchivementData?.img}
                  />
                </div>
                <div className="frame-1707480389">
                  <div className="next-cola">
                    {viewbenefitRewardAchivementData?.title}
                  </div>
                  <div className="bottle-pack">
                    {viewbenefitRewardAchivementData?.type}
                  </div>
                  <div className="_4-bottles">
                    {viewbenefitRewardAchivementData?.amount} Bottles
                  </div>
                  <div className="_30-points">
                    {viewbenefitRewardAchivementData?.points} Points
                  </div>
                </div>
              </div>
              <div className="frame-1707480390">
                <div className="line-48" />
                <div className="terms-conditions">Terms &amp; Conditions</div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default BenefitRewardAchivement;
