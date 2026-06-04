import { createContext } from "react";
import type LoginContext from "../Interfaces/LoginContext";

interface AppContextType {
    LoginContext : LoginContext | undefined;
    IsLoading : boolean | undefined;
    theme : "light" | "dark"
}

const AppContext = createContext<AppContextType | undefined>(undefined);


