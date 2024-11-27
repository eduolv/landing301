import * as React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMobileAlt, faDesktop } from '@fortawesome/free-solid-svg-icons'; 

const items = [
  {
    icon: <FontAwesomeIcon icon={faChartBar} className="text-blue-500" />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
    image: 'https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png',
  },
  {
    icon: <FontAwesomeIcon icon={faMobileAlt} className="text-green-500" />,
    title: 'Mobile integration',
    description:
      'This item could provide information about the mobile app version of the product.',
    image: 'https://tailwindui.com/plus/img/component-images/bento-03-performance.png',
  },
  {
    icon: <FontAwesomeIcon icon={faDesktop} className="text-purple-500" />,
    title: 'Available on all platforms',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
    image: 'https://tailwindui.com/plus/img/component-images/bento-03-collaborate.png',
  },
];

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 sm:hidden">
      <div className="flex gap-4 overflow-auto">
        {items.map(({ title }, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(index)}
            className={`py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out ${
              selectedItemIndex === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="border rounded-lg p-4">
        <div className="mb-2 h-72 flex justify-center items-center">
          <img
            src={items[selectedItemIndex].image}
            alt={selectedFeature.title}
            className="object-contain max-h-full"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium">{selectedFeature.title}</h4>
          <p className="text-sm text-gray-600">{selectedFeature.description}</p>
        </div>
      </div>
    </div>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

export default function CtaSelectComponent() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <div id="features" className="py-16 sm:py-20 px-4 sm:px-40">
      <div className="w-full sm:w-3/5 mb-8">
        <h2 className="text-2xl sm:text-3xl text-black mb-4">Product features</h2>
        <p className="text-gray-600 mb-6 sm:mb-8">
          Provide a brief overview of the key features of the product. For example, you could
          list the number of features, their types or benefits, and add-ons.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="sm:w-2/3">
          <div className="border rounded-lg w-full h-[500px] flex justify-center items-center">
            <img
              src={items[selectedItemIndex].image}
              alt={selectedFeature.title}
              className="object-contain max-h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:w-1/3 h-full">
          {items.map(({ icon, title, description }, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(index)}
              className={`flex flex-col items-start p-4 rounded-lg transition-colors duration-300 ease-in-out text-left ${
                selectedItemIndex === index
                  ? 'bg-gray-100 text-black'
                  : 'bg-white text-gray-600'
              } hover:bg-gray-50`}
            >
              <div className="flex items-center gap-2">
                {icon}
                <h6 className="text-lg">{title}</h6>
              </div>
              <p className="text-sm">{description}</p>
            </button>
          ))}
          <button className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Saiba mais
          </button>
        </div>
        <MobileLayout
          selectedItemIndex={selectedItemIndex}
          handleItemClick={handleItemClick}
          selectedFeature={selectedFeature}
        />
      </div>
    </div>
  );
}
