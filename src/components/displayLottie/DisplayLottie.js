import React, {Suspense} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = (props) => {
  
    const animationData = props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      isClickToPause: false
    };

    return (
      <div>
        <Suspense fallback={<Loading />}>
        {/* Click disable */}
        <div style={{ pointerEvents: "none" }}>
          <Lottie
            options={defaultOptions}
            isStopped={false}
            isPaused={false}
          />
        </div>
      </Suspense>
      </div>
    );
  }

export default DisplayLottie;
