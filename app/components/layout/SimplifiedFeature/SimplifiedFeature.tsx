import Image from 'next/image';

import styles from '@/app/components/layout/SimplifiedFeature/simplified-feature.module.scss';

interface IProps {
  date: string;
  title: string;
  version: string;
  feature: String[];
  image: string;
}

const SimplifiedFeature: React.FC<IProps> = ({ date, title, version, feature, image }) => {
  return (
    <article className={styles.article}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Image src={image} alt='pontem' />
          <div className={styles.title}>
            <p>{date}</p>
            <h3>
              {title}
              <span>{version}</span>
            </h3>
          </div>
        </div>
        <ul className={styles.features}>
          {feature.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default SimplifiedFeature;
