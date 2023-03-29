import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://stake.bullchainai.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.bullchainai.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.bullchainai.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://stake.bullchainai.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://stake.bullchainai.com/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Hacken Audit',
        href: 'https://https://bullchainai.com/',
      },
      {
        label: 'Docs',
        href: 'https://bullchain.gitbook.io/bullchain/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@bullchain',
      },
    ],
  },
  {
    label: 'Website',
    icon: 'AuditIcon',
    href: 'https://bullchainai.com/',
  },
]

export default config
