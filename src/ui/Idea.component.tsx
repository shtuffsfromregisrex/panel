import { FC , useEffect } from "react";

interface IdeaCardProps {
    id: string,
    title: string,
    htmlContent: string,
    mdContent: string,
}
const Idea: FC<IdeaCardProps> = ({ id, title, htmlContent, mdContent }: IdeaCardProps) => {

    const handleHtmlContent = () => {
        const htmlContentContainer = document.getElementById("html_content_container");
        if (htmlContentContainer) {
            htmlContentContainer.innerHTML = htmlContent;
        }
    }

    useEffect(() => {
        handleHtmlContent();
    }, [])
    
    return (
        <div className="w-full p-4 rounded-md bg-[#] border-[#0F1014]">
            <span className="font-bold"> {title}</span>
            <hr className="border-b border-[#0F1014] " />
            <p id="html_content_container">
            </p>
        </div>
    )
}