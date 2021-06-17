import React,{useState, useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPost] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timeStamp","desc").onSnapshot((snapshot)=>setPost(snapshot.docs.map((doc)=>({id: doc.id, data:doc.data()}))
        )
        );
      
    }, [])

const sendPost = e =>{
    e.preventDefault();

    db.collection('posts').add({name: 'Joseph Castillo',
description:'Test',
mensaje:input, 
photoUrl:'',
timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
})

setInput("");

};

    return ( <div className="feed">
        <div className="feed_Input_Container">
            <div className="feedInput">
                <CreateIcon/>
                <form action="">
                    <input type="text" placeholder="Crear publicación" value={input} onChange={e=>setInput(e.target.value)}/>
                    <button type="submit" onClick={sendPost}>Enviar</button>
                </form>
            </div>
            <div className="feedOption">
                <InputOption Icon={ImageIcon} tittle="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} tittle="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} tittle="Evento" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} tittle="Escribir Artículo" color="#7FC15E"/>
            </div>
        </div>
        {posts.map(({id, data:{name, description, mensaje, photoUrl}})=>(
            <Post key={id}
                  name={name}
                  description={description}
                  mensaje={mensaje}
                  photoUrl={photoUrl}/>
        ))}
        <Post name="Joseph Castillo" description="Esto es una prueba"  mensaje="Wow esto" photoUrl/>
    </div> );
}
 
export default Feed;