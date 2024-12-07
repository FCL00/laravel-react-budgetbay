import React from 'react'
import PostForm from '@/components/PostForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Post = () => {
  return (
    <>
        <Header/>
        <Hero heading="Create your own post" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque?"/>
        <div className="flex justify-center item-center p-4">
            <PostForm/>
        </div>
        
        <Footer/>
        
    </>
     
  )
}

export default Post