import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

export const navUserConfig = [
  {
    title: 'Change Password',
    path: '/reset-password',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Logout',
    path: '/login',
    icon: icon('ic_user'),
  }
]


export const navConfigPSP = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'activities',
    path: '/activities',
    icon: icon('ic_user'),
  },
  {
    title: 'bill',
    path: '/bills',
    icon: icon('ic_cart'),
  },
  {
    title: 'token',
    path: '/token',
    icon: icon('ic_cart'),
  },
  {
    title: 'sandbox',
    path: '/sandbox',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

const navConfigSP = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'activities',
    path: '/activities',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'bill',
    path: '/bills',
    icon: icon('ic_cart'),
  },
  
  {
    title: 'payment method',
    path: '/payment-method',
    icon: icon('ic_cart'),
  },
 
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];
export default navConfigSP;


