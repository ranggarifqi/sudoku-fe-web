import times from "lodash/times";
import { useAppSelector } from "../../common/hooks";
import { MAX_LIFE, sltHealthPointLive } from "../../store/healthPoint";
import HealthOnPng from "../../common/images/mc-heart-on.png";
import HealthOffPng from "../../common/images/mc-heart-off.png";

const IMG_WIDTH = 20

const HealthPoint = () => {
  const life = useAppSelector(sltHealthPointLive);

  const healthPoints = times(MAX_LIFE);

  return (
    <div className="inline-flex space-x-1">
      {healthPoints.map((v) => {
        if (v + 1 <= life) {
          return (
            <span>
              <img src={HealthOnPng} alt="hp-on" width={IMG_WIDTH} />
            </span>
          );
        }

        return (
          <span>
            <img src={HealthOffPng} alt="hp-off" width={IMG_WIDTH} />
          </span>
        );
      })}
    </div>
  );
};

export default HealthPoint;
