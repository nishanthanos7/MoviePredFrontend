import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/BannerSlider.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
      <Slider {...settings}>
        
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/the-flash_y8ljd1y0_500x749.jpg?v=1685123345"
              alt="Banner 1"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spider-man-across-the-spider-verse_tsm61wbo_500x749.jpg?v=1684521170"
              alt="Banner 2"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-flash-batman_500x749.jpg?v=1681504826"
              alt="Banner 3"
            />
          </div>
        
      </Slider>
    
  );
};

export default BannerSlider;
