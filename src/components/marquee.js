import styled, { keyframes } from 'styled-components';

const marqueeScroll = () => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
`;

const MarqueeWrapper = styled.div`
  --gap: 40px;
  display: flex;
  gap: var(--gap);
  overflow: hidden;
  width: 100%;
  user-select: none;

  .marquee_content {
    animation: ${marqueeScroll} 20s linear infinite ${(props) =>
  props.direction || 'forwards'};
    display: flex;
    flex-shrink: 0;
    gap: var(--gap);
    justify-content: space-around;
    min-width: 100%;

    li {
      font-family: 'Vanguard';
      font-size: 136px;
      line-height: 100%;
      text-shadow: ${(props) => props.theme.textShadow};

      &.outline {
        color: ${(props) => props.theme.body};
        text-shadow: ${(props) => props.theme.textShadowLite};
        -webkit-text-stroke: 1px ${(props) => props.theme.text};
      }

      &.fill {
        &.surf {
          color: ${(props) => props.theme.surf};
          text-shadow: 0px 0px 12px ${(props) => props.theme.surf};
        }
        &.spark {
          color: ${(props) => props.theme.spark};
          text-shadow: 0px 0px 12px ${(props) => props.theme.spark};
        }
        &.giga {
          color: ${(props) => props.theme.giga};
          text-shadow: 0px 0px 12px ${(props) => props.theme.giga};
        }
        &.psybeam {
          color: ${(props) => props.theme.psybeam};
          text-shadow: 0px 0px 12px ${(props) => props.theme.psybeam};
        }
    }
  }
`;

const Marquee = (props) => {
  return (
    <MarqueeWrapper {...props} direction={props.direction}>
      <ul className="marquee_content">
        <li className={props.p1}>Registration Begins</li>
        <li className={props.p1}>•</li>
        <li className={props.p2}>Sep 26</li>
        <li className={props.p3}>•</li>
      </ul>

      <ul className="marquee_content" aria-hidden="true">
        <li className={props.p1}>Registration Begins</li>
        <li className={props.p1}>•</li>
        <li className={props.p2}>Sep 26</li>
        <li className={props.p3}>•</li>
      </ul>
    </MarqueeWrapper>
  );
};

export default Marquee;
