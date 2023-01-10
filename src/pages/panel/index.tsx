import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import PlannerLayout from "../../Layouts/layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { type section } from "../../types/types";
import dataFromCms from '../../cms/cms.json'
import { collection, getDocs } from "firebase/firestore";
import { firebase } from "../../utils/firestore";
import SectionHeader from "../../components/sectionHeader";
import IdeaComponent from "../../components/ideaComponent";
import { log } from 'console'
import ProjectComponent from "../../components/projectComponent";
import TaskComponent from "../../components/taskComponent";
const CheckLoginStateComponentWithoutSsr = dynamic(() => import("../../components/CheckLoginState"), { ssr: false });

const Panel: NextPage = ({ dataFromFirestore }: any) => {
    const router = useRouter();
    const [section, setSection] = useState<section>("ideas")
    const [fullPreview, setFullPreview] = useState<boolean>(false)
    const shouldChangeUrlParam = useRef(false)

    useEffect(() => {
        if (shouldChangeUrlParam.current === true) {
            router.push({
                pathname: '/panel',
                query: { section: section },
            })
            shouldChangeUrlParam.current = (!shouldChangeUrlParam.current)
        }
    }, [section, router])
    const handleTryReload = () => document.location.href = "/panel"
    const useSetSection = (section: section) => {
        shouldChangeUrlParam.current = true
        setSection(section);
    }

    return (
        <PlannerLayout current_section={section} useSetSection={useSetSection} fullPreview={fullPreview} setFullPreview={setFullPreview}>
            <CheckLoginStateComponentWithoutSsr />
            <SectionHeader section={section} />
            <div>{dataFromFirestore ? (
                section == "ideas" ? (
                    <>
                        <div className="grid xl:grid-cols-3 gap-4 xs:grid-cols-1 msm:grid-cols-1">
                            {
                                dataFromFirestore.ideas.map((idea: any) => (<IdeaComponent key={idea.id} id={idea.id} htmlContent={idea.htmlContent} mdContent={idea.mdContent} title={idea.title} setFullPreview={setFullPreview} fullPreview={fullPreview} />))
                            }
                        </div>
                    </>
                ) : section == "projects" ? (
                    <>
                        <div className="grid xl:grid-cols-2 gap-4 xs:grid-cols-1 msm:grid-cols-1">
                            {
                                dataFromFirestore.projects.map((project: any) => <ProjectComponent key={project.id}  {...project} />)
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <div className="grid xl:grid-cols-2 gap-4 xs:grid-cols-1 msm:grid-cols-1">
                            {
                                dataFromFirestore.tasks.map((task: any) => <TaskComponent key={task.id}  {...task} />)
                            }
                        </div>
                    </>
                )) : (

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl  w-full text text-center">Empty</h1>
                    <p className="text-neutral-800 text-center">No ideas yet, or it&apos;s a network problem </p>
                    <button className="text-black bg-white  px-4 py-2 rounded-md mt-4 hover:bg-opacity-90" onClick={handleTryReload}>Try reload</button>
                </div>
            )}
            </div>




        </PlannerLayout>
    )
}

export async function getServerSideProps() {

    const data: { ideas: any[], projects: any[], tasks: any[] } = {
        ideas: [],
        projects: [],
        tasks: [],
    }
    try {
        const [idsfire, prjfire, tskfire] = await Promise.all([
            getDocs(collection(firebase, "ideas")),
            getDocs(collection(firebase, "projects")),
            getDocs(collection(firebase, "tasks")),
        ])
        idsfire.forEach((doc) => {
            data.ideas.push(doc.data())
        });
        prjfire.forEach((doc) => {
            data.projects.push(doc.data())
        });
        tskfire.forEach((doc) => {
            data.tasks.push(doc.data())
        });
        log(data)
        return { props: { dataFromFirestore: data } }
    } catch (error: any) {
        // console.log(error)
        return { props: { dataFromFirestore: dataFromCms } }
    }

}

export default Panel
