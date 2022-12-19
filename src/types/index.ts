import { type Dispatch, type ReactNode, type SetStateAction } from "react";

export interface CustomLinkProps  {
    title : string ,
    underline : boolean
    url : string ,

}

export interface Section {
    id : string ,
    title : string ,
}

export type section = "ideas" | "projects" | "tasks" | "motivations" ;


export interface PlannerLayoutProps {
    current_section : string
    children : ReactNode ,
    setSection : Dispatch<SetStateAction<section>>
}