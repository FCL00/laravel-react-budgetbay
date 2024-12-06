import { PostContext } from "@/context/PostContext";
import { useContext } from "react";

export const usePostsContext = () => {
    const context = useContext(PostContext);

    if(!context){
        throw Error('PostContext must be used inside an Post Context Provider');
    }

    return context;
}
