import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('courses');

  const courses = [
    {
      id: 1,
      title: 'Основы керамики и гончарного дела',
      description: 'Полный курс от подготовки глины до обжига изделий',
      price: '12 900 ₽',
      duration: '8 недель',
      level: 'Начальный',
      students: 234,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Технология изготовления мебели',
      description: 'Профессиональные методы работы с деревом и фурнитурой',
      price: '18 500 ₽',
      duration: '12 недель',
      level: 'Продвинутый',
      students: 156,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Текстильное производство: от нити до изделия',
      description: 'Современные техники ткачества и окрашивания тканей',
      price: '15 200 ₽',
      duration: '10 недель',
      level: 'Средний',
      students: 189,
      rating: 4.7
    }
  ];

  const technologies = [
    {
      id: 1,
      title: 'Литье под давлением',
      category: 'Пластмассы',
      steps: 5,
      difficulty: 'Средняя',
      icon: 'Zap'
    },
    {
      id: 2,
      title: 'Порошковая покраска металлов',
      category: 'Обработка поверхности',
      steps: 7,
      difficulty: 'Высокая',
      icon: 'Sparkles'
    },
    {
      id: 3,
      title: 'Лазерная резка материалов',
      category: 'Раскрой',
      steps: 4,
      difficulty: 'Средняя',
      icon: 'Flame'
    },
    {
      id: 4,
      title: '3D печать полимерами',
      category: 'Аддитивное производство',
      steps: 6,
      difficulty: 'Низкая',
      icon: 'Layers'
    }
  ];

  const suppliers = [
    {
      id: 1,
      name: 'ТехноМатериалы',
      category: 'Композитные материалы',
      products: 'Эпоксидная смола, стеклоткань, углеволокно',
      location: 'Москва',
      rating: 4.9,
      verified: true
    },
    {
      id: 2,
      name: 'МеталлПром',
      category: 'Металлургия',
      products: 'Листовая сталь, профили, трубы',
      location: 'Санкт-Петербург',
      rating: 4.7,
      verified: true
    },
    {
      id: 3,
      name: 'ПластикСнаб',
      category: 'Полимеры',
      products: 'ABS, PLA, PETG, поликарбонат',
      location: 'Екатеринбург',
      rating: 4.8,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">EduPro</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button
              variant={activeSection === 'courses' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('courses')}
            >
              <Icon name="BookOpen" className="mr-2 h-4 w-4" />
              Курсы
            </Button>
            <Button
              variant={activeSection === 'technologies' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('technologies')}
            >
              <Icon name="Cpu" className="mr-2 h-4 w-4" />
              Технологии
            </Button>
            <Button
              variant={activeSection === 'suppliers' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('suppliers')}
            >
              <Icon name="Factory" className="mr-2 h-4 w-4" />
              Поставщики
            </Button>
            <Button
              variant={activeSection === 'contacts' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('contacts')}
            >
              <Icon name="Mail" className="mr-2 h-4 w-4" />
              Контакты
            </Button>
          </nav>
          <Button size="sm">
            <Icon name="User" className="mr-2 h-4 w-4" />
            Войти
          </Button>
        </div>
      </header>

      {activeSection === 'courses' && (
        <section className="container py-12 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Авторские обучающие курсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональное обучение от практикующих специалистов производства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Users" className="h-4 w-4" />
                        <span>{course.students} студентов</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <Button>
                        Записаться
                        <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'technologies' && (
        <section className="container py-12 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Технологии производства</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Пошаговые инструкции и методики изготовления изделий
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name={tech.icon as any} className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{tech.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="mb-2">
                        {tech.category}
                      </Badge>
                      <CardDescription className="mt-2">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="ListChecks" className="h-4 w-4" />
                            <span>{tech.steps} этапов</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="TrendingUp" className="h-4 w-4" />
                            <span>{tech.difficulty} сложность</span>
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Icon name="FileText" className="mr-2 h-4 w-4" />
                    Открыть инструкцию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'suppliers' && (
        <section className="container py-12 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Поставщики материалов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Проверенные поставщики сырья и комплектующих
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((supplier) => (
              <Card key={supplier.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{supplier.name}</CardTitle>
                      {supplier.verified && (
                        <Icon name="BadgeCheck" className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                  <Badge variant="secondary">{supplier.category}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold mb-1">Продукция:</p>
                    <p className="text-sm text-muted-foreground">{supplier.products}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" className="h-4 w-4" />
                      <span>{supplier.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold text-sm">{supplier.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Icon name="Phone" className="mr-2 h-4 w-4" />
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="container py-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Остались вопросы? Мы всегда готовы помочь
              </p>
            </div>

            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>
                  Выберите удобный способ связи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon name="Mail" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">info@edupro.ru</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon name="Phone" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon name="MapPin" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-sm text-muted-foreground">
                        г. Москва, ул. Примерная, д. 1
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon name="Clock" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t mt-20 py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
              <span className="font-bold">EduPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EduPro. Образовательная платформа для производства
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Mail" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Phone" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
