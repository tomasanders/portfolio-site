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
        <p className="y">
          <span className="b">{'>'}</span>
          &nbsp;Thank you for contacting me!
          <br/>
          <span className="b">{'>'}</span>
          &nbsp;I'll be in touch soon.
        </p>
      </>
    );
  };

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="leading-8 text-slate-100"
      aria-label="Enter your contact information"
    >
      <label for="name" className="p">Enter user name</label>:
      <br/>
      <span className="b">{'>'}</span> <input type="text" placeholder="your name" id="name" name="name" className="bg-transparent o" required />
      <br/>
      <label for="email" className="p">Enter user email</label>:
      <br/>
      <span className="b">{'>'}</span> <input type="email" placeholder="your email" id="email" name="email" className="bg-transparent o" required />
      <br/>
      <label for="message" className="p">Enter message</label>:
      <br/>
      <div className="flex items-start">
        <span className="b">{'>'}</span>&nbsp;<textarea placeholder="your message" id="message" name="message" className="w-full bg-transparent resize-none o" required />
      </div>
      <br/>
      <button className="underline decoration-dotted underline-offset-4 y" type="submit">submit message</button>
    </form>
  );
};
