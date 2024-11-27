"use client";

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faChartBar,
  faTimes,
  faBars,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

const HeaderB = () => {
  const dropdownNavs = [
    {
      navs: [
        {
          title: 'Analytics',
          desc: 'Visualize métricas detalhadas para otimizar seus resultados.',
          path: '#',
          icon: <FontAwesomeIcon icon={faChartLine} className="w-5 h-5" />,
        },
        {
          title: 'Reports',
          desc: 'Gere relatórios completos para monitorar o progresso.',
          path: '#',
          icon: <FontAwesomeIcon icon={faChartBar} className="w-5 h-5" />,
        },
      ],
    },
  ];

  const [menuState, setMenuState] = useState(false);
  const [dropdownState, setDropdownState] = useState({ isActive: false, idx: null });
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null); 

  const navigation = [
    { title: 'Produtos', path: '#', isDropdown: true, navs: dropdownNavs },
    { title: 'Parceiros', path: '#', isDropdown: false },
    { title: 'Preços', path: '#', isDropdown: false },
    { title: 'Contato', path: '/about', isDropdown: false },
  ];

  const toggleDropdown = (idx) => {
    setDropdownState((prevState) => ({
      idx,
      isActive: prevState.idx === idx ? !prevState.isActive : true,
    }));
  };

  // Fechar o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdownState({ isActive: false, idx: null });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Atualizar estado ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-20 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-90'
        }`}
      >
        <div className="flex items-center justify-between px-4 max-w-screen-xl mx-auto py-3">
          <a href="#" className="flex-shrink-0">
            <img src="/images/logo.png" width={90} height={50} alt="Logo" />
          </a>

          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800 transition duration-200"
              onClick={() => setMenuState(!menuState)}
            >
              <FontAwesomeIcon icon={menuState ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>

          {/* Adicionando a ref no contêiner de navegação */}
          <div ref={navRef} className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-6">
              {navigation.map((item, idx) => (
                <li key={idx} className="relative">
                  {item.isDropdown ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-gray-700 hover:text-blue-800 transition duration-200 dropdown-button"
                        onClick={() => toggleDropdown(idx)}
                      >
                        {item.title}
                        <FontAwesomeIcon
                          icon={dropdownState.idx === idx && dropdownState.isActive ? faChevronUp : faChevronDown}
                          className="w-3 h-3"
                        />
                      </button>
                      {dropdownState.idx === idx && dropdownState.isActive && (
                        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border z-20 rounded-lg dropdown-menu p-4 transition-opacity duration-300">
                          <ul className="space-y-4">
                            {item.navs.map((dropdownItem, idx) => (
                              <li key={idx}>
                                <ul className="mt-4 space-y-4">
                                  {dropdownItem.navs.map((navItem, idx) => (
                                    <li key={idx} className="group">
                                      <a href={navItem.path} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full text-indigo-600 flex items-center justify-center bg-gray-100">
                                          {navItem.icon}
                                        </div>
                                        <div>
                                          <span className="text-gray-800 font-medium group-hover:text-blue-800 transition duration-200">
                                            {navItem.title}
                                          </span>
                                          <p className="text-gray-600 text-sm mt-1">{navItem.desc}</p>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.path} className="text-gray-700 hover:text-blue-800 transition duration-200">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-800 transition duration-200">
              Entrar
            </a>
            <a href="/cadastro" className="px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-700 transition duration-200">
              Cadastro
            </a>
          </div>
        </div>
      </nav>

      {menuState && (
        <div className="fixed inset-0 z-20 flex">
          <div className="w-64 bg-white shadow-lg h-full p-6 overflow-y-auto transition-all duration-300">
            <ul className="space-y-6">
              {navigation.map((item, idx) => (
                <li key={idx} className="relative">
                  {item.isDropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-700 hover:text-blue-800" onClick={() => toggleDropdown(idx)}>
                        {item.title}
                        <FontAwesomeIcon icon={dropdownState.idx === idx && dropdownState.isActive ? faChevronUp : faChevronDown} className="w-3 h-3" />
                      </button>
                      {dropdownState.idx === idx && dropdownState.isActive && (
                        <ul className="ml-4 mt-2 space-y-3">
                          {item.navs[0].navs.map((navItem, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              <a href={navItem.path} className="flex items-center gap-3">
                                {navItem.icon}
                                {navItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={item.path} className="block text-gray-700 hover:text-blue-800 transition duration-200">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#" className="block py-2 text-center text-indigo-600 border border-indigo-600 rounded-lg mb-4">
                Entrar
              </a>
              <a href="/cadastro" className="block py-2 text-center text-white bg-indigo-600 rounded-lg">
                Cadastro
              </a>
            </div>
          </div>
          <div className="flex-1 bg-black bg-opacity-50" onClick={() => setMenuState(false)} />
        </div>
      )}
    </>
  );
};

export default HeaderB;
