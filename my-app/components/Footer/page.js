import style from './style.module.css';
import Image from 'next/image';
import footerB from '@/public/footer.png';
import logoF from '@/public/logoF.svg';
import smrtphone from "@/public/smrtphone.svg";
import post from "@/public/post.svg";
import nav from "@/public/nav.svg";

function Footer() {


    return (
        <>
            <div className={style.backF}>
                <div className={style.sizeF}>
                    <div className={style.left}>
                        <h1>Подпишитесь на наши новости</h1>
                        <div className={style.textinput}>
                            <input type="text" placeholder='E-mail' />
                            <button>Подписаться</button>
                        </div>
                        <div className={style.textCheck}>
                            <input type="checkbox" />
                            <p>Согласен(на) на обработку персональных данных</p>
                        </div>
                    </div>

                    <div className={style.right}>
                        <Image
                            src={footerB}
                            alt=''
                        />
                    </div>
                </div>

            </div>
            <div className={style.lowerF}>
                <div className={style.sizeB}>
                    <div className={style.lef}>
                        <Image
                            src={logoF}
                            alt=''
                        />
                        <p>Компания World-bikes специализируется на продаже товаров для велосипедного спорта.</p>
                    </div>
                    <div className={style.righ}>
                        <div className={style.catalog}>
                            <h1>Каталог</h1>
                            <p>Trade-in</p>
                            <p>Велосипеды</p>
                            <p>Экипировка</p>
                            <p>Запчасти</p>
                            <p>Велостанки</p>
                            <p>Аксессуары</p>
                        </div>
                        <div className={style.client}>
                            <h1>Для клиента</h1>
                            <p>О нас</p>
                            <p>Доставка и оплата</p>
                            <p>Блог</p>
                            <p>Контакты</p>
                            <p>Веломастерская</p>
                            <p>Хранение</p>
                            <p>Гарантии</p>
                        </div>
                        <div className={style.contacts}>
                            <h1>Контакты</h1>
                            <div className={style.Cont}>
                                <Image
                                    src={smrtphone}
                                    alt=''
                                />
                                <div className={style.par}>
                                    <p>+7(495)055-75-86</p>
                                    <p>+7(965)142-22-99</p>
                                </div>

                            </div>
                            <div className={style.Cont}>
                                <Image
                                    src={nav}
                                    alt=''
                                />
                                <div>
                                    <p>г. Москва, ул. </p>
                                    <p>Доватора, 7/8 с1</p>
                                </div>

                            </div>
                            <div className={style.Cont}>
                                <Image
                                    src={post}
                                    alt=''
                                />
                                <p>order@world-bike.ru</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className={style.lower}>
                <div className={style.underline}></div>
            <div className={style.prava}>
                <p>© 2023 world bike</p>
                <p>Пользовательское соглашение</p>
            </div>
            </div>
            



        </>
    );
}

export default Footer;