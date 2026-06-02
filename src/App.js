import React from 'react';
import './App.css';

function App() {
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
        
        <a 
          href="https://kieerj.lol/l/sadkszif7sci" 
          target="_blank" 
          rel="noopener noreferrer"
          className="button"
        >
          Получить актуальный курс
        </a>
        
        <p className="work-hours">
          Актуальный курс уточняйте у менеджера<br />
          Работаем ежедневно с 09:00 до 20:00<br />
          Служба поддержки 24/7
        </p>
      </div>
      
      <footer className="footer">
        © 2024 bitrush.top
      </footer>
    </div>
  );
}

export default App;