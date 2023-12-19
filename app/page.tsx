import styles from '@/app/page.module.scss';

import ShapeTheFuture from '@/app/components/sections/ShapeTheFuture/ShapeTheFuture';
import ExploreProducts from '@/app/components/sections/ExploreProducts/ExploreProducts';
import StayConnected from '@/app/components/sections/StayConnected/StayConnected';

export default function Home() {
  return (
    <>
      <div className='gradient-layout' />
      <main className={styles.main}>
        <ShapeTheFuture />
        <ExploreProducts />
        <StayConnected />
      </main>
    </>
  );
}
