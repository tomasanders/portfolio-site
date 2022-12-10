import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6b0d8d80-783a-11ed-a126-b172cf164538";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <p>Thank you for contacting me!</p>
        <p>I'll be in touch soon.</p>
      </>
    );
  };

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="text-xs text-slate-100 leading-8"
    >
      <span className="p">Enter user name</span>:
      <br/>
      <span className="b">{'>'}</span> <input type="text" placeholder="your name" name="name" className="bg-transparent o" required />
      <br/>
      <span className="p">Enter user email</span>:
      <br/>
      <span className="b">{'>'}</span> <input type="email" placeholder="your email" name="email" className="bg-transparent o" required />
      <br/>
      <span className="p">Enter message</span>:
      <br/>
      <div className="flex items-start">
        <span className="b">{'>'}</span>&nbsp;<textarea placeholder="your message" name="message" className="bg-transparent o" required />
      </div>
      <br/>
      <button className="underline decoration-dotted underline-offset-4 y" type="submit">submit message</button>
    </form>
  );
};
