import { createContext, useContext } from "react";

// Helper Service and models
import { IUser } from "../utils/model/users";

export interface GeneralContextValues {
  users: IUser[];
  user: IUser | undefined;
  setUser: (value: IUser | undefined) => void;
}

// General Context creation
export const GeneralContext = createContext<GeneralContextValues>({} as GeneralContextValues);

// Custom hook to access context
export const useGeneralContext = () => useContext(GeneralContext);
