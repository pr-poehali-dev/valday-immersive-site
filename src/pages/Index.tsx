import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('nature');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      id: 'kraevedenie',
      title: 'Краеведение Валдая',
      description: 'Открой древние тайны валдайской земли через исследования и экскурсии',
      icon: 'Compass',
      morphIcon: 'MapPin',
      color: 'from-valdai-terracotta to-valdai-earth',
      image: '/img/0efe955a-e73d-4b3e-8caa-f73a0b87f763.jpg'
    },
    {
      id: 'art',
      title: 'Арт-терапия в Природе',
      description: 'Творческое самовыражение на фоне валдайских пейзажей',
      icon: 'Palette',
      morphIcon: 'Flower',
      color: 'from-valdai-moss to-valdai-forest',
      image: '/img/0765e31b-c02c-4cf6-840c-d33cd1b3c94b.jpg'
    },
    {
      id: 'explore',
      title: 'Хочу Всё Знать',
      description: 'Исследовательские программы для любознательных умов',
      icon: 'Search',
      morphIcon: 'Telescope',
      color: 'from-valdai-lake to-blue-500',
      image: '/img/e11a3479-0432-449d-b216-16ab2773ea01.jpg'
    },
    {
      id: 'journalism',
      title: 'Юная Журналистика',
      description: 'Расскажи миру о красоте и истории Валдая',
      icon: 'BookOpen',
      morphIcon: 'PenTool',
      color: 'from-purple-600 to-purple-800',
      image: '/img/e11a3479-0432-449d-b216-16ab2773ea01.jpg'
    }
  ];

  const mapPoints = [
    { id: 1, name: 'Валдайское озеро', x: 45, y: 60, type: 'nature', legend: 'Кристально чистые воды с древними легендами' },
    { id: 2, name: 'Иверский монастырь', x: 55, y: 45, type: 'history', legend: 'Духовный центр земли валдайской' },
    { id: 3, name: 'Национальный парк', x: 30, y: 30, type: 'nature', legend: 'Дикая природа в первозданном виде' },
    { id: 4, name: 'Музей колоколов', x: 70, y: 55, type: 'history', legend: 'Мелодии валдайских мастеров' },
    { id: 5, name: 'Тропа творчества', x: 40, y: 75, type: 'creativity', legend: 'Где рождается вдохновение' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-valdai-cream to-white overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/img/e11a3479-0432-449d-b216-16ab2773ea01.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 z-20">
          <div className="animate-float absolute top-20 left-10 text-valdai-cream/60">
            <Icon name="Leaf" size={32} />
          </div>
          <div className="animate-float absolute top-40 right-20 text-valdai-cream/60" style={{animationDelay: '2s'}}>
            <Icon name="Bird" size={28} />
          </div>
          <div className="animate-float absolute bottom-40 left-20 text-valdai-cream/60" style={{animationDelay: '4s'}}>
            <Icon name="Mountain" size={36} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 kinetic-text animate-fade-in-up">
            ВАЛДАЙ
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-valdai-cream animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Где История Оживает, а Природа Говорит
          </h2>
          <p className="text-lg md:text-xl mb-12 text-valdai-cream/90 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '1s'}}>
            Уникальные образовательные программы в сердце Валдайского национального парка
          </p>
          <Button 
            size="lg" 
            className="bg-valdai-forest hover:bg-valdai-moss text-white px-8 py-4 text-lg animate-fade-in-up hover:scale-105 transition-all duration-300"
            style={{animationDelay: '1.5s'}}
          >
            Открыть Валдай
            <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-valdai-forest mb-8 kinetic-text">
            Наша Миссия
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Мы открываем Валдай через образование и творчество, создавая глубокую связь между современными детьми 
            и древней мудростью этой удивительной земли. Каждая программа — это путешествие к себе через природу.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-valdai-cream/30 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-valdai-forest mb-16 kinetic-text">
            Образовательные Программы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Morphing Icon */}
                  <div className="absolute top-4 right-4 text-white">
                    <div className="morphing-icon">
                      <Icon 
                        name={program.icon} 
                        size={32} 
                        className="group-hover:hidden transition-opacity duration-300" 
                      />
                      <Icon 
                        name={program.morphIcon} 
                        size={32} 
                        className="hidden group-hover:block transition-opacity duration-300" 
                      />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-valdai-forest mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-valdai-forest text-valdai-forest hover:bg-valdai-forest hover:text-white transition-all duration-300"
                  >
                    Погрузиться в Программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Emotional Map */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-valdai-cream/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-valdai-forest mb-8 kinetic-text">
            Эмоциональная Карта Валдая
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Выберите линзу восприятия и откройте Валдай с новой стороны
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'nature', label: 'Природа', icon: 'Trees' },
              { id: 'history', label: 'История', icon: 'Castle' },
              { id: 'creativity', label: 'Творчество', icon: 'Sparkles' },
              { id: 'legends', label: 'Легенды', icon: 'BookOpen' }
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  activeFilter === filter.id 
                    ? 'bg-valdai-forest text-white' 
                    : 'border-valdai-forest text-valdai-forest hover:bg-valdai-forest hover:text-white'
                } transition-all duration-300`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <Icon name={filter.icon} className="mr-2" size={18} />
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="relative bg-gradient-to-br from-valdai-lake/20 to-valdai-moss/20 rounded-2xl p-8 min-h-96">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden">
              {/* Map background */}
              <div className="absolute inset-0 opacity-30">
                <img 
                  src="/img/e11a3479-0432-449d-b216-16ab2773ea01.jpg" 
                  alt="Valdai map" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Map points */}
              {mapPoints
                .filter(point => activeFilter === 'legends' || point.type === activeFilter)
                .map((point) => (
                <div
                  key={point.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-valdai-forest rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      <p className="font-semibold text-valdai-forest">{point.name}</p>
                      <p className="text-sm text-gray-600">{point.legend}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery with Micro-interactions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-valdai-forest mb-16 kinetic-text">
            Фото и Видео Валдая
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/img/e11a3479-0432-449d-b216-16ab2773ea01.jpg', title: 'Валдайское озеро' },
              { img: '/img/0efe955a-e73d-4b3e-8caa-f73a0b87f763.jpg', title: 'Иверский монастырь' },
              { img: '/img/0765e31b-c02c-4cf6-840c-d33cd1b3c94b.jpg', title: 'В лесных программах' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
                
                {/* Micro-interaction elements */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-valdai-cream/30 to-valdai-forest/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-valdai-forest mb-8 kinetic-text">
            Связаться с Нами
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Готовы начать путешествие в мир Валдая? Напишите нам!
          </p>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-valdai-forest mb-2">Ваше имя</label>
                    <Input 
                      className="border-valdai-moss focus:ring-valdai-forest focus:border-valdai-forest"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-valdai-forest mb-2">Email</label>
                    <Input 
                      type="email"
                      className="border-valdai-moss focus:ring-valdai-forest focus:border-valdai-forest"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-valdai-forest mb-2">Интересующая программа</label>
                  <select className="w-full px-3 py-2 border border-valdai-moss rounded-md focus:ring-valdai-forest focus:border-valdai-forest">
                    <option>Выберите программу</option>
                    {programs.map(program => (
                      <option key={program.id}>{program.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-valdai-forest mb-2">Сообщение</label>
                  <Textarea 
                    className="border-valdai-moss focus:ring-valdai-forest focus:border-valdai-forest"
                    rows={4}
                    placeholder="Расскажите нам о ваших интересах и целях..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-valdai-forest hover:bg-valdai-moss text-white py-3 text-lg hover:scale-105 transition-all duration-300"
                >
                  Отправить Запрос
                  <Icon name="Send" className="ml-2" />
                </Button>
              </form>
              
              <div className="mt-8 text-center text-gray-600">
                <p className="mb-2">📧 info@valdai-education.ru</p>
                <p className="mb-2">📞 +7 (XXX) XXX-XX-XX</p>
                <p>📍 Валдай, Новгородская область</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-valdai-forest text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Образовательные Программы Валдая</h3>
          <p className="mb-6 text-valdai-cream/80">
            Открываем красоту и мудрость валдайской земли через образование и творчество
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Heart" className="text-red-400" />
            <Icon name="Leaf" className="text-green-400" />
            <Icon name="Star" className="text-yellow-400" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;