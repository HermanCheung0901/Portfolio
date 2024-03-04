"use client"

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function RemoveButton({id}) {

    const router = useRouter();

    async function removeBook() {
        const confirmed = confirm("Please confirm to remove book.");

        if (confirmed) {
            const res = await fetch(`/book-note/detail/${id}/api/remove`, {
                method: "DELETE",
            })

            if(res.ok) {
                // Wait for a short delay to allow for the deletion to propagate
                await new Promise(resolve => setTimeout(resolve, 500));

                router.push("/book-note");
            }
        }
    }

    return (
        <button className="remove-button" type="button" onClick={()=>{removeBook()}}><FontAwesomeIcon icon={faTrashCan} style={{color: "#ffffff",}} /> Delete</button>
    )
}