// src/types/react-vertical-timeline-component.d.ts
declare module "react-vertical-timeline-component" {
  import * as React from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "2-columns" | "2-columns-left" | "2-columns-right";
    lineColor?: string;
    children?: React.ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    onTimelineElementClick?: () => void;
    position?: "left" | "right";
    style?: React.CSSProperties;
    visible?: boolean;
    children?: React.ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
