import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Placement } from "react-bootstrap/esm/types";

interface CustomTooltipProps {
  position: Placement;
  text?: string;
  className?: string;
  icon?: string;
  html?: string;
  backgroundColor?: string;
}

const CustomTooltip = ({
  position,
  text,
  className,
  icon,
  html,
}: CustomTooltipProps) => {
  // Validate the position or provide a default if needed
  const validPlacements: Placement[] = [
    "auto",
    "top",
    "bottom",
    "left",
    "right",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-start",
    "left-end",
    "right-start",
    "right-end",
  ];

  const placement = validPlacements.includes(position) ? position : "bottom";

  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip id={`tooltip-${placement}`}>{text}</Tooltip>}
    >
      <div style={{ padding: "8px 16px" }}>
        {icon && (
          <>
            <i className={`${icon} pointer `}></i>
          </>
        )}
        {className && (
          <>
            <div className={`${className}`}></div>
          </>
        )}
        {html && <>{html}</>}
      </div>
    </OverlayTrigger>
  );
};

export default CustomTooltip;
