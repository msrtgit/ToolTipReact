import React from "react";
const ToolTip = (props) => {
  const [tooltipdirection, setTooltipDirection] = React.useState("");

  const hanldeTooltip = () => {
    // setting up direction according to direction
    if (props.direction === "BOTTOM") {
      setTooltipDirection("tooltip-bottom");
    } else if (props.direction === "RIGHT") {
      setTooltipDirection("tooltip-right");
    } else if (props.direction === "LEFT") {
      setTooltipDirection("tooltip-left");
    } else {
      setTooltipDirection("tooltip-top");
    }
  };

  return (
    <div className="form-group">
      <label className="form-label">Tool Tip Text</label>
      <h3
        id="ToolTipText"
        className={tooltipdirection}
        onMouseEnter={hanldeTooltip}
      >
        Hover On Me
      </h3>
    </div>
  );
};
export default ToolTip;
