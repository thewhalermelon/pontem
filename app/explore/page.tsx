import styles from '@/app/explore/page.module.scss';

import PontemLinear from '@/public/images/pontem-linear.svg';

import featureService, { Features } from '@/app/services/featureService';

import Button from '@/app/components/common/Button';
import Feature from '@/app/components/layout/Feature/Feature';

interface IProps {}

async function getFeature(): Promise<Features> {
  const res = await featureService.getFeatures();

  return res;
}

const Explore: React.FC<IProps> = async () => {
  const features = await getFeature();

  return (
    <>
      <div className='gradient-layout' />
      <main className={styles.main}>
        <h1>Pontem Early User Program</h1>
        <Button content='Support on Telegram' classes='outlined' />
        <h3>TRENDING TEST</h3>
        <Feature
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
        <h3>EXPLORE WHATS NEW</h3>
        {features.record.features.map((item) => {
          return (
            <Feature
              key={item.title}
              date={item.date}
              title={item.title}
              version={item.version}
              feature={item.feature}
              image={item.image}
            />
          );
        })}
      </main>
    </>
  );
};

export default Explore;
