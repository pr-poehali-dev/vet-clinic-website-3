import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  
  const services = [
    { name: 'Вакцинация', description: 'Полный комплекс прививок для защиты вашего питомца', price: 'от 1500 ₽', duration: '30 мин' },
    { name: 'Чипирование', description: 'Безопасная идентификация животного', price: 'от 2000 ₽', duration: '15 мин' },
    { name: 'Общий осмотр', description: 'Комплексное обследование состояния здоровья', price: 'от 1200 ₽', duration: '45 мин' },
    { name: 'Стоматология', description: 'Чистка зубов и лечение полости рта', price: 'от 2500 ₽', duration: '60 мин' },
    { name: 'Хирургия', description: 'Операции любой сложности', price: 'от 5000 ₽', duration: '120 мин' },
    { name: 'УЗИ диагностика', description: 'Современная диагностика внутренних органов', price: 'от 1800 ₽', duration: '30 мин' }
  ];

  const products = [
    { name: 'Royal Canin для щенков', price: '2890 ₽', image: 'img/ce3a74f6-90cb-40c0-91ce-d12bcacebe6e.jpg', category: 'Корм' },
    { name: 'Витамины для кошек', price: '890 ₽', image: 'img/ce3a74f6-90cb-40c0-91ce-d12bcacebe6e.jpg', category: 'Витамины' },
    { name: 'Игрушка мячик', price: '450 ₽', image: 'img/ce3a74f6-90cb-40c0-91ce-d12bcacebe6e.jpg', category: 'Игрушки' },
    { name: 'Противопаразитарный препарат', price: '1290 ₽', image: 'img/ce3a74f6-90cb-40c0-91ce-d12bcacebe6e.jpg', category: 'Лекарства' }
  ];

  const reviews = [
    { name: 'Анна М.', text: 'Замечательная клиника! Врачи очень внимательные и профессиональные. Мой кот здесь чувствует себя комфортно.', rating: 5 },
    { name: 'Дмитрий К.', text: 'Быстро и качественно провели операцию моей собаке. Спасибо огромное за заботу и профессионализм!', rating: 5 },
    { name: 'Елена П.', text: 'Отличные врачи, современное оборудование. Цены приемлемые. Всем рекомендую эту клинику!', rating: 5 }
  ];

  const team = [
    { name: 'Доктор Иванова Елена', specialty: 'Главный врач, хирург', experience: '15 лет опыта' },
    { name: 'Доктор Петров Алексей', specialty: 'Терапевт, кардиолог', experience: '12 лет опыта' },
    { name: 'Доктор Сидорова Мария', specialty: 'Дерматолог, офтальмолог', experience: '10 лет опыта' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary h-8 w-8" />
              <span className="text-2xl font-bold text-primary font-montserrat">Лапки в порядке</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#products" className="text-gray-600 hover:text-primary transition-colors">Магазин</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-montserrat">
                Здоровье питомца — 
                <span className="text-primary block">наша забота!</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-opensans">
                Современная ветеринарная клиника с собственной аптекой. 
                Круглосуточная помощь, опытные врачи, индивидуальный подход к каждому питомцу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  <Icon name="Calendar" className="h-5 w-5 mr-2" />
                  Записаться на прием
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg">
                  <Icon name="ShoppingBag" className="h-5 w-5 mr-2" />
                  Посмотреть товары
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="img/f7550dc3-5db4-4efa-86a0-eb9094603a81.jpg" 
                alt="Ветеринар с питомцем" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-sm text-gray-600">(247 отзывов)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="Clock" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-montserrat">Круглосуточно</h3>
              <p className="text-gray-600 font-opensans">Работаем 24/7 для экстренной помощи</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-montserrat">Опыт 10+ лет</h3>
              <p className="text-gray-600 font-opensans">Квалифицированные специалисты</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="ShoppingCart" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-montserrat">Своя аптека</h3>
              <p className="text-gray-600 font-opensans">Все необходимые лекарства и корма</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="Car" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-montserrat">Парковка</h3>
              <p className="text-gray-600 font-opensans">Бесплатная парковка для клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные услуги */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Популярные услуги</h2>
            <p className="text-xl text-gray-600 font-opensans">Комплексный уход за вашими питомцами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-primary">{service.name}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                      {service.duration}
                    </Badge>
                    <Badge className="bg-accent text-accent-foreground">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 font-opensans">{service.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Calendar" className="h-4 w-4 mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              Посмотреть все услуги
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Товары недели */}
      <section id="products" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Товары недели</h2>
            <p className="text-xl text-gray-600 font-opensans">Лучшие товары для ваших питомцев со скидками</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 font-opensans">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary font-montserrat">{product.price}</span>
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              Перейти в магазин
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 font-opensans">Что говорят о нас владельцы питомцев</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic font-opensans">"{review.text}"</p>
                  <div className="font-semibold text-gray-900 font-montserrat">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Наша команда</h2>
            <p className="text-xl text-gray-600 font-opensans">Профессиональные врачи с большим опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-primary/10">
                    <img 
                      src="img/bca190c6-30c4-49d7-838c-92f24ebdeaac.jpg" 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 font-montserrat">{doctor.name}</h3>
                    <p className="text-primary font-medium font-opensans">{doctor.specialty}</p>
                    <p className="text-gray-600 text-sm font-opensans">{doctor.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              Узнать больше о клинике
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-montserrat">Остались вопросы?</h2>
            <p className="text-xl opacity-90 font-opensans">Закажите обратный звонок, и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card className="max-w-md mx-auto bg-white">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-gray-300"
                  required
                />
                <Input
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="border-gray-300"
                  required
                />
                <Textarea
                  placeholder="Сообщение (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border-gray-300"
                  rows={3}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  Заказать звонок
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-accent h-8 w-8" />
                <span className="text-2xl font-bold font-montserrat">Лапки в порядке</span>
              </div>
              <p className="text-gray-300 font-opensans">Современная ветеринарная клиника с заботой о каждом питомце</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-montserrat">Контакты</h3>
              <div className="space-y-2 text-gray-300 font-opensans">
                <p className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@lapki-poryadok.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  г. Москва, ул. Ленина, 123
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-montserrat">Время работы</h3>
              <div className="space-y-2 text-gray-300 font-opensans">
                <p>Пн-Вс: 24/7</p>
                <p>Экстренная помощь</p>
                <p>Плановые приемы:</p>
                <p>9:00 - 21:00</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-montserrat">Соцсети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Phone" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Mail" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 font-opensans">
            <p>&copy; 2024 Ветеринарная клиника "Лапки в порядке". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;