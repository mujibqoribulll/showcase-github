import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export type ResetStatusHook = "loading" | "data" | "all" | undefined;
export type loadingType = 'idle' | 'pending' | 'succeeded' | 'failed';
export type paginationType = {
  page: number;
  limit: number;
  next_page: number;
  prev_page: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  total: number;
};
export default interface InitialState {
  loading: loadingType;
  data?: any;
  message?: any;
  pagination?: paginationType;
  [key: string]: any;
}



export interface ButtonTypes {
  title?: string;
  type?: "button" | "submit" | "reset";
  onChange?: () => void;
  state?: any
  icon?: any
  disable?: boolean
  loading?: boolean
  size?: number
}

