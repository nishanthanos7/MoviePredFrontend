/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "./MovieSlider.css";

const MoviesSlider = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="movies-slider">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="movie-slide" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoviesSlider;
