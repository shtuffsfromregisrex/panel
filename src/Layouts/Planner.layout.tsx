import { type FC } from 'react'
import data from '../cms/cms.json'
import { type PlannerLayoutProps, type Section, type section } from "../types"

const PlannerLayout: FC<PlannerLayoutProps> = ({ fullPreview, setFullPreview, current_section, children, useSetSection }: PlannerLayoutProps) => {
    const sections: Section[] = data.sections;
    const sectioner = useSetSection
    const handleSection = (section: section) => {
        sectioner(section)
    }

    const handleSetFullPreview = () => {
        setFullPreview(!fullPreview)
    }

    return (
        <div className="relative">
            {fullPreview &&

                <div className="big absolute top-0 bottom-0 bg-black w-full  bg-opacity-50 z-10  backdrop-blur flex justify-center items-center " >
                    <button className="absolute top-2 left-2 text-white w-6 h-6 bg-white bg-opacity-5 text-sm hover:bg-opacity-10 duration-100  rounded-md " onClick={handleSetFullPreview}>X</button>
                    <div className="max-w-xl">

                        <div className="w-full  p-4 rounded-md bg-[#0F1014] text-white text-opacity-80">
                            <div className="flex items-center">
                                <input type={'text'} value={"ideaTitle"} className="font-bold bg-transparent w-full p-2 border outline-none border-white  border-opacity-0 focus:border-opacity-5 rounded" onChange={(e) => console.log(e.target.value)} />
                                {
                                    // showDelBtn &&
                                    <button className={`hover:bg-opacity-10 cursor-default text-red-600 px-4 bg-red-600 bg-opacity-5 h-full py-2 rounded-md ${true ? 'blok opacity-100' : 'hidde opacity-0'} duration-200`}>Del</button>
                                }
                            </div>
                            <hr className="border-b border-[#0F1014] my-2" />
                            {/* <p id="html_content_container"> */}
                            <div contentEditable id="html_content_container" className="border border-opacity-0 border-white outline-none focus:border-opacity-5 rounded-md p-2" onInput={(e) => console.log((e.target))} />
                            {/* </p> */}
                        </div>
                    </div>
                </div>
            }

            <div className=" bg-black text-sm px-20  min-h-screen text-[#9197A2] relative">
                <div className="sticky top-0 bg-black bg-opacity-50 backdrop-blur">
                    <div className="head  py-10 flex justify-between items-center" >
                        <span className="text-white font-bold">✋ Good morning , ndzhwr</span>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-b from-[#9A0000] rounded-full to-[#0075FF]" /> <span className="text-white" > @ndzhwr</span>
                        </div>
                    </div>
                    <div className="navigator  w-full border-b  border-[#0F1014] flex  items-center justify-between">
                        <div className="sections flex items-center gap-2 w-fit">
                            {
                                sections.map((section: Section) => {
                                    return (
                                        <button
                                            key={section.id}
                                            onClick={() => handleSection(section.title as section)}
                                            className={`cursor-pointer hover:text-white py-3 capitalize border-b  border-white border-opacity-0 px-4 ${current_section.toLowerCase() == section.title.toLowerCase() && " text-white border-opacity-100"}`}>
                                            {section.title}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <button className="py-3 px-10 text-[#0075FF]  bg-[#0075FF] bg-opacity-20 hover:bg-opacity-30 rounded-md ">New </button>
                    </div>


                </div>
                <main className="py-10">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PlannerLayout