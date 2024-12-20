import { createPortal } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FaInfo } from "react-icons/fa";

type FlashMessageProps = {
    title?: string;
    description?: string;
}

export default function FlashMessage({title, description}: FlashMessageProps){

    const portalRoot = document.getElementById("portal-root");

    if(!portalRoot){
        console.error("Portal root element was not found in the DOM");
        return null;
    }

    return createPortal (
        <Alert className="max-w-sm bg-black text-white">
            <AlertTitle>
                <FaInfo/>
                <span>{title}</span>
            </AlertTitle>
            <AlertDescription>
               {description}
            </AlertDescription>
        </Alert>, portalRoot
    );
}