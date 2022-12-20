import { type NextPage } from "next";
import { useEffect, useState } from "react";
import PlannerLayout from "../../Layouts/Planner.layout";
import { useRouter } from "next/router";
import { type Idea, type section } from "../../types";
import data from '../../cms/cms.json'
import IdeaComponent from "../../ui/Idea.component";
const Panel: NextPage = () => {
    const ideas  : Idea[]   = data.ideas
    const router = useRouter();
    const [section, setSection] = useState<section>("ideas")
    useEffect(() => {
        router.push({
            pathname: '/panel',
            query: { section: section },
        })
    }, [section])
    return (
        <PlannerLayout current_section={section} setSection={setSection}>
            {
                section == "ideas" &&
                <div>
                    {/* <h1 className="text-white text-2xl font-bold">Ideas</h1> */}
                    <div className="grid grid-cols-3 gap-4">
                        {
                        
                        ideas.map(idea => ( <IdeaComponent key={idea.id} id={idea.id} htmlContent={idea.htmlContent} mdContent={idea.mdContent} title={idea.title} />))
                        }
                    </div>
                </div>
            }
                        {
                section == "projects" &&
                <div>
                    <h1 className="text-white text-2xl font-bold">Projects</h1>
                </div>
            }
                        {
                section == "motivations" &&
                <div>
                    <h1 className="text-white text-2xl font-bold">Motivations</h1>
                </div>
            }
                        {
                section == "tasks" &&
                <div>
                    <h1 className="text-white text-2xl font-bold">Tasks</h1>
                </div>
            }
        </PlannerLayout>
    )
}


export default Panel