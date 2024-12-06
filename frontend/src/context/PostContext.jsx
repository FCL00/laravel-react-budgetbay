import { Children, createContext, useReducer } from "react";

export const PostContext = createContext();


const postReducer = (state, action) => {
    switch(action.type){
        case "set_post": 
            return {posts: action.payload};
        case "create_post":
            return {posts: [action.payload, ...state.posts]};
        case "delete_post":
            return {posts: state.posts.filter((workout)=>{
                return posts.id !== action.payload.id;
            })};
        default:
            return state;
    }
}


export const PostContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(postReducer, {posts: null});

    return (
        <PostContext.Provider value={{...state, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

