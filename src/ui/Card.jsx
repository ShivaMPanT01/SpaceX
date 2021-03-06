import React from 'react';
import styles from '../styles/Card.module.css';

function Card({ children, className }) {
   return <div className={`${styles.card} ${className}`}>{children}</div>;
}

export default Card;
