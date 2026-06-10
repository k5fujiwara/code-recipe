import type {ReactNode} from 'react';
import styles from './styles.module.css';

type ProductHeroLink = {
  href: string;
  label: string;
  isPrimary?: boolean;
};

type ProductHeroProps = {
  children: ReactNode;
  links?: ProductHeroLink[];
};

export default function ProductHero({
  children,
  links = [],
}: ProductHeroProps): ReactNode {
  return (
    <div className={styles.productHero}>
      <div className={styles.content}>
        {children}
        {links.length > 0 && (
          <div className={styles.links}>
            {links.map((link) => (
              <a
                className={`${styles.link} ${link.isPrimary ? styles.primaryLink : ''}`}
                href={link.href}
                key={link.href}
                rel="noopener noreferrer"
                target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
