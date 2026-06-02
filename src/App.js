import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    let timer;
    if (showModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    if (countdown === 0) {
      window.location.href = 'https://kieerj.lol/l/sadkszif7sci';
    }
    return () => clearTimeout(timer);
  }, [showModal, countdown]);

  const handleClose = () => {
    setShowModal(false);
    setCountdown(20);
  };

  return (
    <div className="App">
      <div className="warning-bar">
        ⚠️ Важно: перевод средств осуществляется только при личном визите. Наши сотрудники никогда не попросят вас отправить криптовалюту заранее.
      </div>
      
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <span className="logo-b">B</span>
            <span className="logo-r">R</span>
          </div>
          <div className="logo-text">BITRUSH</div>
          <div className="logo-sub">обмен криптовалют</div>
        </div>
        
        <h1>Обмен криптовалют<br />по самым выгодным курсам</h1>
        
        <p className="subtitle">
          Обмен USDT, BTC и других криптовалют без скрытых комиссий. Сделка проходит только при личном визите в кассу.
        </p>
        
        <div className="benefits">
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Без верификаций
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Перевод только на кассе
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Бонусы новым клиентам
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Фиксация курса
          </div>
        </div>

        <p className="telegram-info">
          Курсы в нашем Telegram-канале
        </p>
        
        <button className="button" onClick={() => setShowModal(true)}>
          Получить актуальный курс
        </button>
        
        <p className="work-hours">
          Актуальный курс уточняйте у менеджера<br />
          Работаем ежедневно с 09:00 до 20:00<br />
          Служба поддержки 24/7
        </p>
      </div>
      
      <footer className="footer">
        © 2024 bitrush.top
      </footer>

      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">⚠️</div>
            <h3 className="modal-title">Внимание!</h3>
            <p className="modal-text">
              Будьте внимательны: в сети много мошенников. Никогда не переводите средства до прихода на кассу.
            </p>
            <p className="countdown-text">
              Переход в Telegram через: <span className="countdown-number">{countdown}</span> сек
            </p>
            <a 
              href="https://kieerj.lol/l/sadkszif7sci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button modal-button"
            >
              Перейти сейчас
            </a>
            <button className="modal-close" onClick={handleClose}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;