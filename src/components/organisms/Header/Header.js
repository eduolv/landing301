"use client";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(94px)',
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  padding: '8px 12px',
}));

// Configuração do dropdown e itens de menu
const dropdownNavs = [
  {
    title: 'Produtos',
    navs: [
      { title: 'Analytics', desc: 'Visualize métricas detalhadas.', path: '#', icon: <FontAwesomeIcon icon={faChartLine} className="text-blue-500" /> },
      { title: 'Reports', desc: 'Gere relatórios completos.', path: '#', icon: <FontAwesomeIcon icon={faChartBar} className="text-blue-500" /> },
    ],
  },
];

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'Preços', link: '/singupLoginPage' },
  { text: 'Produtos', isDropdown: true, navs: dropdownNavs },
  { text: 'Contato', link: '/highlights' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [dropdownState, setDropdownState] = React.useState({ isActive: false, idx: null });

  const toggleDrawer = (openState) => {
    setOpen(openState);
  };

  const toggleDropdown = (idx) => {
    setDropdownState((prevState) => ({
      idx,
      isActive: prevState.idx === idx ? !prevState.isActive : true,
    }));
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 3 }}>
      <Container maxWidth="md">
        <StyledToolbar variant="dense" disableGutters>
          {/* Logo à esquerda */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref legacyBehavior>
              <a href="#">
                <img src="/images/logo.png" width={90} height={50} alt="Logo" />
              </a>
            </Link>
          </Box>

          {/* Links centralizados */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            {menuItems.map((item, idx) => (
              <Box key={idx} className="relative">
                {item.isDropdown ? (
                  <>
                    <Button
                      onClick={() => toggleDropdown(idx)}
                      endIcon={
                        dropdownState.idx === idx && dropdownState.isActive ? (
                          <FontAwesomeIcon icon={faChevronUp} className="text-gray-500 w-3 h-3" />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 w-3 h-3" />
                        )
                      }
                      className="text-[#232323] hover:underline transition-all duration-300 normal-case text-sm"
                    >
                      {item.text}
                    </Button>

                    {/* Dropdown */}
                    {dropdownState.idx === idx && dropdownState.isActive && (
                      <Box className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-10">
                        <Box className="p-4">
                          {item.navs[0].navs.map((navItem, i) => (
                            <Link href={navItem.path} key={i} passHref>
                              <MenuItem onClick={() => setDropdownState({ isActive: false, idx: null })}>
                                <Box className="flex items-center gap-3">
                                  {navItem.icon}
                                  <Box>
                                    <span className="font-medium">{navItem.title}</span>
                                    <p className="text-sm text-gray-600">{navItem.desc}</p>
                                  </Box>
                                </Box>
                              </MenuItem>
                            </Link>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </>
                ) : (
                  <Link href={item.link} passHref legacyBehavior>
                    <Button variant="text" size="small" className="text-[#232323] hover:underline transition-all duration-300 normal-case text-sm">
                      {item.text}
                    </Button>
                  </Link>
                )}
              </Box>
            ))}
          </Box>

          {/* Botões de ação no desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Link href="/signin" passHref legacyBehavior>
              <Button variant="text" size="small" className="text-[#232323] hover:underline transition-all duration-300">
                Entrar
              </Button>
            </Link>
            <Link href="/signup" passHref legacyBehavior>
              <Button color="primary" variant="contained" size="small" className="bg-gradient-to-tr from-[#2B6CAE] to-[#172E7A]">
                Cadastrar
              </Button>
            </Link>
          </Box>

          {/* Menu Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={() => toggleDrawer(true)}>
              <FaBars />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={() => toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <IconButton aria-label="Close menu" onClick={() => toggleDrawer(false)}>
                    <FaTimes />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />

                {/* Itens do menu no mobile */}
                {menuItems.map((item, idx) => (
                  <Box key={idx}>
                    {item.isDropdown ? (
                      <>
                        <Button
                          onClick={() => toggleDropdown(idx)}
                          endIcon={
                            dropdownState.idx === idx && dropdownState.isActive ? (
                              <FontAwesomeIcon icon={faChevronUp} className="text-gray-500 w-3 h-3" />
                            ) : (
                              <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 w-3 h-3" />
                            )
                          }
                          className="text-[#232323] normal-case text-sm w-full justify-start"
                        >
                          {item.text}
                        </Button>
                        {dropdownState.idx === idx && dropdownState.isActive && (
                          <Box className="ml-4">
                            {item.navs[0].navs.map((navItem, i) => (
                              <MenuItem key={i} onClick={() => toggleDrawer(false)}>
                                <Box className="flex items-center gap-3">
                                  {navItem.icon}
                                  {navItem.title}
                                </Box>
                              </MenuItem>
                            ))}
                          </Box>
                        )}
                      </>
                    ) : (
                      <Link href={item.link} passHref legacyBehavior>
                        <MenuItem onClick={() => toggleDrawer(false)}>{item.text}</MenuItem>
                      </Link>
                    )}
                  </Box>
                ))}

                {/* Botões de ação no mobile */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                  <Link href="/signin" passHref legacyBehavior>
                    <Button variant="outlined" fullWidth>
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/singupLoginPage" passHref legacyBehavior>
                    <Button color="primary" variant="contained" fullWidth className="bg-gradient-to-tr from-[#2B6CAE] to-[#172E7A]">
                      Cadastrar
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
