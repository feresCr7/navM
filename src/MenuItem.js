import React from 'react'

const MenuItem = (props) => {
    return(
        <li className='item'>
            <a href = {props.item.link}>{props.item.title}</a>
            {
                props.item.title === 'services' && <ul className='sub'>
                {
props.item.subMenu.map((el ,index) => <li className='dropdown'>{el}</li>)
                } 
                </ul>
            }
        </li>
    )
}
export default MenuItem