import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "../styles/SmartSlider.css"
function SmartMoneySlider() {
  useEffect(() => {
    const setAppHeight = () => {
      const appHeight = window.innerHeight;
      document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
    };

    setAppHeight(); // bir marta yuklaganda

    window.addEventListener('resize', setAppHeight); // oyna o'zgarsa ham hisoblab qo'yish
    return () => window.removeEventListener('resize', setAppHeight);
  }, []);
  const sectionTwoRef = useRef(null);

  const handleScroll = () => {
    console.log("salom")
  sectionTwoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

  return (
    <main className='main_section'>
      <section className="section_one section">
        <div className="top">
          <img  src="/images/section_1_front.png" alt="" />
        </div>
        <div className="bottom">
          <h2 className='smart_text'>
            <span>Smart </span>
            Money 
            <div className="strong">

            <img src="/images/Group 3(1).png" alt="Er" className="strong1" />
            </div>
          </h2>
          <p className='bottom_title'>
            <span className="my_span1">
              Научись
            </span> смотреть на график и видеть ситуации для <span className="my_span1">заработка</span>, а не шум и манипуляции!
          </p>
          <img onClick={handleScroll} src="/images/load.png" alt="Load image" className="load" />
          <p className="text_content">
            Прокрутите страницу, чтобы продолжить
          </p>
        </div>
      </section>
      <section ref={sectionTwoRef} className="section_two section">
        <div className="content_top">
          <img src="/images/section_2_front.png" alt="Section front 2" />
        </div>
        <div className="content_bottom">
          <p>Это не очередной курс по трейдингу,
            а логичная <span className="content_span">пошаговая инструкция</span> —
            для торговли вместе с крупными
            игроками, а не <span className="content_span">против</span>  них!</p>
        </div>
      </section>
      <section className="section_three section">
        <div className="section_top">
          <img src="/images/section_3_front.png" alt="Section front 2" />        </div>
        <div className="section_bottom">
          <p className='description'>Это не разовое обучение, а <span className="span2">пожизненное сопровождение</span>  и <span className="span2">готовые сетапы</span> для торговли на каждый день!</p>
          <Link className='link' to="/courses">
            <img className="bil" src="/images/new.png" alt="Bil" />
            <span> узнать больше</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default SmartMoneySlider