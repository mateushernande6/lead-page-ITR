import Countdown from "react-countdown";
import { Container } from "./style";

export const CountDownTimer = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown
    return (
      <span>
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </span>
    );
  };

  return (
    <div>
      <Container>
        <Countdown date={Date.now() + 1800000} renderer={renderer} />
      </Container>
    </div>
  );
};
