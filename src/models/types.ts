import { LyricsDataInterface, ToastInterface } from "./interfaces";

type ToastType = {
  toastState: ToastInterface;
  setToastState: React.Dispatch<React.SetStateAction<ToastInterface>>;
};

type LyricsDataType = {
  lyricsData: LyricsDataInterface;
  setLyricsData: React.Dispatch<React.SetStateAction<LyricsDataInterface>>;
};

type menuStateType = {
  menuIsClosed?: boolean;
  setMenuIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { ToastType, LyricsDataType, menuStateType };
