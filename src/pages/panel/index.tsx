import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import PlannerLayout from "../../Layouts/Planner.layout";
import { useRouter } from "next/router";
import { type IdeaProps, type section } from "../../types";
import data from '../../cms/cms.json'
import IdeaComponent from "../../ui/Idea.component";
import { addDoc, collection, doc, limit, query, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../utils/firestore";


const Panel: NextPage = ({ ideasFromFirestore }: any) => {
    const [ideas, setIdeas] = useState<IdeaProps[]>(ideasFromFirestore)
  
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
    const handleTryReload = () => document.location.reload()

    const useSetSection = (section: section) => {
        shouldChangeUrlParam.current = true
        setSection(section);
    }
    return (
        <PlannerLayout current_section={section} useSetSection={useSetSection} fullPreview={fullPreview} setFullPreview={setFullPreview}>
            {
                section == "ideas" &&
                <div>{ideasFromFirestore.length != 0 ? (
                    <div className="grid xl:grid-cols-3 gap-4 xs:grid-cols-1 msm:grid-cols-1">
                        {
                            ideasFromFirestore.map((idea: any) => (<IdeaComponent key={idea.id} id={idea.id} htmlContent={idea.htmlContent} mdContent={idea.mdContent} title={idea.title} setFullPreview={setFullPreview} fullPreview={fullPreview} />))
                        }
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-xl  w-full text-neutral-700 text-center">Empty</h1>
                        <p className="text-neutral-800 text-center">No ideas yet, or it&apos;s a network problem </p>
                        <button className="text-neutral-700 bg-neutral-700 bg-opacity-20 px-4 py-2 rounded-md mt-4 hover:bg-opacity-25" onClick={handleTryReload}>Try reload</button>

                    </div>
                )
                }</div>
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
    console.log(data.ideas)
    console.log(docs)
    return { props: { ideasFromFirestore: docs } }
}

export default Panel
