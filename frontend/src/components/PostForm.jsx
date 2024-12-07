import React, {useState} from 'react'

// tip tap components
import { useForm, Controller } from "react-hook-form";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from '@tiptap/extension-heading';
import CodeBlock from '@tiptap/extension-code-block';
import Image from '@tiptap/extension-image';


// Icons
import { FaBold } from "react-icons/fa6";

// styles
import styles from "./styles/PostForm.module.css";

const PostForm = () => {
    
    const {control, register, handleSubmit, formState: {errors, isSubmitting}, trigger} = useForm();


    // Initialize Tiptap editor
    const editor = useEditor({
        extensions: [
            StarterKit,
            Heading.configure({ levels: [1, 2, 3] }),
            
            CodeBlock.configure({
                HTMLAttributes: {
                  class: 'bg-[#181818] text-violet-500 rounded-sm p-2',
                },
            }),
            Image.configure({
                HTMLAttributes: {
                  class: 'w-[800px] h-[400px] object-cover',
                },
              }),
        ],
        editorProps: {
            attributes: {
                class: "h-96 overflow-y-auto p-2 text-black bg-white rounded-sm outline-none focus:outline-violet-500 focus:outline-2 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto",
            },
        },
    });

    // Toolbar actions
    const addImage = () => {
        const url = prompt('Enter image URL');
        if (url) editor.chain().focus().setImage({ src: url }).run();
    };

    const addCodeBlock = () => {
        editor.chain().focus().toggleCodeBlock().run();
    };

    // on submit data
    const onSubmit = async (data) => {
        try{
            const response = await fetch("http://127.0.0.1:8000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Failed to create post");
            }

            const result = await response.json();
            console.log("Post created successfully:", result);

        }catch(error){
            console.error("Error creating post:", error);
        }
    }
   

    return (
        <form className='w-[800px] p-4' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className='text-white font-semibold' htmlFor="title">Title</label>
                <input className="border rounded px-2 py-1 w-full" id='title'{ ...register("title", {required: "Title is required"})} />
                { errors.title && <p className="text-red-500">{ errors.title.message }</p>}
            </div>

            {/* Toolbar */}
            <div className="mb-4">
                {editor && (
                    <div className="mb-2 flex items-center space-x-2">
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className={`px-2 py-1 text-xl rounded ${
                                editor.isActive('bold') ? 'bg-violet-300' : 'bg-violet-100'
                            }`}
                        >
                            <FaBold />
                        </button>
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className={`px-2 py-1 text-sm rounded ${
                                editor.isActive('italic') ? 'bg-violet-300' : 'bg-violet-100'
                            }`}
                        >
                            Italic
                        </button>
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            className={`px-2 py-1 text-sm rounded ${
                                editor.isActive('heading', { level: 1 })
                                    ? 'bg-violet-300'
                                    : 'bg-violet-100'
                            }`}
                        >
                            H1
                        </button>
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            className={`px-2 py-1 text-sm rounded ${
                                editor.isActive('heading', { level: 2 })
                                    ? 'bg-violet-300'
                                    : 'bg-violet-100'
                            }`}
                        >
                            H2
                        </button>
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                            className={`px-2 py-1 text-sm rounded ${
                                editor.isActive('heading', { level: 3 })
                                    ? 'bg-violet-300'
                                    : 'bg-violet-100'
                            }`}
                        >
                            H3
                        </button>
                        <button
                            type="button"
                            onClick={addCodeBlock}
                            className="px-2 py-1 text-sm rounded bg-violet-100"
                        >
                            Code Block
                        </button>
                        <button
                            type="button"
                            onClick={addImage}
                            className="px-2 py-1 text-sm rounded bg-violet-100"
                        >
                            Add Image
                        </button>
                    </div>
                )}
            </div>

            {/* editor */}
            <div className="mb-4 space-y-2">
                <label htmlFor="content" className="block text-sm font-medium text-white ">
                    Content
                </label>
                <Controller
                    name="content"
                    control={control}
                    rules={{ required: 'content is required' }}
                    defaultValue={editor?.getHTML() || ''}
                    render={({ field }) => (
                        <div>
                            <EditorContent
                                className={styles['editor-content']}
                                editor={editor}
                                onBlur={() => {
                                    field.onChange(editor.getHTML());
                                    trigger('content');  // Make sure to wait for the validation
                                }}
                            />
                        </div>
                    )}
                />
                {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>}
            </div>
        

            <button className='form-button bg-violet-500 text-white py-2 px-4 rounded' type="submit" disabled={isSubmitting} >
                {isSubmitting ? "Submitting..." : "Create Post"}
            </button>
        </form>
    )
}

export default PostForm;


// tiptap documentation: https://tiptap.dev/docs/editor/extensions/nodes/heading

// Handle editor content changes
// const handleEditorChange = () => {
//     if (editor) {
//         const htmlContent = editor.getHTML();
//         setPreviewContent(htmlContent);  // Set the preview content
//     }
// };

{/* Preview Section */}
{/* <div className="mt-8">
    <h3 className="text-lg font-semibold">Preview</h3>
    <div
        className="prose prose-sm mt-4 p-4 border border-gray-200 rounded-md bg-gray-50"
        dangerouslySetInnerHTML={{ __html: previewContent }}
    />
</div> */}
