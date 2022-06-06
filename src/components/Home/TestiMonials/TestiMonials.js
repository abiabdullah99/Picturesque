import TestiMonialsDetails from "../TestiMonialsDetails/TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import userPic from "../../../images/user-one.png";
import "./TestiMonials.css";

const TestiMonials = () => {
  const testiMonials = [
    {
      name: "Nelson Grii",
      description:
        "Our classic photographers Alma and Michael and videographer Mike V were incredible! They felt like friends taking photos at our wedding.",
      address: "Russia",
      img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Zara Alex",
      description:
        "Amy and Kevin were absolutely amazing. They got pictures I didn't think about. I am so grateful to have all these memories.",
      address: "England",
      img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Travis Head",
      description:
        "Classic photographers exceeded my expectations for my wedding! My photographer Holly was amazing during the whole wedding day.",
      address: "Canada",
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Kate Pretty",
      description:
        "Extremely professional and great at giving directions. Photos turned out perfect! ",
      address: "Finland",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
      name: "Samantha Aliye",
      description:
        "Best decision to choose Classic Photographers. I picked my own photographer and Ina was absolutely amazing",
      address: "Norway",
      img: "https://images.unsplash.com/photo-1616065298043-67646192dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg3fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Michel Jack",
      description:
        "I just got married on 3/26/22 & booked my wedding photographer with Classic Photographer. I had an amazing experience!.",
      address: "China",
      img: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Zyan Malik",
      description:
        "Excellent experience! Photographer was in constant communication with us and met our expectation",
      address: "Pakistan",
      img: "https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Alisha Tioo",
      description:
        "I loved our photographers! One happened to go to elementary school with me, so that was funny.",
      address: "Bangladesh",
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAxfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
    <h1 className="testi-title font-serif">Let them speak for us !</h1>
    <p className="testi-text font-serif">Some impresssions from our customers</p>
    <section id="testimonial" className="testimonials">
      <div>
        <div>
          <div>
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div className="item">
                  <div className="shadow-effect">
                    <img className="img-circle" src={userPic} alt="" />

                    <p>
                      Classic photographers exceeded my expectations for my
                      wedding! My photographer Holly was amazing during the
                      whole wedding day.
                    </p>
                  </div>
                  <div className="testimonial-name">
                    <h5>Bi Kon Tim</h5>
                    <small>Japan</small>
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TestiMonials;
