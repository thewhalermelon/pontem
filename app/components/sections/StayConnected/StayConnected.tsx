import Image from 'next/image';

import styles from '@/app/components/sections/StayConnected/stay-connected.module.scss';

import Telegram from '@/public/images/telegram-outlined.svg';
import Twitter from '@/public/images/twitter-outlined.svg';
import Discord from '@/public/images/discord-outlined.svg';

interface IProps {}

const SOCIAL = [
  {
    title: 'Telegram',
    image: Telegram,
  },
  {
    title: 'Twitter',
    image: Twitter,
  },
  {
    title: 'Discord',
    image: Discord,
  },
];

const StayConnected: React.FC<IProps> = () => {
  return (
    <section className={styles.section}>
      <h2>Stay Connected</h2>
      <div>
        {SOCIAL.map((item) => {
          return (
            <article key={item.title}>
              <Image src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default StayConnected;
