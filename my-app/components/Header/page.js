import style from './style.module.css'
import Image from "next/image";
import logo from '@/public/logo.svg'
import search from '@/public/search.svg'
import user from '@/public/user1.svg'
import heart from '@/public/heart.svg'
import buy from '@/public/Frame 39.svg'
import menuburg from '@/public/Frame 62.svg'

function Header() {



    return (
        <div className={style.section}>
            <Image
                src={logo}
                alt=''
            />
            <div className={style.titles}>
                <p className={style.orange}>Trade In</p>
                <p>Велосипеды</p>
                <p>Запчасти</p>
                <p>Экипировка</p>
                <p>Аксессуары</p>
                <p>Велостанки</p>
            </div>
            <div className={style.items}>
                <Image
                    src={search}
                    alt=''
                />
                <Image
                    src={user}
                    alt=''
                />
                <Image
                    src={heart}
                    alt=''
                />
                <Image
                    src={buy}
                    alt=''
                />
            </div>
            <Image
                src={menuburg}
                alt=''
            />
        </div>
    );
}

export default Header;