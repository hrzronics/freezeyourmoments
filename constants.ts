import { NavItem, GalleryItem, ReelItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Portfolios', href: '/portfolios' },
  { label: 'Cinematic', href: '/#reels' },
  { label: 'Get Your Quote', href: '/#quote' },
  { label: 'Hearings', href: '/#testimonials' },
  { label: 'Begin Your Story', href: '/#contact' },
];

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGXoShqV3jJoTc_EWLtB8skudSNZAKEqoqXL5WSKEnKywU4sYvd2zyhPftjAlm_c6mzY2NV36cZUYZR-hs4Wg2iodAPF0ppUI490c8Z_c3sO6zRTeY150oJ6xj0LxNC3deBJ-CbQDn0oIdBy7PlAxIoFy5DNMlmH_UpE3dGE3uauZ8Bxpxt-xtiHIkaToJAXbYrb1jneATRp1Smnu7T3oZcSF6gjMr-vwihOnfYAYcJ8XVJ28HaofvW7zxP02ikbDfUn6K_VpG7P2O',
  celebration: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCjzHk71Ammla857JPOYVqpPRZdUejcP_2sLj0_Ypy8-Z6qUXXtrm9cllROLXXuXON_V9sUiqsot1Lcv1PmD-ukyzWnfvTmkprT34ccIsqmqJNLePsLfRpDVh0C9jgEoz6qHLyAY9ie1AaKIfJWiUnbUziisHaxcRojnGmvcgxIoFYF26XxAyPts5LYfYlF1cK48aOcgNxlu6ODP2qCyt6rFfjSII5c5_gxopkfHRptgRIpA6ffwJMrvt-mGqhEZg94HAVxHEq-g66',
  quietMoments: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtBoImueY_7sdjZ81ut9PmqrBNyBrnQRXSOGOM_WwYObcOAQlVVvrV8UyoBk3m_fpRW5EK4QFZFD3vqwVf4AutcLTgKrayIC90SkONe04VVMmE8vteLN-ubqQ8FyIonF0EGLy5clJIhAIeS2DCvQYbkaZGYf8SYnSO-n_bu__FpSiH8qOwk5XDP1SKIw07fnstJpUvN5s_MLEbHCSAtv27arH5DVxX1wXEEbBq8AcQ8EakjoY9AzRc2YtI0S04yAU0fvSYZiErTYyB',
  henna: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJuuLFsbqBhd3wEvCCzRfdYHzDAYJqAqUd0KbKQCqHWuHWkQunWLP5t6nLEs8GImjWxoH1WiAMWPBbofsgEYYYnXsv1j2cDD05iA6VNxz8pfmJArxWCLAnE8azXtFA8qWxwlZtgrXzoGcdU2oY0IHy9sKhIjudWPex2HlvhlfInIHNQ3S2pAkWVw9UUMLqxWYqv2OUFPZDw8SddjRtJhPI7LZVHe8Pmpb5rcYCky_BX-oq-CfMDzs968jq_1Lwl3hnEiqu2E3PNRSl',
  maternity: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnCG9byaMe5N1me2ZKb_LUPMwGd2exO7jb5OhH4gX0ldV_5HCU34wyAZBQc1AhDIwNnfSwJCo9oZT1yQxbFGf-uR_gtwFe8sytANjigcqsVtgkPoxooHV32PR3L2cUQsO5NTk43nF3lSKUtULLdIZoOJXxQaFCLVUVY-D2ua1to35fZchb70-_Bo7CoLz_LkXvs3aiqG7rIIrkHvUUxYWRlYO59Nukhm4PBAUxqe-aLhoWqHawCqMZvKpTnygANl4cmfU_Uf2m52C3',
};

export const REEL_ITEMS: ReelItem[] = [
  {
    id: '1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFJ5aPvdIxlPdG94iVtJjKGTjT4hGljBqe2H3Axa0NteRzrKyqeYFNUc9YD710vlYloxgk4eID9mgAW25TjpvG0yrEJ1-t6_juDy1UtlcAXRQ7xMxbmYZ8Esto6Qke8qSvriHkyJ_sprrBLUHzlZ_EAbClw-HiakYD9E6amlHzUeZvY-hiGT95niR41VNK8lWCblXr2PUi6WG9Kqp0Q_tbvwiLNy6_LQg0JuyTkKH3T8KsaR-gyXZCcHJhAxN8asf7JkHyLGupRYMn',
    imageAlt: 'Bride spinning'
  },
  {
    id: '2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXyAY4S5-s8bchw9liLpsy9ajX83n2rNxU7XuNEskwumZ9fwDQ4k_KsQPkceY4o-sh3ALCrL8b5-dHrhuoVPxYK6zOWcgCh9GVMBCwuQsYKbooHkxVeksjtg0rHGnJFy0c1cWRPVnVWwl1040LL5uu8PPKvdljD6aczk8m4OfzKqXGKCNSMiYiymNzrx-va4QJuEITvdJprOUmc6Ll5gxBV1k_jrhaEQVO0v0CQJVOKNSeD4KZQOVZ-5X5PMytf1l-f_-iVa0kfPFW',
    imageAlt: 'Groom in hallway'
  },
  {
    id: '3',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_BX8qeAuUNX0wF4ixf3EeOx0CCCxbQsQEwukEyHJzbD9zZGsDfdcXe9MjIz3gxye7oeV_i5v39NQIcj8UxvgKLTmFxtw9u1-lcDF013Qjf__bGFYwum0XzK0afH4Q2lVitcQBs2e7MPHuqlPnIiv5xgKDDZalWFchQkZnhtlOQCOsFFAIREhgqDj6kv8Kcx2eKvxHbzsW4WoXPWvQzuCNfMVlYvi8WCFnwB8mBfgRVYYcoH53oC5jHkmHvu3Bp474RoiT9d5yeAaa',
    imageAlt: 'Jewelry details'
  },
  {
    id: '4',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsvYYVNY2Sfld9raTW5WnjAciRQTAHcarUilhZiUwJUykUWy8q7I8B6p2cZjPtFLPzx5WrcbLgS6VhV52wHd1gkb6VxemveHgX5li1cthuyLO4-Frh7Fvt7jqM3KeTlShFSnnsZqEXdRRHoXY0YiL2faK1QwIofbxW_Wxglf95msadLzr59GV8t0t-tIQvz9kKwWbiNHwcJhhc2UwUSbOT9r8yK-v-uaEAUc38EdK12iTOEskAf4vgiOxlZsuYlnwTMkqeatRW10hL',
    imageAlt: 'Baby hands'
  }
];
