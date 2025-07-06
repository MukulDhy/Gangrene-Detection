import React from 'react';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function AppSlider({ label, value, defaultValue, max, min, onChange }) {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div>
      <p>{label}</p>
      <div className="p-2">
        <Slider
          onChange={handleChange}
          min={min}
          max={max}
          defaultValue={defaultValue}
          value={value}
          step={0.01}
        />
      </div>
    </div>
  );
}

export default AppSlider;
