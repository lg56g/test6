import React from 'react';
import { ChevronDown, Truck, Award, Users, DollarSign, Home, CheckCircle, AlertTriangle } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-red-500 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Step Up CDL School</h1>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Получи CDL в США и начни карьеру в грузовых перевозках!
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Онлайн-курсы, практические занятия и помощь в трудоустройстве.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Начать обучение
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Узнать больше
              </button>
            </div>
          </div>
          <ChevronDown 
            className="absolute bottom-8 animate-bounce w-8 h-8" 
            onClick={() => scrollToSection('who-we-are')}
          />
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Users className="w-16 h-16 text-blue-900" />
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Кто мы</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Мы — команда профессионалов, которая помогает людям получить коммерческие водительские права (CDL) 
            и начать карьеру в сфере грузовых перевозок в США. Наши курсы разработаны с учетом всех требований 
            и стандартов, чтобы вы могли быстро и эффективно освоить необходимые навыки.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section id="what-we-offer" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Award className="w-16 h-16 text-blue-900" />
          </div>
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Что мы предлагаем</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <DollarSign className="w-6 h-6" />, text: "Первоначальный взнос всего $1000" },
              { icon: <Truck className="w-6 h-6" />, text: "Гарантированное трудоустройство через 1-2 месяца с зарплатой $6000-8000" },
              { icon: <Home className="w-6 h-6" />, text: "Прописка на 1 год" },
              { icon: <DollarSign className="w-6 h-6" />, text: "Доступное жилье всего за $20 в день" },
              { icon: <CheckCircle className="w-6 h-6" />, text: "Права на вождение легковых автомобилей за 1 неделю" },
              { icon: <CheckCircle className="w-6 h-6" />, text: "Права на вождение грузовых автомобилей за 2 недели" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-blue-900 mt-1">{item.icon}</div>
                <p className="text-lg text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Почему именно мы</h2>
          <p className="text-xl text-center text-gray-700 mb-8">Другие школы могут:</p>
          <div className="space-y-4">
            {[
              "Требовать огромной предоплаты",
              "Скрывать реальную стоимость обучения",
              "Не гарантировать трудоустройство",
              "Оставлять вас наедине с жилищными проблемами",
              "Затягивать обучение на месяцы",
              "Игнорировать ваши потребности в документах"
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <p className="text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section id="our-advantages" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-16 h-16 text-blue-900" />
          </div>
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Никаких скрытых платежей",
              "От обучения до работы за 1-2 месяца",
              "Полное сопровождение на всех этапах",
              "Минимальный начальный взнос",
              "Реальное трудоустройство с достойной зарплатой",
              "Помощь с жильем",
              "Юридическое сопровождение",
              "Оптимизация финансов"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="call-to-action" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Не теряйте время и деньги!</h2>
          <div className="space-y-6 mb-12">
            <p className="text-xl">
              Начните свой путь к успешной карьере уже сегодня! Свяжитесь с нами прямо сейчас! 
              Сделайте первый шаг к своей американской мечте! Мы готовы ответить на все интересующие вас вопросы.
            </p>
            <p className="text-xl">
              Помните: ваш успех – это наша репутация. Мы заинтересованы в том, чтобы вы достигли своей цели 
              самым быстрым и выгодным путем!
            </p>
            <p className="text-xl">
              <strong className="text-red-400">CDL School "Step Up"</strong> – Ваш надежный мост к успешной карьере в США!
            </p>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;