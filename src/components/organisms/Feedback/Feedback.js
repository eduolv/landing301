import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const feedbacks = [
    {
      name: "João Silva",
      role: "Empresário",
      feedback: "Excelente plataforma! Simplificou a gestão dos meus pedidos e economizou muito tempo.",
      rating: 5,
      avatar: "/images/cliente1.jpg",
    },
    {
      name: "Maria Fernanda",
      role: "Gerente de Vendas",
      feedback: "Muito fácil de usar e integrações impecáveis! Recomendo.",
      rating: 4,
      avatar: "/images/cliente2.jpg",
    },
    {
      name: "Carlos Pereira",
      role: "Coordenador de Projetos",
      feedback: "Aumentou nossa produtividade e otimização de processos. Totalmente satisfeitos!",
      rating: 5,
      avatar: "/images/cliente3.jpg",
    },
    {
      name: "Fernanda Costa",
      role: "CEO",
      feedback: "A solução ideal para nossa empresa. A gestão ficou mais eficiente e nossos clientes estão mais satisfeitos.",
      rating: 5,
      avatar: "/images/cliente4.jpg",
    },
    {
      name: "Ricardo Lima",
      role: "CTO",
      feedback: "Sistema robusto e fácil de integrar com nossos processos. Atendimento excelente!",
      rating: 4,
      avatar: "/images/cliente5.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 overflow-hidden">
      <h2 className="text-2xl font-semibold text-center text-blue-900 mb-8">Feedback dos Clientes</h2>
      <Slider {...settings} className="w-full max-w-5xl mx-auto px-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg mx-4 max-w-xs">
            <div className="flex flex-col items-center mb-3">
              <Avatar src={feedback.avatar} alt={feedback.name} className="w-12 h-12 mb-2" />
              <h3 className="text-lg font-medium text-gray-900">{feedback.name}</h3>
              <p className="text-sm text-gray-600">{feedback.role}</p>
            </div>
            <p className="text-gray-700 mb-3 text-center text-sm">{feedback.feedback}</p>
            <div className="flex justify-center">
              {[...Array(feedback.rating)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 mr-1" />
              ))}
              {[...Array(5 - feedback.rating)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300 mr-1" />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
