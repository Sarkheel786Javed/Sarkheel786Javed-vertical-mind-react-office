import { useState } from "react";
import "../../styles/ReferFriend.css";

function ReferFriend() {
  const [Redeem, setRedeem] = useState(false);
  const handleRedeem = () => {
    setRedeem(!Redeem);
  };
  return (
    <div className="cover__">
      {!Redeem && (
        <div className="frame-1707480425">
          <div className="radeem">
            <div className="undraw-social-friends-re-7-uaa-1-1">
              <img src="assets/images/undraw_social_friends_re_7uaa (1) 1.svg" />
            </div>
            <div className="frame-1707480271">
              <div className="redeem-your-code">Redeem your code</div>
              <div className="enter-your-code-to-redeem-your-points">
                Enter your code to redeem your points!
              </div>
            </div>
            <div className="frame-1707480406">
              <input
                className="inpute-code"
                type="text"
                placeholder="Enter code here"
              />

              <div className="redeem-button" onClick={handleRedeem}>
                <div className="redeem">Redeem</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {Redeem && (
        <>
          <div className="frame-1707480425">
            <div className="radeem">
              <div className="undraw-social-friends-re-7-uaa-1-1_2">
                <img src="assets/images/Coins-amico 1.svg" />
              </div>
              <div className="frame-1707480262">
                <div className="frame-1707480261-refer-friend">
                  <div className="congratulations">Congratulations!</div>
                  <div className="you-have-just-earned-40">
                    You have just earned $40
                  </div>
                </div>
                <div className="the-more-you-share-the-more-points-you-will-earn-don-t-waste-time">
                  The more you share, the more points you will earn. Don't waste
                  time!
                </div>
              </div>
              <div className="frame-1707480260" onClick={handleRedeem}>
                <div className="frame-5433">
                  <div className="share">Share</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ReferFriend;
