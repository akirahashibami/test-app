import React from 'react';
import ViewProduct from './ViewProduct';

const UserContainer = props => {
  
  return(
    <div>
      { props.userData.map((data) => {
        return(
          <ViewProduct data={ data } key={ data.id } />
        )
      })}
    </div>
  )
}

export default UserContainer;
