'use client';

import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import style from '@/app/style.module.css';
import Image from "next/image";
import wahoo from '@/public/wahoo.svg';
import tacx from '@/public/tacx.svg';
import topeak from '@/public/topeak.svg';
import sram from '@/public/sram.svg';
import trek from '@/public/trek.svg';
import america from '@/public/amerika.svg';
import italia from '@/public/italia.svg';
import bike1 from '@/public/bike1.svg';
import bike2 from '@/public/bike2.svg';
import bike3 from '@/public/bike3.svg';
import icondimond from '@/public/icondimond.svg';
import iconcompl from '@/public/iconcompl.svg';
import iconset from '@/public/iconset.svg';
import icon24 from '@/public/icon24.svg';
import bikeW1 from '@/public/bikeW1.svg';
import bikeW2 from '@/public/bikeW2.svg';
import bikeW3 from '@/public/bikeW3.svg';
import helmet1 from '@/public/helmet1.svg';
import helmet2 from '@/public/helmet2.svg';
import helmet3 from '@/public/helmet3.svg';
import phone from '@/public/smartphone.svg';
import mail from '@/public/mail.svg';
import adress from '@/public/navigation.svg';
import calendar from '@/public/calendar.svg';
import { useState } from "react";


const helmets = [
  {
    id: 1,
    title: 'Rudy Project Airstorm Lime Fluo White Shiny',
    img: helmet1,
    price: '7 990 ₽'
  },
  {
    id: 2,
    title: 'Rudy Project Protera Blue Orange Matt',
    img: helmet2,
    price: '9 420 ₽'
  },
  {
    id: 3,
    title: 'Rudy Project Avenger Titanium Lime Matt',
    img: helmet3,
    price: '9 200 ₽'
  },
  {
    id: 4,
    title: 'Test 1',
    img: helmet3,
    price: 'test'
  },
  {
    id: 5,
    title: 'Test 2',
    img: helmet3,
    price: 'test'
  },
  {
    id: 6,
    title: 'Test 3',
    img: helmet3,
    price: 'test'
  },
  {
    id: 7,
    title: 'Test 4',
    img: helmet3,
    price: 'test'
  },
  {
    id: 8,
    title: 'Test 5',
    img: helmet3,
    price: 'test'
  },
  {
    id: 9,
    title: 'Test 6',
    img: helmet3,
    price: 'test'
  },
]

const bikesW = [
  {
    id: 1,
    title: 'Bianchi ARCADEX GRX600 40 Синий 2022',
    img: bikeW1,
    flag: italia,
    price: '351 890 ₽'
  },
  {
    id: 2,
    title: 'Trek Verve 1 Disc Low Step Era White HYBD 2022',
    img: bikeW2,
    flag: america,
    price: '77 300 ₽'
  },
  {
    id: 3,
    title: 'Trek Dual Sport 1 Quicksilver Hybrid 2022',
    img: bikeW3,
    flag: america,
    price: '78 000 ₽'
  }
]
const setting = [
  {
    img: icondimond,
    title: 'Европейские бренды',
    discription: 'Представляем десятки европейских брендов'
  },
  {
    img: iconcompl,
    title: 'Вечная гарантия',
    discription: 'На некоторые бренды предоставляем пожизненную гарантию'
  },
  {
    img: iconset,
    title: 'Предпродажная настройка',
    discription: 'Специалисты настроят ваш велосипед наилучшим образом'
  },
  {
    img: icon24,
    title: 'Доставка за 24 часа',
    discription: 'Доставляем товар всеми популярными транспортными компаниями'
  }
]
const brands = [wahoo, tacx, trek, topeak, sram];
const bikes = [
  {
    id: 1,
    title: 'Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021',
    img: bike1,
    flag: italia,
    price: '684 840 ₽'
  },
  {
    id: 2,
    title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022',
    img: bike2,
    flag: america,
    price: '89 300 ₽'
  },
  {
    id: 3,
    title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022',
    img: bike3,
    flag: america,
    price: '115 000 ₽'
  }
]

export default function Home() {

  const [helmetIndex, setHelmetIndex] = useState(0)

  const helmeting = helmets.slice(helmetIndex, helmetIndex + 3);


  function Next() {

    helmets.length - 3 == helmetIndex ? setHelmetIndex(0) : setHelmetIndex(helmetIndex + 3)
  }

  function Back() {

    helmetIndex == 0 ? setHelmetIndex(helmets.length - 3) : setHelmetIndex(helmetIndex - 3)
  }


  return (
    <>
      <div className={style.backImg}>
        <Header></Header>
        <section className={style.sizeSec}>
          <div className={style.main}>
            <h1>Электро велосипеды</h1>
            <p>Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий стандарт для данной категории</p>
            <button>Подробнее</button>
          </div>
        </section>
      </div>
      <div className={style.sizeSel}>
        <div className={style.selector}>
          <div className={style.leftSel}>
            <h1>Экстремальное вождение на горном велосипед</h1>
          </div>
          <div className={style.centrSel}>
            <h1>Велосипеды для профессионалов</h1>
          </div>
          <div className={style.rightSel}>
            <h1>Долгая поездка на шоссейном велосипеде</h1>
          </div>
        </div>
      </div>
      <div className={style.brands}>
        {brands.map(el => <Image src={el} alt="" />)}
      </div>
      <section className={style.backCol}>
        <div className={style.bikeSize}>
          <h1>Новинки</h1>
          <div className={style.cards}>
            {bikes.map(elem => <div className={style.cardA}>
              <Image
                src={elem.flag}
                alt=""
              />
              <Image className={style.bike}
                src={elem.img}
                alt=""
              />
              <p className={style.titlecard}>{elem.title}</p>
              <p className={style.pricecard}>{elem.price}</p>
            </div>)}
          </div>

        </div>

      </section>
      {/* <section className={style.catalog}>
        <div className={style.catalogcount}>
          <h1 className={style.titlecat}>Каталог</h1>
          <div className={style.biker}></div>
          <div className={style.blackblocks}>
            <div className={style.leftblack}></div>
            <div className={style.centerblack}>
              <div className={style.upcenter}></div>
              <div className={style.downcenter}></div>
            </div>
            <div className={style.rightblack}>
              <div className={style.upright}></div>
              <div className={style.downright}></div>
            </div>
          </div>
          <div className={style.nevergiveup}>
            <h1>Ничего не сможет остановить вас</h1>
            <div className={style.Rtext}>
              <p className={style.Rtitle}>Наша компания специализируется на продаже товаров для велосипедного спорта — велосипедов, запасных частей, аксессуаров и различного спортивного инвентаря для активного спорта и отдыха.</p>
              <p className={style.more}>Подробнее</p>
            </div>
          </div>
        </div>

      </section> */}
      <section className={style.sizebiker}>
        <div className={style.bikerImg}></div>
        <div className={style.backColors}>
          <div className={style.sizeBlck}>
            {setting.map(el =>
              <div className={style.infos}>
                <div className={style.upstare}>
                  <Image
                    src={el.img}
                    alt=""
                  />
                  <h2>{el.title}</h2>

                </div>
                <p className={style.textIninfos}>{el.discription}</p>
              </div>)}
          </div>
        </div>
      </section>

      <section className={style.backWinterCol}>
        <div className={style.bikeSizeW}>
          <h1>Лучшие модели для зимней езды</h1>
          <div className={style.cards}>
            {bikesW.map(elem => <div className={style.cardA}>
              <Image
                src={elem.flag}
                alt=""
              />
              <Image className={style.bike}
                src={elem.img}
                alt=""
              />
              <p className={style.titlecard}>{elem.title}</p>
              <p className={style.pricecard}>{elem.price}</p>
            </div>)}
          </div>

        </div>

      </section>

      <section className={style.scalebikeCol}>
        <div className={style.sizeScale}>
          <h1>Горные велосипеды</h1>
          <div className={style.scaleBlocks}>
            <div className={style.leftscale}>
              <div className={style.ram}></div>
              <div className={style.boardcom}></div>
              <div className={style.trans}></div>
              <div className={style.oborud}></div>
            </div>
            <div className={style.rightscale}>
              <div className={style.scalebike}></div>
              <p>Горный велосипед несмотря на свое название часто и активно используются в условиях города, так как обладает рядом характеристик, позволяющих сделать велопрогулку максимально приятной и комфортной</p>
              <button>Каталог</button>
            </div>
          </div>

        </div>

      </section>

      <section className={style.winnerCol}>
        <div className={style.winnerSize}>
          <h1>Преимущества</h1>
          <div className={style.winnerBlocks}>
            <div className={style.winLeft}></div>
            <div className={style.winCentr}>
              <div className={style.free}></div>
              <div className={style.trad}></div>
              <div className={style.serv}></div>
              <div className={style.online}></div>
            </div>
            <div className={style.winRight}></div>

          </div>

        </div>

      </section>


      <section className={style.helmetColor}>
        <div className={style.helmet}>
          <h1>Экипировка</h1>

          <div className={style.cardsH}>
            <button className={style.butt} onClick={Back}>&lt;-</button>
            {helmeting.map(elem => <div className={style.cardHelm}>
              <Image
                src={elem.flag}
                alt=""
              />
              <Image className={style.helmett}
                src={elem.img}
                alt=""
              />
              <p className={style.titlecard}>{elem.title}</p>
              <p className={style.pricecard}>{elem.price}</p>
            </div>)}
            <button className={style.butt} onClick={Next}>-&gt;</button>
          </div>


        </div>

      </section>

      <section className={style.contacts}>
        <div className={style.sizeCont}>
          <h1>Контакты</h1>
        </div>
        <div className={style.map}></div>
        <div className={style.contactsBlock}>
          <div className={style.phone}>
            <div className={style.Left}>
              <Image
              src={phone}
              alt=""
              />
            </div>
            <div className={style.Right}>
              <p>+7 (495) 055-75-86</p>
              <p>+7 (965) 142-22-99</p>
            </div>
          </div>
          <div className={style.adress}>
            <div className={style.Left}>
              <Image
              src={adress}
              alt=""
              />
            </div>
            <div className={style.Right}>
              <p>г. Москва, ул</p>
              <p>Доватора, 7/8 с</p>
            </div>
          </div>
          <div className={style.mail}>
            <div className={style.Left}>
              <Image
              src={mail}
              alt=""
              />
            </div>
            <div className={style.Right}>
              <p>order@world-bike.ru</p>
            </div>
          </div>
          <div className={style.time}>
            <div className={style.Left}>
              <Image
              src={calendar}
              alt=""
              />
            </div>
            <div className={style.Right}>
              <p>Без выходных </p>
              <p>10:00-20:00</p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>

  );
}
