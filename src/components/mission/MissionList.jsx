import React from 'react';
import Mission from './Mission';

import styles from '../../styles/MissionList.module.css';

const missionList = [
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 1,
      missionId: '#234234',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 2,
      missionId: '#234h234',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 3,
      missionId: '#234c234',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 4,
      missionId: '#234se234',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 5,
      missionId: '#234a234',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 6,
      missionId: '#234ds234',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 7,
      missionId: '#23d4234',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
   {
      image: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
      missionName: 'hello',
      flightNumber: 8,
      missionId: '#23424',
      launchYear: 2022,
      succLaunch: true,
      succLanding: false,
   },
];

function MissionList() {
   return (
      <div className={styles['mission-list']}>
         <div className={styles['mission-list__container']}>
            {missionList.map((mission) => {
               return (
                  <Mission
                     key={mission.missionId}
                     image={mission.image}
                     missionName={mission.missionName}
                     flightNumber={mission.flightNumber}
                     missionId={mission.missionId}
                     launchYear={mission.launchYear}
                     succLanding={mission.succLanding}
                     succLaunch={mission.succLaunch}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default MissionList;
