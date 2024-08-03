import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components'
 
function Home() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
           <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <h1>No posts found.</h1>
                    <p>Please add some posts using the form above.</p>
                </Container>
           </div>
        )
    }


    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className='text-3xl font-bold'>Latest Posts</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
