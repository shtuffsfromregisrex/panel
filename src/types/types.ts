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
    useSetSection : (arg0 : section) => void ;
    fullPreview : boolean ,
    setFullPreview : Dispatch<SetStateAction<boolean>>
}



export interface IdeaProps  {
    id : string ,
    title : string ,
    htmlContent : string ,
    mdContent : string,
    createdAt? : Date ,
    updatedAt? : Date ,
    fullPreview? : boolean ,
    setFullPreview? : Dispatch<SetStateAction<boolean>>
}

export interface SectionHeaderProps {
    section  : section ,
    action? : () => void
}

export interface ContentEditableDivTarget<T> extends EventTarget {
    textContent: T,
}