import { NextPage } from "next";
import { useEffect, useState } from "react";
import PlannerLayout from "../../Layouts/Planner.layout";
import { useRouter } from "next/router";
import { section } from "../../types";


const Panel: NextPage = () => {


    const router = useRouter();

    const [section, setSection] = useState<section>("ideas")
    useEffect(() => {
        router.push({
            pathname: '/panel',
            query: { section: section },
        })
        // router.query[section] = section
    }, [section])
    return (
        <PlannerLayout current_section={section} setSection={setSection}>
            {
                section == "ideas" &&
                <div>
                    <h1 className="text-white text-2xl font-bold">Ideas</h1>
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