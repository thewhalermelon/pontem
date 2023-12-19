import styles from '@/app/code-verify/page.module.scss';

import Button from '@/app/components/common/Button';
import Image from 'next/image';

import Telegram from '@/public/images/telegram-outlined-white.svg';
import Twitter from '@/public/images/twitter-outlined-white.svg';
import Pontem from '@/public/images/logo.svg';

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
    title: 'Pontem',
    image: Pontem,
  },
];

const CodeVerify: React.FC<IProps> = () => {
  return (
    <>
      <div className='gradient-layout' />
      <main className={styles.main}>
        <h1>Pontem Early User Program</h1>
        <Button content='Support on Telegram' classes='outlined' />
        <form>
          <h3>Please enter the code</h3>
          <input />
          <Button content='SUBMIT' classes='filled' />
          <p>You can find the code on the following platforms:</p>
          <div>
            {SOCIAL.map((item) => {
              return (
                <article key={item.title}>
                  <Image src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                </article>
              );
            })}
          </div>
        </form>
      </main>
    </>
  );
};

export default CodeVerify;
