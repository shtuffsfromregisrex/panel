import { type FC, useEffect, useState } from "react";
import { type ContentEditableDivTarget, type IdeaProps } from "../types/types";
import snarkdown from "snarkdown";



const Idea: FC<IdeaProps> = ({ id, title, mdContent, setFullPreview, fullPreview, htmlContent }: IdeaProps) => {
    const [showDelBtn, setShowDelBtn] = useState<boolean>(false)
    const [ideaTitle, setIdeaTitle] = useState<string>(title)
    useEffect(() => {
        const handleHtmlContent = () => {
            const htmlContentContainer = document.getElementById("html_content_container");
            if (htmlContentContainer) {
                htmlContentContainer.innerHTML = snarkdown(mdContent);
            } else {
                console.warn("htmlContentContainer is null");

            }
        }
        handleHtmlContent();
    }, [mdContent])
    return (
        <div
            className="w-full  p-4 rounded-md bg-neutral-500 bg-opacity-20 text-white "
            onMouseOver={() => setShowDelBtn(true)}
            onMouseLeave={() => setShowDelBtn(false)}
        >
            <div className="flex items-center">
                <input type={'text'} value={ideaTitle} className="font-bold bg-transparent w-full text-white  p-2 border outline-none border-white  border-opacity-0 focus:border-opacity-5 rounded " onChange={(e) => setIdeaTitle(e.target.value)} />
                {
                    <button className={`hover:bg-opacity-10 cursor-default text-red-600 px-4 bg-red-600 bg-opacity-5 h-full py-2 rounded-md ${showDelBtn ? 'blok opacity-100' : 'hidde opacity-0'} duration-200`}>Del</button>
                }
            </div>
            <hr className="border-b border-[#0F1014] my-2" />
            {/* <p id="html_content_container"> */}
            <div contentEditable id="html_content_container" className="border text-white text-opacity-90 border-opacity-0 border-white outline-none focus:border-opacity-5 rounded-md p-2" onInput={(e) => console.log((e.target as ContentEditableDivTarget<string>).textContent)} onChange={(e) => console.log(e.target)} dangerouslySetInnerHTML={{ __html: snarkdown(mdContent) }} />
            {/* </p> */}
        </div>
    )
}

export default Idea