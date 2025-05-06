import { SVGProps } from "react";

export interface TSVG extends SVGProps<SVGSVGElement> {
  color?: string;
  hoverColor?: string;
}
