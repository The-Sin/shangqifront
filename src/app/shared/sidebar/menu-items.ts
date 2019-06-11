import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: '主要功能',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard/dashboard1',
    title: '车辆设置和链接',
    icon: 'icon-Car-Wheel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/dashboard/dashboard2',
    title: '车辆轨迹',
    icon: 'icon-Ticket',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/dashboard/dashboard3',
    title: '车辆触发事件和运行模块',
    icon: 'icon-Folder-Add',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: '账号权限',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/apps/email',
    title: '新增账户',
    icon: 'icon-Mailbox-Empty',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/user/list',
    title: '管理账户权限',
    icon: 'icon-Ticket',
    class: '',
    extralink: false,
    submenu: [         ]
  },
  {
    path: '',
    title: '其他功能',
    icon: 'icon-Sunglasses-Smiley',
    class: '',
    extralink: false,
    submenu: [
     
    ]
  },
  {
    path: '',
    title: '帮助文档',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: '车辆设置和链接帮助文件',
    icon: 'icon-Paint-Brush',
    class: '',
    extralink: false,
    submenu: [
     
    ]
  },
  {
    path: '',
    title: '车辆轨迹帮助文件',
    icon: 'icon-Folder-Add',
    class: '',
    extralink: false,
    submenu: [
   
    ]
  },
  {
    path: '',
    title: '触发事件帮助文件',
    icon: 'icon-Idea-5',
    class: '',
    extralink: false,
    submenu: [
      
    ]
  },
  {
    path: '',
    title: '权限设置帮助文件',
    icon: 'icon-Wrench',
    class: '',
    extralink: false,
    submenu: []
  }
  
];
