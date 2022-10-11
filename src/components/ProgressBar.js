import React from "react";
export const ProgressBar = ({ width, percent }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(percent * width);
  });

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" />
      </div>
    </div>
  );
};
