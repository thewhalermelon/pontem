import Image from 'next/image';

import styles from '@/app/components/layout/Feature/Feature.module.scss';

import Button from '@/app/components/common/Button';

interface IProps {
  date: string;
  title: string;
  version: string;
  feature: String[];
  image: string;
}

const Feature: React.FC<IProps> = ({ date, title, version, feature, image }) => {
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
      <div className={styles.buttons}>
        <Button content='DOWNLOAD' classes='filled' />
        <Button content='FEEDBACK' classes='outlined' />
      </div>
    </article>
  );
};

export default Feature;
