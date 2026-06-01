import {type ReactNode, useEffect, useState} from 'react';
import styles from './styles.module.css';

type TemplateHeroLink = {
  href: string;
  label: string;
  isPrimary?: boolean;
};

type TemplateHeroProps = {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  links?: TemplateHeroLink[];
};

export default function TemplateHero({
  children,
  imageSrc,
  imageAlt,
  imageCaption,
  links = [],
}: TemplateHeroProps): ReactNode {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <div className={styles.hero}>
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
        <figure className={styles.media}>
          <button
            aria-label={`${imageAlt}を拡大表示する`}
            className={styles.imageButton}
            onClick={() => setIsModalOpen(true)}
            type="button">
            <img className={styles.image} src={imageSrc} alt={imageAlt} />
          </button>
          {imageCaption && <figcaption className={styles.caption}>{imageCaption}</figcaption>}
        </figure>
      </div>

      {isModalOpen && (
        <div
          aria-modal="true"
          className={styles.modal}
          onClick={() => setIsModalOpen(false)}
          role="dialog">
          <button
            aria-label="拡大表示を閉じる"
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
            type="button">
            ×
          </button>
          <img className={styles.modalImage} src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </>
  );
}
