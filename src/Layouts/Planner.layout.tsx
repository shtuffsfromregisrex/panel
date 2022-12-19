import { type FC } from 'react'
import data from '../cms/cms.json'
import { type PlannerLayoutProps, type Section, type section } from "../types"

const PlannerLayout: FC<PlannerLayoutProps> = ({ current_section, children, setSection }: PlannerLayoutProps) => {
    const sections: Section[] = data.sections;

    const handleSection = (section: section) => {
        setSection(section)
    }
    return (
        <div className=" bg-black text-sm px-20  min-h-screen text-[#9197A2]">
            <script>
            </script>
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
                                    onClick={ () => handleSection(section.title as section)}
                                    className={`cursor-pointer hover:text-white py-3 capitalize border-b  border-white border-opacity-0 px-4 ${current_section.toLowerCase() == section.title.toLowerCase() && " text-white border-opacity-100"}`}>
                                    {section.title}
                                </button>
                            )
                        })
                    }
                </div>
                <button className="py-3 px-10 bg-[#0075FF] text-white">New </button>
            </div>
            <main className="py-10">
                {children}
            </main>
        </div>
    )
}

export default PlannerLayout