import styles from '@/app/explore/page.module.scss';

import PontemLinear from '@/public/images/pontem-linear.svg';
import PontemLinearFilled from '@/public/images/pontem-linear-filled.svg';

import Button from '@/app/components/common/Button';
import Feature from '@/app/components/layout/Feature/Feature';

interface IProps {}

const Explore: React.FC<IProps> = () => {
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
        <Feature
          date='Oct 24 2023'
          title='LiquidSwap v.1.32.0'
          version='Beta test'
          feature={[
            'Added warning for Abel Finance',
            'Added pool to available pools THL-USDClz-uncorrelated-0.5',
            'Added display in USD for ALT, THL, ABEL',
            'Added sorting of pools by TVL',
            'Removed "Normal Gas"',
            'Updated text on LS banner"',
            'Fixed input bugs"',
          ]}
          image={PontemLinearFilled}
        />
      </main>
    </>
  );
};

export default Explore;
