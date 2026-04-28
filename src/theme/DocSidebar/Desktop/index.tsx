import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import Content from '@theme/DocSidebar/Desktop/Content';
import type {Props} from '@theme/DocSidebar/Desktop';

import styles from './styles.module.css';

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}: Props) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <div className={styles.sidebarHeader}>
        <span className={styles.sidebarTitle}>学習メニュー</span>
        {hideable && (
          <button
            type="button"
            title={translate({
              id: 'theme.docs.sidebar.collapseButtonTitle',
              message: 'Collapse sidebar',
              description: 'The title attribute for collapse button of doc sidebar',
            })}
            aria-label={translate({
              id: 'theme.docs.sidebar.collapseButtonAriaLabel',
              message: 'Collapse sidebar',
              description: 'The title attribute for collapse button of doc sidebar',
            })}
            className={styles.sidebarToggle}
            onClick={onCollapse}>
            <span className={styles.sidebarToggleIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        )}
      </div>
      <Content path={path} sidebar={sidebar} />
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
