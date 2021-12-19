import times from "lodash/times";
import { useAppSelector } from "../../common/hooks";
import { MAX_LIFE, sltHealthPointLive } from "../../store/healthPoint";
import HealthOnPng from "../../common/images/mc-heart-on.png";
import HealthOffPng from "../../common/images/mc-heart-off.png";

const IMG_WIDTH = 20;

const HealthPoint = () => {
  const life = useAppSelector(sltHealthPointLive);

  const healthPoints = times(MAX_LIFE);

  return (
    <div className="inline-flex space-x-1 items-center w-full justify-center">
      {healthPoints.map((v, i) => {
        if (v + 1 <= life) {
          return (
            <span key={`hp-${i}`}>
              <img src={HealthOnPng} alt="hp-on" width={IMG_WIDTH} />
            </span>
          );
        }

        return (
          <span key={`hp-${i}`}>
            <img src={HealthOffPng} alt="hp-off" width={IMG_WIDTH} />
          </span>
        );
      })}
    </div>
  );
};

export default HealthPoint;
