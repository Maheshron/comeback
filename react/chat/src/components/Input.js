import React, { useContext,useState } from 'react'
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import {db, storage} from "../firebase";
import {v4 as uuid} from "uuid";
import {getDownloadURL,ref,uploadBytesResumable } from "firebase/storage";
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';


function Input() {

  const [text,setText] = useState("");
  const [img,setImg]  = useState(null);

  const {  currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
 

  const handleSend = async () =>{
    if(img){
      const storageRef = ref(storage,uuid());
      const uploadTask = uploadBytesResumable(storageRef,img);
      uploadTask.on(
        (error) =>{

      },
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
          await updateDoc(doc(db,"chats",data.chatId),{
            messages:arrayUnion({
              id:uuid(),
              text,
              senderId:currentUser.uid,
              date:Timestamp.now(),
              img:downloadURL,
            }),
          });
        });
      }
      );
    }

    else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages:arrayUnion({
          id:uuid(),
          text,
          senderId:currentUser.uid,
          date:Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db,"userChats",currentUser.uid),{
      [data.chatId + ".lastMessage"]:{
        text,
      },
      [data.chatId + ".date"]:serverTimestamp(),
    });

    await updateDoc(doc(db,"userChats",data.user.uid),{
      [data.chatId + ".lastMessage"]:{
        text,
      },
      [data.chatId + ".date"]:serverTimestamp(),
    });

    setText("");
    setImg(null);


  }

  return (
    <div className='input'>
      <input 
      type="text" 
      placeholder="Type something..."
      onChange={(e)=>setText(e.target.value)}
      value={text}
      />
      <div className='send'>
              <img style={{width:"25px",height:"25px"}}  src="https://media.istockphoto.com/photos/pay-exactly-peanuts-picture-id172260106?b=1&k=20&m=172260106&s=612x612&w=0&h=RW42uCG2aFvg3pWD8ix3vdBMKVc3YoflaD-PisiptAs="/>
              <input 
              type="file" 
              style={{display:"none"}} 
              id="file"
              onChange={(e) => setImg(e.target.files[0])}
              />
              <label htmlFor="file">
                    <img style={{width:"25px",height:"25px"}}  src="https://media.istockphoto.com/photos/pay-exactly-peanuts-picture-id172260106?b=1&k=20&m=172260106&s=612x612&w=0&h=RW42uCG2aFvg3pWD8ix3vdBMKVc3YoflaD-PisiptAs=" />
              </label>
              <button onClick={handleSend}>Send</button>

      </div>
    </div>
  )
}

export default Input