import Slider from "react-slick";

const testimonials = [
  {
    name: "Alex Martin",
    role: "Company, HR",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week, and the quality of candidates has significantly improved since we started using Recruito.",
    image: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg",
  },
  {
    name: "Jane Doe",
    role: "CEO, TechCorp",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week, and the quality of candidates has significantly improved since we started using Recruito.",
    image: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg",
  },
  {
    name: "John Smith",
    role: "Founder, StartUp Inc.",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week, and the quality of candidates has significantly improved since we started using Recruito.",
    image: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full py-16 space-x-16">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className="max-w-[50rem] mx-auto p-[2.4rem] bg-white rounded-lg border border-gray-200">
            {/* User Information */}
            <div
              className="flex items-center space-x-4 mb-4"
              key={testimonial.name}
            >
              <img
                src={testimonial.image}
                alt="User Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="p-4 bg-gray-50 rounded-md border border-gray-100">
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
