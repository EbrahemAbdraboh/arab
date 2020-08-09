import React from 'react';
import {UserCoursesSection} from './UserCoursesSection/UserCoursesSection';
import {UserSavedSection} from './UserSavedSection/UserSavedSection';
import {TrainerCoursesSection} from './TrainerCoursesSection/TrainerCoursesSection';

export const ProfileContent = props =>{
  return(
    <div>
      <UserCoursesSection  />
      <UserSavedSection  />
      <TrainerCoursesSection  />
    </div>
  )
}
