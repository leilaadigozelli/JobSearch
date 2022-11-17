import './style.css';
const footerList =[
    { key: 'Haqqimizda',
     title: 'Haqqimizda',
     url: '/Haqqimizda',
},  
 { 
    key: 'Xidmetler',
   title: 'Xidmetler',
   url: '/xidmetler',
},   

{ 
key: 'Elaqe',
title: 'Elaqe',
url: '/Elaqe',
},


    ]

export const NavFooter =() =>{
    return (
        <ul className='footer'>
            {footerList.map(({key,title,url})=>(
            <li className='footer-items' key={key}>
                <a href={url} className='footer-link'>{title}</a>
            </li>
                ))}
        </ul>
     
    );
    

};
