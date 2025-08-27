import styles from './Cards.module.css';
import React from 'react';

export function AboutCard({ title='', description='' }) {
    return (
        <div className={styles.aboutCard}>
            <div className={styles.headerAboutCard}>
                <h1>{title.toUpperCase()}</h1>
            </div>
            <div className={styles.aboutContainer}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function BenefitCard({ 
    title='',
    description='',
    IconComponent
}: { 
    title?: string;
    description?: string;
    IconComponent?: React.ComponentType<any>;
}) {
    return (
        <div className={styles.benefitCard}>
            <div className={styles.headerBenefitContainer}>
                <div className={styles.benefitIcon}> 
                    {IconComponent && <IconComponent />}
                </div>
                <h1>{title.toUpperCase()}</h1>
            </div>
            <div className={styles.benefitContainer}>
                <p>{description}</p>
            </div>
        </div>
    )
}