import portrait from "../assets/portrait.png";

function AboutMe() {
  return (
    <div className="about-me">
      <img src={portrait} alt="Photo of Allison Binger"></img>
      <p>
        Howdy! I'm Allison Binger, a software engineer and full stack web
        developer. I'm currently finishing my education at Atlas School Tulsa
        and will be graduating in December 2024, but I have certifications in
        Cybersecurity Analytics and Network Administration. I love web design
        and front-end development, but I thoroughly enjoy data analytics and ETL
        data projects. I have two corgis, Gouda and Mozzarella, and a corn snake
        named Noodle. I love travelling and camping, although I have a phobia of
        insects! Once I graduate, I hope to enter the tech industry under a
        supportive and collaborative team to find my calling within the field
        and gather experience as an engineer!
      </p>
    </div>
  );
}

export default AboutMe;
