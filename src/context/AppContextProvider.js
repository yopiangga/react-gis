import React from "react";

import { CombineComponents } from "./CombineComponents";
import { LoadingProvider } from "./LoadingContext";
import { SidebarProvider } from "./SidebarContext";
import { UserProvider } from "./UserContext";

const providers = [
  UserProvider,
  LoadingProvider,
  SidebarProvider,
];
export const AppContextProvider = CombineComponents(...providers);
