export enum DISPLAY_TYPES {
  EVERYONE = "everyone",
  SELECTED = "selected",
  NOBODY = "nobody",
}

export enum SETTINGS_COLLAPSES {
  PROFILE = "profile",
  THEME = "theme",
  PRIVACY = "privacy",
  SECURITY = "security",
  HELP = "help",
}
export interface DisplayOpt {
  label: string;
  value: DISPLAY_TYPES;
}

export const DisplayTypes: Array<DisplayOpt> = [
  { label: "Everyone", value: DISPLAY_TYPES.EVERYONE },
  { label: "Nobody", value: DISPLAY_TYPES.NOBODY },
  { label: "Selected", value: DISPLAY_TYPES.SELECTED },
];

export enum STATUS_TYPES {
  ACTIVE = "Active",
  AWAY = "Away",
  DO_NOT_DISTURB = "Do not disturb",
}
