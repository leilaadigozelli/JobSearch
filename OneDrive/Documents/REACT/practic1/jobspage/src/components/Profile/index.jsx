import style from "./profile.module.scss";
import { ShoppingOutlined, BarsOutlined } from "@ant-design/icons";

const profileItems = [
  {
    key: "vacancy",
    icon: ShoppingOutlined,
    name: "Secilmish-Elanlar",
    url: "/vacancies",
  },
  {
    key: "category",
    icon: BarsOutlined,
    name: "Abune-Kateqoriyalar",
    url: "/categories",
  },
];

export const Profile = () => {
  return (
    <div className={style.profile}>
      <span className={style.profile__title}>Sizin JobSearch</span>
      <ul className={style.profile__menu}>
        {profileItems.map(({ key, icon: Icon, name, url }) => {
          const active = window.location.href.includes(url);
          return (
            <li
              key={key}
              className={
                active
                  ? style.profile__menu__itemActive
                  : style.profile__menu__item
              }
            >
              <a href={url} className={style.profile__menu__link}>
                <Icon className={style.profile__menu__link__icon} />
                <span className={style.profile__menu__link__text}>{name}</span>
                <span className={style.profile__menu__link__count}>0</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
