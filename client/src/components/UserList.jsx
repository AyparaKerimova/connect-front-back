import React from 'react'

const UserList = ({children}) => {
  return (
    <div className="conatiner">
        <div className='row'>
            {children}
        </div>
    </div>
  )
}

export default UserList