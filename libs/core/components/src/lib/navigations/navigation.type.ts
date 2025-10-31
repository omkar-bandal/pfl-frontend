import { ReactNode } from "react";

export type NavigationConfig = {
  name: string,
  uniqueKey?: string,
  logo?: ReactNode,
  path?: string,
  children?: NavigationConfig[],
  grandChildren?: NavigationConfig[],
}