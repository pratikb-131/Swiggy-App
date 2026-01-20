import { useEffect } from "react";

const About = () => {
    useEffect(() => {
      const set = setInterval(() => {
        console.log("Hello");
      }, 1000);

      return(
        () => clearInterval(set)
      )
    }, []);
  return (
    <div>
      <h1>About</h1>
      <p>This page tells you about us.</p>
      <p>We are learning React Router.</p>
    </div>
  );
};

export default About;
