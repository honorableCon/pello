import React, { useEffect, useState } from "react";
import classnames from "classnames";

// interface
import { ThemeTypes } from "../../../data/settings";

const changeColor = (id: string) => {
  const element = document.getElementById(`color-${id}`);
  if (element) {
    const color = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");
    const userChatOverlay = document.getElementById("user-chat-overlay");
    if (userChatOverlay) {
      userChatOverlay.style.background = color;
      const rgbColor = color.substring(
        color.indexOf("(") + 1,
        color.indexOf(")")
      );
      document.documentElement.style.setProperty("--bs-primary-rgb", rgbColor);
    }
  }
};

interface ThemeColorTypes {
  id: string;
  color: string;
}

interface FormCheckProps {
  color: ThemeColorTypes;
  selected: ThemeColorTypes | null;
  onChange: (color: ThemeColorTypes) => void;
}
const FormCheck = ({ color, selected, onChange }: FormCheckProps) => {
  const checked = selected && selected.id === color.id ? true : false;
  return (
    <div className="form-check">
      <input
        className="form-check-input theme-color"
        type="radio"
        name="bgcolor-radio"
        id={color.id}
        onChange={() => {
          onChange(color);
        }}
        checked={checked}
      />
      <label className="form-check-label avatar-xs" htmlFor={color.id}>
        <span
          className={classnames(
            "avatar-title",
            "rounded-circle",
            "theme-btn",
            [color.color],
            [color.id]
          )}
          id={`color-${color.id}`}
        ></span>
      </label>
    </div>
  );
};

interface ThemeColorProps {
  theme: ThemeTypes;
  onChangeData: (field: string, value: any) => void;
}

const ThemeColor = ({ theme, onChangeData }: ThemeColorProps) => {
  const [themeColors] = useState<ThemeColorTypes[]>([
    {
      id: "bgcolor-radio1",
      color: "bg-blue",
    },
    {
      id: "bgcolor-radio2",
      color: "bg-info",
    },
    {
      id: "bgcolor-radio3",
      color: "bg-purple",
    },
    {
      id: "bgcolor-radio4",
      color: "bg-pink",
    },
    {
      id: "bgcolor-radio5",
      color: "bg-danger",
    },
    {
      id: "bgcolor-radio6",
      color: "bg-secondary",
    },
  ]);
  const [selected, setSelected] = useState<ThemeColorTypes | null>(null);
  const onChangeThemeColor = (color: ThemeColorTypes) => {
    setSelected(color);
    onChangeData("theme", { ...theme, color: color.id });
  };
  useEffect(() => {
    if (theme && theme.color) {
      const userTheme = themeColors.find(
        (c: ThemeColorTypes) => c.id === theme.color
      );
      if (userTheme) {
        setSelected(userTheme);
      }
    }
  }, [theme, themeColors]);

  useEffect(() => {
    if (selected !== null) {
      changeColor(selected.id);
    }
  }, [selected]);

  return (
    <div>
      <h5 className="mb-3 font-size-11 text-muted text-uppercase">
        Choose Theme Color :
      </h5>
      <div className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-color-list">
        {(themeColors || []).map((color: ThemeColorTypes, key: number) => (
          <FormCheck
            color={color}
            key={key}
            selected={selected}
            onChange={onChangeThemeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeColor;
