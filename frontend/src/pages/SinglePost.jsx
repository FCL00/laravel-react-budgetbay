import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
// utils
import { formatDate } from "@/utils/formatDate";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchSinglePost = async () => {
            try{
                const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);
                if(!response.ok){
                    throw new Error('Network response was not ok')
                }
                const result = await response.json();
                setPosts(result);
                setLoading(false)
            }catch(error){
                console.error(error);
                setLoading(false);
            };
        }
        fetchSinglePost();
    }, []);

    // format date
    const date = formatDate(post.created_at);

    return (
        <>
            <Header />
            {isLoading ? (
                <>
                    <Hero heading={'loading...'} subHeading={'loading...'} />
                    <main className='section-container text-white'>
                        <p>loading...</p>
                    </main>
                </>
            ):(
                <>
                    <Hero heading={post.title} subHeading={post.user?.name || 'Unknown Author'} date={date}/>
                    <main className='section-container text-white'>
                        <p className=''>{post.content}</p>
                    </main>
                </>
            )}
        </>
    )
}

export default SinglePost