import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpeg";
import Img2 from "../../assets/portfolio2.jpeg";
import Img3 from "../../assets/portfolio3.jpeg";
import Img4 from "../../assets/portfolio4.jpeg";
import Img5 from "../../assets/portfolio2.jpeg";
import Img6 from "../../assets/portfolio4.jpeg";

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"This is a Student Grade App",
      github:"https://github.com/Pvoldemorte/StudentGradeApp",
      demo:"https://silly-piroshki-2bf12f.netlify.app/"
    },
    {
      id:2,
      image:Img2,
      title:"This is a Weather-app",
      github:"https://github.com/Pvoldemorte/weather-app",
      demo:"https://starlit-conkies-484b59.netlify.app"
    },
    {
      id:3,
      image:Img3,
      title:"This is a Parallex Website",
      github:"https://github.com/Pvoldemorte/HTML---CSS-Mini-Project---HTML---CSS-Mini-Project---ze2n9fy42fnp",
      demo:"https://symphonious-licorice-b39467.netlify.app/"
    },
    {
      id:4,
      image:Img4,
      title:"This is a test-app",
      github:"https://github.com/Pvoldemorte",
      demo:"https://dribbble.com"
    },
    {
      id:5,
      image:Img5,
      title:"This is a Add_to_cart Project",
      github:"https://github.com/Pvoldemorte",
      demo:"https://csb-4tmuvc.netlify.app/"
    },
    {
      id:6,
      image:Img6,
      title:"This is a protfolio item title",
      github:"https://github.com",
      demo:"https://dribbble.com"
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My <span>Projects</span></h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo})=>{
          return(
              <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
