import React from 'react';
import styles from './styles.module.css';

const steps = [
  {period: '9月〜', label: 'エントリー'},
  {period: '10月〜', label: '1次予選'},
  {period: '12月', label: '2次予選'},
  {period: '翌年2月', label: '本選'},
  {period: '翌年3月', label: '春季合宿'},
  {period: '翌年夏', label: 'IOI'},
];

export default function JoiFlow(): React.ReactNode {
  return (
    <div className={styles.joiFlow} aria-label="JOIの大会フロー">
      <ol className={styles.joiFlowList}>
        {steps.map((step, index) => (
          <li className={styles.joiFlowItem} key={step.label}>
            <span className={styles.joiFlowPeriod}>{step.period}</span>
            <span className={styles.joiFlowLabel}>{step.label}</span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className={styles.joiFlowArrow}>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
