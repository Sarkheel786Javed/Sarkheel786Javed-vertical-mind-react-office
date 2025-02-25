import { useEffect, useState, useRef } from "react";
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
    setDownloadVoucherSetOnStatusBase(0);
  };
  const handleShow = () => setShow(true);

  const [downloadVoucherSetOnStatusBase, setDownloadVoucherSetOnStatusBase] =
    useState<number>(0);
  const handleDownloadVoucher = () => {
    setDownloadVoucherSetOnStatusBase(1);
    handleResendClick();
  };
  // Create refs for the OTP inputs
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpInputChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.length === 1 && index < otpInputs.current.length - 1) {
        otpInputs.current[index + 1]?.focus();
      }
    };
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [countdown]);

  const handleResendClick = () => {
    setCountdown(60); // Start the countdown from 60 seconds
  };
  return (
    <div>
      <div className="frame-1707480440-BenefitRewardAchivement">
        <div className="frame-1707480438-BenefitRewardAchivement">
          <div className="benefit-reward-achievement-BenefitRewardAchivement">
            Benefit Reward Achievement
          </div>
          <div className="container-fluid">
            <div className="row">
              {benefitRewardAchivementData.map((row) => (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3">
                  <div
                    className="frame-1707480201-BenefitRewardAchivement"
                    onClick={() => handleRedeemBenefit(row)}
                  >
                    <div className="frame-1707480190-BenefitRewardAchivement">
                      <img
                        className="image-BenefitRewardAchivement"
                        src={row.img}
                      />
                      <div className="frame-1707480387-BenefitRewardAchivement">
                        <div className="fizup-BenefitRewardAchivement">
                          {row.title}
                        </div>
                        <div className="frame-1707480388-BenefitRewardAchivement">
                          <div className="bottle-pack-BenefitRewardAchivement">
                            {row.type}
                          </div>
                          <div className="_4-bottles-BenefitRewardAchivement">
                            {row.amount} Bottles
                          </div>
                          <div className="_30-points-BenefitRewardAchivement">
                            {row.points} Points
                          </div>
                        </div>
                        <div className="Redeem_Benefits_button-BenefitRewardAchivement">
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
        <Offcanvas.Header>
          <button
            className="btn p-1  text-reset-BenefitRewardAchivement"
            type="button"
            onClick={handleClose}
          >
            <img src="assets/images/radix-icons_cross-1.svg" />
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* onClick={handleClose} */}
          <div className="frame-1707480452-BenefitRewardAchivement">
            <div className="frame-1707480392-BenefitRewardAchivement">
              <div className="frame-1707480391-BenefitRewardAchivement">
                <div className="diamond-BenefitRewardAchivement">
                  <img
                    className="image-BenefitRewardAchivement"
                    src={viewbenefitRewardAchivementData?.img}
                  />
                </div>
                <div className="frame-1707480389-BenefitRewardAchivement">
                  <div className="next-cola-BenefitRewardAchivement">
                    {viewbenefitRewardAchivementData?.title}
                  </div>
                  <div className="bottle-pack-BenefitRewardAchivement">
                    {viewbenefitRewardAchivementData?.type}
                  </div>
                  <div className="_4-bottles-BenefitRewardAchivement">
                    {viewbenefitRewardAchivementData?.amount} Bottles
                  </div>
                  <div className="_30-points-BenefitRewardAchivement">
                    {viewbenefitRewardAchivementData?.points} Points
                  </div>
                </div>
              </div>

              {downloadVoucherSetOnStatusBase === 0 && (
                <>
                  <div className="coupon-BenefitRewardAchivement">
                    <img
                      className="_4481224-18781-1-BenefitRewardAchivement"
                      src="assets/images/gift_vouncher_for_you_img.svg"
                    />
                    <div className="frame-1707480582-BenefitRewardAchivement">
                      <div className="frame-1707480579-BenefitRewardAchivement">
                        <div className="one-benefit-perk-editing-one-perk-one-type-edited-BenefitRewardAchivement">
                          One benefit perk editing-one perk one type edited
                        </div>
                        <div className="frame-1707480573-BenefitRewardAchivement">
                          <div className="expiry-date-feb-18-2025-12-00-am-BenefitRewardAchivement">
                            <span>
                              <span className="expiry-date-feb-18-2025-12-00-am-span-BenefitRewardAchivement">
                                Expiry Date:
                              </span>
                              <span className="expiry-date-feb-18-2025-12-00-am-span2-BenefitRewardAchivement" />
                              <span className="expiry-date-feb-18-2025-12-00-am-span3-BenefitRewardAchivement">
                                Feb 18, 2025, 12:00 AM
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="px-2 w-100">
                          <div
                            className="common-button-BenefitRewardAchivement"
                            onClick={handleDownloadVoucher}
                          >
                            <div className="verify-download-BenefitRewardAchivement">
                              Verify &amp; Download
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="we-will-send-you-a-verification-code-on-your-email-to-verify-your-voucher-BenefitRewardAchivement">
                        We will send you a verification code on your email to
                        verify your voucher
                      </div>
                    </div>
                    <div className="frame-1707480572-BenefitRewardAchivement">
                      <div className="heroicons-gift-20-solid-BenefitRewardAchivement">
                        <img
                          className="group-BenefitRewardAchivement"
                          src="assets/images/heroicons-gift-20-solid.svg"
                        />
                      </div>
                      <div className="gift-voucher-for-you-BenefitRewardAchivement">
                        Gift Voucher for you
                      </div>
                    </div>
                  </div>
                </>
              )}
              {downloadVoucherSetOnStatusBase === 1 && (
                <>
                  <div className="frame-1707480583-BenefitRewardAchivement">
                    <div className="coupon-BenefitRewardAchivement">
                      <img
                        className="_4481224-18781-1-BenefitRewardAchivement"
                        src="assets/images/gift_vouncher_for_you_img.svg"
                      />
                      <div className="frame-1707480579-BenefitRewardAchivement">
                        <div className="one-benefit-perk-editing-one-perk-one-type-edited-BenefitRewardAchivement">
                          One benefit perk editing-one perk one type edited
                        </div>
                        <div className="frame-1707480573-BenefitRewardAchivement">
                          <div className="expiry-date-feb-18-2025-12-00-am-BenefitRewardAchivement">
                            <span>
                              <span className="expiry-date-feb-18-2025-12-00-am-span-BenefitRewardAchivement">
                                Expiry Date:
                              </span>
                              <span className="expiry-date-feb-18-2025-12-00-am-span2-BenefitRewardAchivement" />
                              <span className="expiry-date-feb-18-2025-12-00-am-span3-BenefitRewardAchivement">
                                Feb 18, 2025, 12:00 AM
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="frame-1707480576-BenefitRewardAchivement">
                          <label className="otpWrapper-BenefitRewardAchivement">
                            <div className="label-BenefitRewardAchivement">
                              Enter OTP
                            </div>
                            <div className="frame-1707480575-BenefitRewardAchivement ">
                              {[...Array(6)].map((_, index) => (
                                <input
                                  key={index}
                                  type="text"
                                  className="opt_input"
                                  placeholder="-"
                                  maxLength={1}
                                  ref={(el) => (otpInputs.current[index] = el)}
                                  onChange={handleOtpInputChange(index)}
                                />
                              ))}
                            </div>
                          </label>
                        </div>
                        <div className="check-your-email-we-have-sent-you-a-verification-code-BenefitRewardAchivement">
                          Check your email, we have sent you a verification code
                        </div>
                        <div className="frame-1707480577-BenefitRewardAchivement">
                          {countdown > 0 ? (
                            <div className="back-BenefitRewardAchivement">
                              <div className="back2-BenefitRewardAchivement">
                                Resend in {countdown} sec
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="back-resend-BenefitRewardAchivement" onClick={handleResendClick}>
                                <div className="back2-resend-BenefitRewardAchivement">
                                  Resend
                                </div>
                              </div>
                            </>
                          )}

                          <div className="back3-BenefitRewardAchivement">
                            <div className="back4-BenefitRewardAchivement">
                              Submit
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-1707480572-BenefitRewardAchivement">
                        <div className="heroicons-gift-20-solid-BenefitRewardAchivement">
                          <img
                            className="group-BenefitRewardAchivement"
                            src="assets/images/heroicons-gift-20-solid.svg"
                          />
                        </div>
                        <div className="gift-voucher-for-you-BenefitRewardAchivement">
                          Gift Voucher for you
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="frame-1707480580-BenefitRewardAchivement">
                <div className="terms-conditions-BenefitRewardAchivement">
                  Terms &amp; Conditions
                </div>
                <div className="frame-1707480581-BenefitRewardAchivement">
                  <div className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-BenefitRewardAchivement">
                    <ul className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-span-BenefitRewardAchivement">
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry2-BenefitRewardAchivement">
                    <ul className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-2-span-BenefitRewardAchivement">
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry2-BenefitRewardAchivement">
                    <ul className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-2-span2-BenefitRewardAchivement">
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry2-BenefitRewardAchivement">
                    <ul className="lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-2-span3-BenefitRewardAchivement">
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default BenefitRewardAchivement;
