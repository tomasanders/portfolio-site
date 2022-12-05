import Image from "next/image";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="profile">
        <Image
          src="/Profile.png"
          width={200}
          height={200}
          alt="A picture of Tom"
        />
      </div>
      <p>
        Hi! I'm Tom Sanders. Originally from the United States, but currently living in Japan since 2015. Relocating to England in early 2023!
        <br /><br />
        I love working on front-end solutions and creating colorful, interesting things. Recently, I've been really into making things as simple as possible (read: remove all the divs!). I value simple structures, clean design patterns, and thoughful user interactions.
        <br /><br />
        When I'm not drinking coffee and writing code, you can find me exploring with my wife, eating at restaurants, playing games, or reading books.
      </p>
    </section>
  );
};
