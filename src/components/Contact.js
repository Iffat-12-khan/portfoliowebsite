import "./Contact.css";
import { useState } from "react";

function Contact() {

const[name,setName]=useState("");

const[email,setEmail]=useState("");

const[msg,setMsg]=useState("");

function submitForm(e){

e.preventDefault();

alert("Thank you for contacting me!");

setName("");

setEmail("");

setMsg("");

}

return(

<div className="contact">

<h2>Contact Me</h2>

<form onSubmit={submitForm}>

<input

type="text"

placeholder="Your Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>

<input

type="email"

placeholder="Your Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<textarea

placeholder="Your Message"

rows="6"

value={msg}

onChange={(e)=>setMsg(e.target.value)}

></textarea>

<button type="submit">

Send Message

</button>

</form>

</div>

);

}

export default Contact;