import logo from "../../assets/logo.svg";
import style from "./style.module.css";
const languages =[
  {  key:'Az',
    name:'Az',
    fullName:'Azeribaijan',
  },
  {
    key:'En',
    name:'En',
    fullName:'Engilish',
  },

]

export const NavTop = ()=>{
    return(
        <div className="{style.top}">
            <img className={style.top__logo} src={logo} alt='job search logo' />
            <select className="{style.top__lang}" name="lang" >
                {languages.map(({key,name})=>(
                <option key="{key}" value={key}>{name}</option>
    ))}
            </select>

        </div>
    );
};
