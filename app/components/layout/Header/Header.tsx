import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/images/logo.svg';
import Github from '@/public/images/github.svg';
import Twitter from '@/public/images/twitter.svg';
import Telegram from '@/public/images/telegram.svg';
import HeaderStroke from '@/public/images/header-stroke.svg';

import styles from './header.module.scss';

interface IProps {}

const NAVIGATION = [
  'Home',
  'Pre-register',
  'Resource Center',
  'Documentation',
  'Get Started',
  'Ambassador Program',
  'Communities',
];

const Header: React.FC<IProps> = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Image src={Logo} alt='Pontem' />
      </Link>
      <nav>
        <ul>
          {NAVIGATION.map((item, index) => {
            return (
              <li key={index}>
                <Link href={'/'}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.social}>
        <Link href={'https://github.com'} target='_blank'>
          <Image src={Github} alt='Github' />
        </Link>
        <Link href={'https://twitter.com'} target='_blank'>
          <Image src={Twitter} alt='Twitter' />
        </Link>
        <Link href={'https://web.telegram.org/'} target='_blank'>
          <Image src={Telegram} alt='Twitter' />
        </Link>
      </div>
      <Image src={HeaderStroke} alt='header stroke' className={styles.stroke} />
    </header>
  );
};

export default Header;
