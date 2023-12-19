import styles from '@/app/components/sections/ExploreProducts/explore-products.module.scss';

import PontemWallet from '@/public/images/pontem-wallet.svg';
import MovePlayground from '@/public/images/move-playground.svg';
import MoveIntelijIdePlugin from '@/public/images/move-intelij-ide-plugin.svg';
import LiquidSwapOnAptos from '@/public/images/liquidswap-on-aptos.svg';
import MoveVMTranspiler from '@/public/images/move-vm-transpiler.svg';
import PontemGPT from '@/public/images/pontem-gpt.png';

import Card from '@/app/components/layout/Card/Card';
import Button from '@/app/components/common/Button';

interface IProps {}

const PONTEM_PRODUCTS = [
  {
    title: 'Pontem Wallet',
    desc: 'Pontem Wallet is much more than a safe gateway to the Aptos ecosystem. It’s the first Aptos wallet that supports Ledger and built-in native dApps.',
    logo: PontemWallet,
  },
  {
    title: 'Move Playground',
    desc: 'The Move Code Playground is an online code editor for Move, the blockchain programming language designed for Diem by Meta.',
    logo: MovePlayground,
  },
  {
    title: 'Move Intellij IDE Plugin',
    desc: 'Experiment with Move and build dApps for Move-compatible blockchains like Aptos – all in the IDE you’re used to.',
    logo: MoveIntelijIdePlugin,
  },
  {
    title: 'Liquidswap on Aptos',
    desc: 'Liquidswap is the first AMM for Aptos - the most performant & reliable L1 built with Move VM',
    logo: LiquidSwapOnAptos,
  },
  {
    title: 'Move VM transpiler ',
    desc: 'Try Ethereum Virtual Machine at 100,000 tps. On Aptos, the safest & most scalable blockchain',
    logo: MoveVMTranspiler,
  },
  {
    title: 'PontemGPT',
    desc: 'PontemGPT is an AI chatbot built specifically for crypto',
    logo: PontemGPT,
  },
];

const ExploreProducts: React.FC<IProps> = () => {
  return (
    <section className={styles.section}>
      <h2>Explore Pontem&apos;s Products</h2>
      <summary>
        Discover our range of products by clicking on each one. You will be directed to the official product page.
      </summary>
      <div>
        {PONTEM_PRODUCTS.map((item) => {
          return <Card data={item} key={item.title} />;
        })}
      </div>
      <Button content="WHAT'S NEW?" classes='filled' />
    </section>
  );
};

export default ExploreProducts;
