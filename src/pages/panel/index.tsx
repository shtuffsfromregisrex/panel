import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import PlannerLayout from "../../Layouts/Planner.layout";
import { useRouter } from "next/router";
import { type IdeaProps, type section } from "../../types";
import data from '../../cms/cms.json'
import IdeaComponent from "../../ui/Idea.component";
import { addDoc, collection, doc, limit, query, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../utils/firestore";
import snarkdown from "snarkdown";


const Panel: NextPage = ({ ideasFromFirestore }: any) => {
    console.log(ideasFromFirestore)
    const ideas: IdeaProps[] = data.ideas
    const router = useRouter();
    const [section, setSection] = useState<section>("ideas")
    const [fullPreview, setFullPreview] = useState<boolean>(false)

    const addIdea = (mdContent: string, title: string) => {
        const docref = addDoc(collection(db, "ideas"), {
            id: ideas.length,
            title: title,
            mdContent: mdContent,
            htmlContent: snarkdown(mdContent),
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        console.log("document", docref)
    }
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


    const useSetSection = (section: section) => {
        shouldChangeUrlParam.current = true
        setSection(section);
    }
    return (
        <PlannerLayout current_section={section} useSetSection={useSetSection} fullPreview={fullPreview} setFullPreview={setFullPreview}>
            {
                section == "ideas" &&
                <div>
                    {
                        ideasFromFirestore.length != 0 &&
                        <div className="grid xl:grid-cols-3 gap-4 xs:grid-cols-1 msm:grid-cols-1">
                            {
                                ideasFromFirestore.map((idea: any) => (<IdeaComponent key={idea.id} id={idea.id} htmlContent={idea.htmlContent} mdContent={idea.mdContent} title={idea.title} setFullPreview={setFullPreview} fullPreview={fullPreview} />))
                            }
                        </div>
                    }
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

export async function getServerSideProps() {
    const docs: any = []
    const retrievedIdeas = await getDocs(collection(db, "ideas"));
    retrievedIdeas.forEach((doc) => {
        docs.push(doc.data())
    });
    return { props: { ideasFromFirestore: docs } }
}

export default Panel
