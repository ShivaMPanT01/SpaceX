import React from 'react';
import FilterForm from '../components/FilterForm';
import MissionList from '../components/mission/MissionList';
import styles from '../styles/LandingPage.module.css';

function LandingPage() {
   return (
      <div className={styles['landing-page']}>
         <h2>SpaceX Launch Program</h2>
         <div className={styles['landing-page__content']}>
            <FilterForm />
            <MissionList />
         </div>

         <div className={styles.developer}>
            <h2>Developed by: Shivam Pant</h2>
         </div>
      </div>
   );
}

export default LandingPage;
