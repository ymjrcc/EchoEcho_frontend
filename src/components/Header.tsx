'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import clsx from 'clsx';
import { Nfc, House, BadgeDollarSign, SquareUserRound } from 'lucide-react';

function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: House },
    { href: '/market', label: 'Market', icon: BadgeDollarSign },
    { href: '/mine', label: 'Mine', icon: SquareUserRound },
  ]
  return (
    <div className='bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 h-16 px-4 flex justify-between items-center shadow-md'>
      <div className='flex items-center'>
        <div className="flex items-center h-10 mr-8 border-2 border-gray-600 rounded-lg px-2 bg-gradient-to-r from-gray-900 to-gray-700">
          <span className="text-2xl font-bold text-gray-200">Echo</span>
          <span className="text-2xl font-bold text-gray-400">Echo</span>
          <Nfc className='text-gray-400' size={24} />
        </div>
        <ul className='flex'>
          {
            navItems.map(({ href, label, icon }) => {
              const Icon = icon
              return <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'flex items-center h-16 px-4 text-xl text-gray-200',
                    pathname === href && 'font-bold border-b-4 border-gray-200'
                  )}
                >
                  <Icon className='pr-2' size={28} />
                  {label}
                </Link>
              </li>
            })
          }
        </ul>
      </div>
      <ConnectButton />
    </div>
  );
}

export default Header;