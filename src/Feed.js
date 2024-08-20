import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import Image from '@mui/icons-material/Image';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Event from '@mui/icons-material/Event';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Post from './Post';
import { db } from './firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postsCollection = collection(db, "posts");
        const unsubscribe = onSnapshot(postsCollection, (snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        );

        return () => unsubscribe();
    }, []);

    const sendPost = async (e) => {


        e.preventDefault();
        try {
            const postsCollection = collection(db, "posts");
            await addDoc(postsCollection, {
                name: "mutlib",
                description: "this is a test",
                message: input,
                photoUrl: "",
                timestamp: serverTimestamp(),
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
    return (
        <div className='Feed'>
            <div className='Feed__inputContainer'>
                <div className='Feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='Feed__inputOptions'>
                    <InputOption Icon={Image} title="photo" color="#70b5f9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
                    <InputOption Icon={Event} title="Event" color="#c0cbcd" />
                    <InputOption Icon={CalendarMonth} title="Write article" color="#7fc15e" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />

            ))}
            <Post name="mutlib" description="This is a test" message="WOW this worked" photoUrl="" />

        </div>
    )
}

export default Feed