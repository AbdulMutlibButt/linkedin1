import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';

const Login = () => {
    const auth = getAuth();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    profileUrl: user.photoURL,
                }));
            })
            .catch((error) => {

                console.error("Error signing in: ", error);
            });

    };

    const register = () => {
        if (!name) {
            return alert("Please enter your name");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: profilePic,
                });
            })
            .then(() => {
                const user = auth.currentUser;
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoUrl: user.photoURL
                }));
            })
            .catch((error) => alert(error));
    };
    return (
        <div className='Login'>
            <img
                src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-blue-png-large-size.png'
                alt='LinkedIn Logo'
            />
            <form>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Full name (required if registering)'
                    type='text'
                />
                <input
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder='Profile pic URL (optional)'
                    type='text'
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password'
                />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className='Login__register' onClick={register}> Register Now</span>
            </p>
        </div>
    );
};

export default Login;