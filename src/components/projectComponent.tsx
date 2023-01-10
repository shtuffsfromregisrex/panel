import React, { type FC, useEffect } from "react";
import { type ContentEditableDivTarget } from "../types/types";
interface ProjectProps {
    id: string
    name: string
    description: string
    about: string
    kanban: string | null
    progress: number
}

const ProjectComponent: FC<ProjectProps> = ({ id, name, description, about, kanban, progress }: ProjectProps) => {
    useEffect(() => {
        (function () {
            const htmlContentContainer = document.getElementById("html_content_container");
            if (htmlContentContainer) {
                htmlContentContainer.innerHTML = description
            } else {
                console.warn("htmlContentContainer is null");

            }
        }())
    }, [description])
    return (
        <div
            className="w-full  p-4 rounded-md border border-neutral-800 bg-opacity-20 text-white">
            <div className="flex items-center">
                <input type={'text'} value={name} className="font-bold bg-transparent w-full  text-white  p-2 border outline-none border-white  border-opacity-0 focus:border-opacity-5 rounded " />
            </div>
            <div>
                <p>{about}</p>
                <p>{description}</p>
                <a href={kanban as string} >Kanban board</a> <p>{progress}&nbsp;%</p>
            </div>
            <hr className="border-b border-[#0F1014] my-2" />
            {/* <p id="html_content_container"> */}
            <div contentEditable id="html_content_container" className="border text-white text-opacity-90 border-opacity-0 border-white outline-none focus:border-opacity-5 rounded-md p-2" onInput={(e) => console.log((e.target as ContentEditableDivTarget<string>).textContent)} onChange={(e) => console.log(e.target)} dangerouslySetInnerHTML={{ __html: description }} />
            {/* </p> */}
        </div>
    )



}

export default ProjectComponent