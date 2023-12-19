import styles from '@/app/components/sections/ShapeTheFuture/shape-the-future.module.scss';
import Button from '@/app/components/common/Button';

interface IProps {}

const ShapeTheFuture: React.FC<IProps> = () => {
  return (
    <section className={styles.section}>
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
      <div
        className={styles.banner}
        style={{
          background: `url(/images/banner.svg), lightgray 50% / cover no-repeat`,
          mixBlendMode: 'screen',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  );
};

export default ShapeTheFuture;
