import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as IoIcons from 'react-icons/io';

export const SidebarData = [

  {
    title: 'My Resume ',
    path: '/MyResume',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'LogOut',
    path: '/',
    icon: <FaIcons.FaSignOutAlt />,
    cName: 'nav-text'
  },

  
];