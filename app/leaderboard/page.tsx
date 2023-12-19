import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/leaderboard/page.module.scss';

import PontemLinear from '@/public/images/pontem-linear.svg';
import PontemLinearFilled from '@/public/images/pontem-linear-filled.svg';
import SimplifiedFeatureImg from '@/public/images/simplified-feature.svg';
import Telegram from '@/public/images/telegram-outlined-small.svg';
import Facebook from '@/public/images/facebook-filled-small.svg';
import Twitter from '@/public/images/twitter-outlined-small.svg';
import Whatsapp from '@/public/images/whatsapp-outline-small.svg';
import Messenger from '@/public/images/messenger-filled-small.svg';
import Copy from '@/public/images/copy.svg';
import Search from '@/public/images/search.svg';

import Button from '@/app/components/common/Button';
import StayConnected from '@/app/components/sections/StayConnected/StayConnected';
import ExploreProducts from '@/app/components/sections/ExploreProducts/ExploreProducts';
import SimplifiedFeature from '@/app/components/layout/SimplifiedFeature/SimplifiedFeature';

const SOCIAL = [
  {
    title: 'Telegram',
    image: Telegram,
  },
  {
    title: 'Facebook',
    image: Facebook,
  },
  {
    title: 'Twitter',
    image: Twitter,
  },
  {
    title: 'Whatsapp',
    image: Whatsapp,
  },
  {
    title: 'Messenger',
    image: Messenger,
  },
];

const RECORDS = [
  {
    email: 'test@pontem.ai',
    NoR: 130,
  },
  {
    email: 'test@pontem.ai',
    NoR: 113,
  },
  {
    email: 'test@pontem.ai',
    NoR: 96,
  },
  {
    email: 'test@pontem.ai',
    NoR: 84,
  },
  {
    email: 'test@pontem.ai',
    NoR: 34,
  },
  {
    email: 'test@pontem.ai',
    NoR: 12,
  },
  {
    email: 'test@pontem.ai',
    NoR: 12,
  },
  {
    email: 'test@pontem.ai',
    NoR: 12,
  },
  {
    email: 'test@pontem.ai',
    NoR: 12,
  },
  {
    email: 'test@pontem.ai',
    NoR: 12,
  },
];

interface IProps {}

const Leaderboard: React.FC<IProps> = () => {
  return (
    <section className={styles.main}>
      <div className={styles.first}>
        <div className={`${styles['gradient-layout-top']}`} />
        <div className={`${styles['gradient-layout-right']}`} />
        <div className={styles.content}>
          <h3>SHAPE THE FUTURE</h3>
          <h1>Early User Program</h1>
          <summary>
            For those who have joined our early user program, you have the exclusive opportunity to access the beta
            version. You'll be the first to experience all the new features and products from Pontem.
          </summary>
          <summary>
            By providing your valuable feedback, you have the power to shape our products according to your vision. You
            can be the co-creator, helping us build what you want through testing and feedback.
          </summary>
          <Button content='START TESTING' classes='filled' />
        </div>
        <div className={styles.features}>
          <h3>TRENDING TEST</h3>
          {/* <Image src={SimplifiedFeatureImg} alt='feature' /> */}
          <SimplifiedFeature
            date='Oct 21 2023'
            title='Pontem Wallet v2.5.1'
            version='Beta test'
            feature={[
              'Fixed migration',
              'Reduced the number of requests',
              'Added the ability to restore the account after failed migration to version 2.5.0.',
            ]}
            image={PontemLinear}
          />
          <SimplifiedFeature
            date='Oct 21 2023'
            title='Pontem Wallet v2.5.1'
            version='Beta test'
            feature={[
              'Added warning for Abel Finance',
              'Added pool to available pools THL-USDClz-uncorrelated-0.5',
              'Added display in USD for ALT, THL, ABEL',
            ]}
            image={PontemLinearFilled}
          />
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h3>Get early access</h3>
            <h3>by joining wait list</h3>
            <summary>Once you're in, you can climb the queue by inviting</summary>
            <summary>your friends. The closer you are to the top, the</summary>
            <summary>more likely and sooner you'll get access.</summary>
            <input placeholder='Email' />
            <Button content='JOIN' classes='filled' />
          </div>
          <div className={styles.bottom}>
            <h3>Share your unique referral link</h3>
            <div>
              <input value={'https://youruniquelink.com/campaign'} />
              <Image src={Copy} alt='copy' />
            </div>
            <ul>
              {SOCIAL.map((item) => {
                return (
                  <li key={item.title}>
                    <Link href={'/'}>
                      <Image src={item.image} alt={item.title} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <h3>Leaderboard</h3>
            <div>
              <Image src={Search} alt='search' />
              <input placeholder='Search' />
            </div>
          </div>
          <div className={styles.title}>
            <p>User Name</p>
            <p>Number Of Referrals</p>
          </div>
          {RECORDS.map((item, index) => {
            return (
              <div className={styles.record} key={index}>
                <p>{item.email}</p>
                <span>{item.NoR}</span>
              </div>
            );
          })}
        </div>
      </div>
      <ExploreProducts />
      <StayConnected />
    </section>
  );
};

export default Leaderboard;
