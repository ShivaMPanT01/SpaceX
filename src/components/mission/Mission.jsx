import React from 'react';
import styles from '../../styles/Mission.module.css';
import Card from '../../ui/Card';

function Mission({
   image,
   missionName,
   flightNumber,
   missionId,
   launchYear,
   succLandidng,
   succLaunch,
}) {
   return (
      <Card className={styles['mission-card']}>
         <div className={styles['mission-container']}>
            <div className={styles.image}>
               <img src={image} alt="Rocket Image" />
            </div>
            <div className={styles['mission-content']}>
               <h2 className={styles['mission-name']}>
                  {missionName}
                  <span> #{flightNumber}</span>
               </h2>
               <div className={styles['mission-id']}>
                  <h3>Mission Ids:</h3>
                  <ul className={styles['mission-id__list']}>
                     <li className={styles['mission-id__item']}>{missionId}</li>
                  </ul>
               </div>
               <div className={styles['mission-launch']}>
                  <h3>Launch Year:</h3>
                  <span>{launchYear}</span>
               </div>
               <div className={styles['mission-succ__launch']}>
                  <h3>Successful Launch:</h3>
                  <span>False</span>
               </div>
               <div className={styles['mission-succ__landing']}>
                  <h3>Successful Landing:</h3>
                  <span>True{succLandidng}</span>
               </div>
            </div>
         </div>
      </Card>
   );
}

export default Mission;
