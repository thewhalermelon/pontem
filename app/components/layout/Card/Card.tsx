import Image from 'next/image';

import styles from '@/app/components/layout/Card/card.module.scss';
import Link from 'next/link';

interface IProps {
  data: {
    title: string;
    desc: string;
    logo: string;
  };
}

const Card: React.FC<IProps> = ({ data }) => {
  return (
    <article className={styles.article}>
      <header>
        <Image src={data.logo} alt={data.title} />
      </header>
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
      <Link href={'/'}>Explore</Link>
    </article>
  );
};

export default Card;
