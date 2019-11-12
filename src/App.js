import React from 'react';
import MenuItem from './MenuItem'
import './App.css';

const  menu = [
  {
    title :'Home',
    link: '#',
    active :'true'
  },
  {
    title :'services',
    link: '#1',
    active :'true',
    subMenu: ['for entrepreneurs',
               'for students',
                'for hobbylists']
    
  },
  {
    title :'Contact',
    link: '#2',
    active :'true'
  }

]
function App(){
  return(
    <div className='list'>{
      menu.map( (el , index) => <MenuItem item={el} key={index}/>)
      }

    </div>
  );
}

export default App;
