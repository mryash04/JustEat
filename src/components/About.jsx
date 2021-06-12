import React from "react";
import chefOne from "../assets/chef1.jpg";

const About = () => {
  return (
    <div className="about" style={{ width: "90%", margin: "auto" }}>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          wordSpacing: "2px",
          letterSpacing: "2px",
        }}
      >
        Welcome to just eat, your number one source for all things [product].
        We're dedicated to giving you the very best of [product], with a focus
        on [store characteristic 1], [store characteristic 2], [store
        characteristic 3]. Founded in [year] by [founder name], just eat has
        come a long way from its beginnings in [starting location]. When
        [founder name] first started out, [his/her/their] passion for [brand
        message - e.g. "eco-friendly cleaning products"] drove them to [action:
        quit day job, do tons of research, etc.] so that just eat can offer you
        [competitive differentiator - e.g. "the world's most advanced
        toothbrush"]. We now serve customers all over [place - town, country,
        the world], and are thrilled that we're able to turn our passion 90%
        [my/our] own website. [I/we] hope you enjoy [my/our] products as much as
        [I/we] enjoy offering them to you. If you have any questions or
        comments, please don't hesitate to contact [me/us].
      </p>
      <div
        className="about_testimonials"
        style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)"}}
      >
        <img
          src={chefOne}
          alt="testimonials"
          style={{ height: "250px", width: "300px"}}
        />
        <div className="about_testimonials_info">
          <p style={{fontWeight:"500"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            accusantium dolores voluptate sequi obcaecati, reprehenderit
            blanditiis quas odit a voluptatibus. Consectetur tenetur soluta sunt
            quis, ex esse porro? Expedita eum saepe, cumque est maxime
            cupiditate molestias hic et tenetur adipisci, dolore rem sit quod
            voluptatibus vel alias rerum quisquam sequi! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit quam soluta cumque
            voluptatibus modi? Rem nisi, velit ut laboriosam a consectetur
            molestiae at ratione ex corporis consequuntur dolorem, amet sit.
            Nostrum obcaecati distinctio aperiam numquam adipisci illo saepe
            accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Unde dolore, aliquam magnam nam quod ea nulla quam delectus
            corporis. Eos voluptate, illum est accusamus accusantium corporis
            at! Corporis, obcaecati reiciendis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
