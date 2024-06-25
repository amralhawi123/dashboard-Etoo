import React from 'react'
import person1 from "../../../imgs/user-01.png"
import person2 from "../../../imgs/user-02.png"
import person3 from "../../../imgs/user-03.png"
import person4 from "../../../imgs/user-04.png"
import person5 from "../../../imgs/user-05.png"
import { Link } from 'react-router-dom'

const Chats = () => {
  return (
    <div>
        <div class="phone_body box" style={{margin:"10px 0 0 0"}}>
        <h5 style={{marginBottom:"10px"}}>Chats</h5>
            <Link to='/message'>
       <div class="chat">
         <img className="chat-user" src={person1} alt='user1'/>
         <div class="chat_info">
           <div class="contact_name">Devid Heilo</div>
           <div class="contact_msg">Hello, how are you?</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">9:20 PM</div>
           <div class="chat_new grad_pb"> New </div>
         </div>
      </div>
      </Link>
      <Link to='/message'>
       <div class="chat">
         <img className="chat-user" src={person2} alt='user1'/>
         <div class="chat_info">
           <div class="contact_name">Henry Fisher</div>
           <div class="contact_msg">
           I am waiting for you </div>
         </div>
         <div class="chat_status">
           <div class="chat_date">9:20 PM</div>
           <div class="chat_new grad_pb"> New </div>
         </div>
      </div>
      </Link>
      <Link to='/message'>
       <div class="chat">
         <img className="chat-user" src={person3} alt='user1'/>
         <div class="chat_info">
           <div class="contact_name">Wilium Smith</div>
           <div class="contact_msg">Where are you now?</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">9:20 PM</div>
           <div class="chat_new grad_pb"> New </div>
         </div>
      </div>
      </Link>
      <Link to='/message'>
       <div class="chat">
         <img className="chat-user" src={person4} alt='user1'/>
         <div class="chat_info">
           <div class="contact_name">Henry Deco</div>
           <div class="contact_msg">Thank you so much!</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">9:20 PM</div>
           <div class="chat_new grad_pb"> New </div>
         </div>
      </div>
      </Link>
      <Link to='/message'>
       <div class="chat">
         <img className="chat-user" src={person5} alt='user1'/>
         <div class="chat_info">
           <div class="contact_name">Wilium Smith</div>
           <div class="contact_msg">Where are you now?</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">9:20 PM</div>
           <div class="chat_new grad_pb"> New </div>
         </div>
      </div>
      </Link>
      <Link to='/message'>
      <div class="chat">
         <img className="chat-user" src={person2} alt='user1'/>
         <div class="chat_info">
           <div class="contact_name">Henry Fisher</div>
           <div class="contact_msg">
           I am waiting for you </div>
         </div>
         <div class="chat_status">
           <div class="chat_date">9:20 PM</div>
           <div class="chat_new grad_pb"> New </div>
         </div>
      </div>
      </Link>
    </div>
    </div>
  )
}

export default Chats