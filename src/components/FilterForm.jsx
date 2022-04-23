import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/FilterForm.module.css';
import Card from '../ui/Card';

const years = [
   2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
   2019, 2020,
];

function FilterForm() {
   return (
      <Card className={styles['filter-card']}>
         <div className={styles['filter-form__container']}>
            <h3 className={styles['filter-form__heading']}>Filter</h3>
            <div className={styles['filter-common__container']}>
               <p className={styles['filter-form__para']}>Launch Year</p>
               <div className={styles['filter-form__navLinks']}>
                  {years.map((year) => {
                     return (
                        <div
                           key={year}
                           className={styles['filter-form__navLink']}
                        >
                           <NavLink to={`/${year}`}>{year}</NavLink>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className={styles['filter-common__container']}>
               <p className={styles['filter-form__para']}>Successful Launch</p>
               <div className={styles['filter-launch']}>
                  <div className={styles['filter-form__navLink']}>
                     <NavLink to="/">True</NavLink>
                  </div>
                  <div className={styles['filter-form__navLink']}>
                     <NavLink to="/">False</NavLink>
                  </div>
               </div>
            </div>
            <div className={styles['filter-common__container']}>
               <p className={styles['filter-form__para']}>Successful Landing</p>
               <div className={styles['filter-landing']}>
                  <div className={styles['filter-form__navLink']}>
                     <NavLink to="/">True</NavLink>
                  </div>
                  <div className={styles['filter-form__navLink']}>
                     <NavLink to="/">False</NavLink>
                  </div>
               </div>
            </div>
         </div>
      </Card>
   );
}

export default FilterForm;
