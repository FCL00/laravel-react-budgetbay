import React, {useState, useEffect} from 'react';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Home = () => {
  
  const heading ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vel." 
  const subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ad voluptate itaque, facilis nulla voluptatum voluptas dolorum sed impedit sit!";

  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchPosts = async () => {
      try{
        const response = await fetch("http://127.0.0.1:8000/api/posts");

        if(!response.ok){
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setPosts(result);
        setIsLoading(false);
      }catch(error){
        console.error(error)
        setIsLoading(false);
      }
    }

    fetchPosts();

  }, []);

  if(isLoading){
    return (
      <>
        <Header/>
        <Hero heading={heading} subHeading={subHeading}/>

      <div className="section-container">
        <p className='text-2xl text-center text-white'>Loading...</p>
        {/* You can replace this with a spinner or some loading animation */}
      </div>
      </>
    );
  }



  return (
    <>
      <Header/>
      <Hero heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vel." 
            subHeading={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ad voluptate itaque, facilis nulla voluptatum voluptas dolorum sed impedit sit!"}/>

      {/* card section */}
      
      <div className="section-container">
          <h1 className='font-bold text-2xl text-white mb-4'>Recent Posts</h1>
          <div className="card-grid">
            {posts.map((post)=>{
                return (
                  <PostCard key={post.id} id={post.id} title={post.title} content={post.content} user={post.user}/>
                )
            })}
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Home