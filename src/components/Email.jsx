import React from "react";
import emailjs from 'emailjs-com';

// export default function sendEmail(){
    
//     emailjs.sendForm('gmail', 'template_yp1rjbg', "Yash", 'user_DTb2pScBsF0GUcAccIBPL')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
// };

const Email = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_yp1rjbg', e.target, 'user_DTb2pScBsF0GUcAccIBPL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <div className="email" style={{padding:"10px"}}>
      <form onSubmit={sendEmail} style={{margin:"10px"}}>
        <label>Name</label>
        <input type="text" name="name" /> <br /> <br />
        <input type="text" name="message" /> <br /> <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Email;
