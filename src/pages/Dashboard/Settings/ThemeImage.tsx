import React, { useEffect, useState } from "react";
import classnames from "classnames";

// interface
import { ThemeTypes } from "../../../data/settings";

const changeImage = (id: string) => {
  const element = document.getElementById(`image-${id}`);
  if (element) {
    const image = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-image");
    const userChat = document.getElementById("user-chat");
    if (userChat) {
      userChat.style.backgroundImage = image;
    }
  }
};

interface ThemeImageTypes {
  id: string;
  pattern: string;
}

interface FormCheckProps {
  image: ThemeImageTypes;
  selected: ThemeImageTypes | null;
  onChange: (color: ThemeImageTypes) => void;
}
const FormCheck = ({ image, selected, onChange }: FormCheckProps) => {
  const checked = selected && selected.id === image.id ? true : false;
  return (
    <div className="form-check">
      <input
        className="form-check-input theme-img"
        type="radio"
        name="bgimg-radio"
        id={image.id}
        onChange={() => {
          onChange(image);
        }}
        checked={checked}
      />
      <label className="form-check-label avatar-xs" htmlFor={image.id}>
        <span
          className={classnames(
            "avatar-title",
            "rounded-circle",
            "theme-btn",
            [image.pattern],
            [image.id]
          )}
          id={`image-${image.id}`}
        ></span>
      </label>
    </div>
  );
};

interface ThemeImageProps {
  theme: ThemeTypes;
  onChangeData: (field: string, value: any) => void;
}

const ThemeImage = ({ theme, onChangeData }: ThemeImageProps) => {
  const [themeImages] = useState<ThemeImageTypes[]>([
    {
      id: "bgimg-radio1",
      pattern: "bg-pattern-1",
    },
    {
      id: "bgimg-radio2",
      pattern: "bg-pattern-2",
    },
    {
      id: "bgimg-radio3",
      pattern: "bg-pattern-3",
    },
    {
      id: "bgimg-radio4",
      pattern: "bg-pattern-4",
    },
    {
      id: "bgimg-radio5",
      pattern: "bg-pattern-5",
    },
    {
      id: "bgimg-radio6",
      pattern: "bg-pattern-6",
    },
    {
      id: "bgimg-radio7",
      pattern: "bg-pattern-7",
    },
    {
      id: "bgimg-radio8",
      pattern: "bg-pattern-8",
    },
    {
      id: "bgimg-radio9",
      pattern: "bg-pattern-9",
    },
  ]);

  const [selected, setSelected] = useState<ThemeImageTypes | null>(null);
  const onChangeThemeColor = (image: ThemeImageTypes) => {
    setSelected(image);
    onChangeData("theme", { ...theme, image: image.id });
  };
  useEffect(() => {
    if (theme && theme.image) {
      const userTheme = themeImages.find(
        (c: ThemeImageTypes) => c.id === theme.image
      );
      if (userTheme) {
        setSelected(userTheme);
      }
    }
  }, [theme, themeImages]);

  useEffect(() => {
    if (selected !== null) {
      changeImage(selected.id);
    }
  }, [selected]);

  return (
    <div className="mt-4 pt-2">
      <h5 className="mb-3 font-size-11 text-muted text-uppercase">
        Choose Theme Image :
      </h5>
      <div className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-btn-list-img">
        {(themeImages || []).map((image: ThemeImageTypes, key: number) => (
          <FormCheck
            image={image}
            key={key}
            selected={selected}
            onChange={onChangeThemeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeImage;
