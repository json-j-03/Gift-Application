import React from 'react';
import '../css/Occasion.css';

const Occasion = () => {
  return (
    <div className="container">
      <div className="box">
        <a href="www.behance.net">
          <span>
            <img
              src="https://i.pinimg.com/736x/bd/d1/2b/bdd12b7e520286e6bd5885476de68dec.jpg"
              alt=""
            />
            Behance
          </span>{' '}
        </a>
        <p>
          Features: Ideal for designers, illustrators, and creative professionals.
          Allows the creation of project portfolios.
        </p>
      </div>
      <div className="box">
        <a href="dribbble.com">
          <span>
            <img
              src="https://th.bing.com/th/id/R.9f01f88c8267d9a7ada397f99d89316c?rik=cepAzyUezk5kNg&riu=http%3a%2f%2finvites-shop.com%2fen%2fwp-content%2fuploads%2f2013%2f04%2fdribl_logo.jpg&ehk=UxVv02%2bfh8%2bM6PYepfg0e09UsfUhuPhSZexXaa%2bnZLM%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            Dribbble
          </span>
        </a>
        <p>
          Features: A platform for designers to showcase their work, particularly
          focusing on smaller design snippets called "shots."
        </p>
      </div>
      <div className="box">
        <a href="www.artstation.com">
          <span>
            <img
              src="https://th.bing.com/th/id/OIP.Wxx6J0TOgXsiCqapfDbrOgHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
            ArtStation
          </span>
        </a>
        <p>
          Features: Geared towards artists in the fields of gaming, film, media, and
          entertainment. It allows artists to showcase their portfolios.
        </p>
      </div>
      <div className="box">
        <a href="portfolio.adobe.com">
          <span>
            <img
              src="https://th.bing.com/th/id/OIP.89WHXH-g9dSv6k9I8nxa4wHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
            Adobe Portfolio
          </span>
        </a>
        <p>
          Features: Integrated with Adobe Creative Cloud, it allows users to create a
          portfolio website with Adobe tools.
        </p>
      </div>
    </div>
  );
};

export default Occasion;
