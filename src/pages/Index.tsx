import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('nature');
  const [scrollY, setScrollY] = useState(0);
  const [personalization, setPersonalization] = useState({
    interest: '',
    audience: '',
    learning: ''
  });
  const [showPersonalization, setShowPersonalization] = useState(true);
  const [achievements, setAchievements] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const [newBadge, setNewBadge] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addAchievement = (badge) => {
    if (!achievements.find(a => a.id === badge.id)) {
      setAchievements(prev => [...prev, badge]);
      setNewBadge(badge);
      setTimeout(() => setNewBadge(null), 3000);
    }
  };

  const personalizedPrograms = programs.filter(program => {
    if (!personalization.interest) return true;
    const interestMap = {
      'nature': ['art', 'explore'],
      'history': ['kraevedenie', 'journalism'],
      'creativity': ['art', 'journalism']
    };
    return interestMap[personalization.interest]?.includes(program.id) || true;
  });

  const badges = [
    { id: 'observer', name: 'Наблюдатель', icon: 'Eye', description: 'Изучил 5+ фотографий' },
    { id: 'explorer', name: 'Следопыт', icon: 'Map', description: 'Использовал все фильтры карты' },
    { id: 'seeker', name: 'Искатель', icon: 'Search', description: 'Отправил запрос' },
    { id: 'ambassador', name: 'Посол', icon: 'Share', description: 'Поделился контентом' }
  ];

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
      {/* Personalization Widget */}
      {showPersonalization && (
        <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-valdai-forest/20 max-w-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-valdai-forest">Персонализируйте опыт</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPersonalization(false)}
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">Что вас манит?</p>
              <div className="flex gap-2">
                {['nature', 'history', 'creativity'].map((interest) => (
                  <Button
                    key={interest}
                    variant={personalization.interest === interest ? "default" : "outline"}
                    size="sm"
                    className={personalization.interest === interest ? "bg-valdai-forest" : "border-valdai-forest/30"}
                    onClick={() => setPersonalization(prev => ({...prev, interest}))}
                  >
                    {interest === 'nature' ? 'Природа' : interest === 'history' ? 'История' : 'Творчество'}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Вы:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {id: 'parent', label: 'Родитель'},
                  {id: 'teen', label: 'Подросток'},
                  {id: 'explorer', label: 'Исследователь'},
                  {id: 'tourist', label: 'Турист'}
                ].map((audience) => (
                  <Button
                    key={audience.id}
                    variant={personalization.audience === audience.id ? "default" : "outline"}
                    size="sm"
                    className={`text-xs ${personalization.audience === audience.id ? "bg-valdai-moss" : "border-valdai-moss/30"}`}
                    onClick={() => setPersonalization(prev => ({...prev, audience: audience.id}))}
                  >
                    {audience.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Познавать через:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {id: 'visual', label: 'Глаза', icon: 'Eye'},
                  {id: 'audio', label: 'Уши', icon: 'Headphones'},
                  {id: 'tactile', label: 'Руки', icon: 'Hand'},
                  {id: 'thinking', label: 'Мысли', icon: 'Brain'}
                ].map((learning) => (
                  <Button
                    key={learning.id}
                    variant={personalization.learning === learning.id ? "default" : "outline"}
                    size="sm"
                    className={`text-xs ${personalization.learning === learning.id ? "bg-valdai-lake" : "border-valdai-lake/30"}`}
                    onClick={() => setPersonalization(prev => ({...prev, learning: learning.id}))}
                  >
                    <Icon name={learning.icon} size={12} className="mr-1" />
                    {learning.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Badge Notification */}
      {newBadge && (
        <div className="fixed top-4 left-4 z-50 bg-valdai-forest text-white p-4 rounded-xl shadow-2xl animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Icon name={newBadge.icon} size={24} />
            </div>
            <div>
              <p className="font-semibold">Достижение получено!</p>
              <p className="text-sm text-valdai-cream">{newBadge.name}</p>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Collector */}
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setShowAchievements(!showAchievements)}
          className="bg-valdai-forest hover:bg-valdai-moss text-white rounded-full p-3 shadow-2xl relative"
        >
          <Icon name="Award" size={24} />
          {achievements.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {achievements.length}
            </span>
          )}
        </Button>
        
        {showAchievements && (
          <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl p-4 w-80 max-h-96 overflow-y-auto">
            <h3 className="font-semibold text-valdai-forest mb-3">Ваши достижения</h3>
            {achievements.length === 0 ? (
              <p className="text-gray-500 text-sm">Исследуйте сайт для получения бейджей!</p>
            ) : (
              <div className="space-y-2">
                {achievements.map((badge) => (
                  <div key={badge.id} className="flex items-center gap-3 p-2 bg-valdai-cream/30 rounded-lg">
                    <Icon name={badge.icon} size={20} className="text-valdai-forest" />
                    <div>
                      <p className="font-medium text-sm">{badge.name}</p>
                      <p className="text-xs text-gray-600">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    
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
            {personalizedPrograms.map((program, index) => (
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
                  <h3 className="text-xl font-bold text-valdai-forest mb-3">
                    {program.title}
                    {personalization.interest && (
                      <span className="ml-2 text-xs bg-valdai-lake/20 text-valdai-lake px-2 py-1 rounded-full">
                        Рекомендуем
                      </span>
                    )}
                  </h3>
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
              
              {/* Map points with storytelling */}
              {mapPoints
                .filter(point => activeFilter === 'legends' || point.type === activeFilter)
                .map((point) => (
                <div
                  key={point.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  onClick={() => {
                    // Check for explorer badge
                    const usedFilters = ['nature', 'history', 'creativity', 'legends'];
                    const filterCount = usedFilters.filter(f => f === activeFilter).length;
                    if (filterCount >= 1) {
                      addAchievement(badges.find(b => b.id === 'explorer'));
                    }
                  }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-valdai-forest rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300 relative">
                      {/* Storytelling indicator */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap max-w-xs">
                      <p className="font-semibold text-valdai-forest">{point.name}</p>
                      <p className="text-sm text-gray-600 mb-2">{point.legend}</p>
                      <div className="flex items-center gap-2 text-xs text-valdai-lake">
                        <Icon name="Headphones" size={12} />
                        <span>Нажмите для аудио-истории</span>
                      </div>
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
              { img: '/img/e11a3479-0432-449d-b216-16ab2773ea01.jpg', title: 'Валдайское озеро', views: 0 },
              { img: '/img/0efe955a-e73d-4b3e-8caa-f73a0b87f763.jpg', title: 'Иверский монастырь', views: 0 },
              { img: '/img/0765e31b-c02c-4cf6-840c-d33cd1b3c94b.jpg', title: 'В лесных программах', views: 0 }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => {
                  // Observer badge logic
                  const totalViews = 1; // Simplified for demo
                  if (totalViews >= 3) {
                    addAchievement(badges.find(b => b.id === 'observer'));
                  }
                }}
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
                
                {/* Enhanced micro-interaction elements */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
                
                {/* Storytelling indicator */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <Icon name="Play" size={16} className="text-white" />
                  </div>
                </div>
                
                {/* Social activity simulation */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-gray-700">
                    <Icon name="Users" size={12} className="inline mr-1" />
                    {Math.floor(Math.random() * 50) + 10} смотрят
                  </div>
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
                  onClick={(e) => {
                    e.preventDefault();
                    addAchievement(badges.find(b => b.id === 'seeker'));
                  }}
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

      {/* Digital Souvenir Generator */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-valdai-cream/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-valdai-forest mb-8 kinetic-text">
            Создай Свой Валдай
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Персонализируйте воспоминания о Валдае - создайте уникальный цифровой сувенир
          </p>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-valdai-forest mb-4">Выберите изображение</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      '/img/e11a3479-0432-449d-b216-16ab2773ea01.jpg',
                      '/img/0efe955a-e73d-4b3e-8caa-f73a0b87f763.jpg',
                      '/img/0765e31b-c02c-4cf6-840c-d33cd1b3c94b.jpg'
                    ].map((img, index) => (
                      <div key={index} className="relative cursor-pointer group">
                        <img 
                          src={img} 
                          alt={`Валдай ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-valdai-forest/0 group-hover:bg-valdai-forest/20 rounded-lg transition-colors duration-300"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-valdai-forest mb-2">Добавить текст</label>
                    <Input 
                      placeholder="Мой Валдай 2024"
                      className="border-valdai-moss focus:ring-valdai-forest focus:border-valdai-forest"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-valdai-forest mb-2">Стиль фильтра</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Винтаж', 'Природа', 'Мистика'].map((filter) => (
                        <Button
                          key={filter}
                          variant="outline"
                          size="sm"
                          className="border-valdai-forest/30 hover:bg-valdai-forest hover:text-white"
                        >
                          {filter}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-valdai-forest mb-4">Предварительный просмотр</h3>
                  <div className="relative bg-gradient-to-br from-valdai-lake/20 to-valdai-moss/20 rounded-xl p-4 mb-6 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Image" size={48} className="text-valdai-forest/50 mx-auto mb-2" />
                      <p className="text-valdai-forest/70">Ваш сувенир появится здесь</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-valdai-forest hover:bg-valdai-moss text-white"
                      onClick={() => addAchievement(badges.find(b => b.id === 'ambassador'))}
                    >
                      <Icon name="Download" className="mr-2" />
                      Скачать Сувенир
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-valdai-lake text-valdai-lake hover:bg-valdai-lake hover:text-white"
                    >
                      <Icon name="Share2" className="mr-2" />
                      Поделиться #МойВалдай
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Calendar Section */}
      <section className="py-20 px-4 bg-valdai-cream/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-valdai-forest mb-8 kinetic-text">
            Календарь Программ
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Выберите удобную дату и получите персональный билет исследователя
          </p>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-valdai-forest mb-4">Доступные программы</h3>
                  <div className="space-y-3">
                    {programs.map((program) => (
                      <div key={program.id} className="p-3 border border-valdai-moss/30 rounded-lg hover:bg-valdai-cream/30 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-valdai-forest">{program.title}</h4>
                            <p className="text-sm text-gray-600">Следующий старт: 15 августа</p>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                            <span className="text-sm text-green-600">8 мест</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-valdai-forest mb-4">Выберите дату консультации</h3>
                  <div className="bg-gradient-to-br from-valdai-lake/10 to-valdai-moss/10 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-valdai-forest p-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({length: 21}, (_, i) => i + 10).map((date) => (
                        <Button
                          key={date}
                          variant="ghost"
                          size="sm"
                          className={`p-2 h-10 ${date === 15 ? 'bg-valdai-forest text-white' : 'hover:bg-valdai-cream/50'}`}
                        >
                          {date}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-valdai-forest hover:bg-valdai-moss text-white"
                      onClick={() => {
                        addAchievement(badges.find(b => b.id === 'seeker'));
                      }}
                    >
                      <Icon name="Calendar" className="mr-2" />
                      Записаться на Консультацию
                    </Button>
                    
                    <div className="text-center text-sm text-gray-600">
                      <Icon name="Gift" size={16} className="inline mr-1" />
                      После записи вы получите персональный билет исследователя
                    </div>
                  </div>
                </div>
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