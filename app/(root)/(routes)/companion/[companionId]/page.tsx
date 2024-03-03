import db from "@/lib/db"
import { CompanionForm } from "../components/companion-form"

interface CompanionIdPageProps {
    params: {
        companionId: string,
    }
}

const CompanionIdPage = async ({ params }:
    CompanionIdPageProps) => {
    
    // console.log(db)
    
    const companion = await db.companion.findUnique({
        where: {
            id: params.companionId
        }
    })

    // console.log(companion);
    

    const categories = await db.category.findMany({})

    // console.log(categories);
    

    return (
        <CompanionForm initialData={companion} categories={categories} />
    )
}

export default CompanionIdPage