import { type FC , useEffect } from "react";
import { type Idea } from "../types";
import snarkdown from "snarkdown";


const Idea: FC<Idea> = ({id , title,mdContent }: Idea) => {

    useEffect(() => {
        const handleHtmlContent = () => {
            const htmlContentContainer = document.getElementById("html_content_container");
            if (htmlContentContainer) {
                htmlContentContainer.innerHTML = snarkdown(mdContent);
            }
        }
        handleHtmlContent();
    }, [mdContent])

    return (
        <div className="w-full  p-4 rounded-md bg-[#0F1014] text-white text-opacity-80">
            <span className="font-bold"> {title} &nbsp;&nbsp; {id}</span>
            <hr className="border-b border-[#0F1014] my-2" />
            <p id="html_content_container">
            </p>
        </div>
    )
}

export default Idea