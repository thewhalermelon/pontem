import styles from '@/app/components/layout/Footer/footer.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import Documentation from '@/public/images/document.svg';
import Code from '@/public/images/code.svg';
import Telegram from '@/public/images/telegram.svg';
import Twitter from '@/public/images/twitter.svg';
import Github from '@/public/images/github.svg';

interface IProps {}

const NAVIGATION = [
  {
    title: 'Documentation',
    image: Documentation,
  },
  {
    title: 'Developers Guide',
    image: Code,
  },
  {
    title: 'Github',
    image: Github,
  },
  {
    title: 'Telegram',
    image: Telegram,
  },
  {
    title: 'Twitter',
    image: Twitter,
  },
];

const Footer: React.FC<IProps> = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          {NAVIGATION.map((item) => {
            return (
              <li key={item.title}>
                <Link href={'/'}>
                  <Image src={item.image} alt={item.title} />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <summary>
        © 2023 Pontem Technology Ltd. All Rights Reserved. We are not affiliated, associated, authorized, endorsed by,
        or in any way officially connected with Facebook, the Diem Association or any of its subsidiaries or its
        affiliates. All product and company names are trademarks™ or registered® trademarks of their respective holders.
      </summary>
      <Link href={'/'} className={styles.policy}>
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
