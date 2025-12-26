import ProductCard from './ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Catalog() {
  const products = [
    {
      title: 'Набор экосредств для дома',
      price: '1 290 ₽',
      image: 'https://cdn.poehali.dev/projects/3284bc21-2cf6-4c1a-89b4-603f79e5afff/files/4dcf33f3-9cad-4c1b-9cd0-d460e1d77c88.jpg',
      badge: 'Хит',
      description: 'Натуральные средства для уборки без химии',
      category: 'home'
    },
    {
      title: 'Бамбуковый набор для ванной',
      price: '890 ₽',
      image: 'https://cdn.poehali.dev/projects/3284bc21-2cf6-4c1a-89b4-603f79e5afff/files/76d4f8d4-764a-4b07-a182-ab75f5cbe5ae.jpg',
      badge: 'Новинка',
      description: 'Зубная щётка и мыло из натуральных компонентов',
      category: 'care'
    },
    {
      title: 'Экосумки из хлопка',
      price: '490 ₽',
      image: 'https://cdn.poehali.dev/projects/3284bc21-2cf6-4c1a-89b4-603f79e5afff/files/a81815d6-0d31-4027-b8e6-48f21af4d3c0.jpg',
      description: 'Многоразовые сумки для покупок',
      category: 'accessories'
    },
    {
      title: 'Органическое мыло ручной работы',
      price: '350 ₽',
      image: 'https://cdn.poehali.dev/projects/3284bc21-2cf6-4c1a-89b4-603f79e5afff/files/76d4f8d4-764a-4b07-a182-ab75f5cbe5ae.jpg',
      description: 'Натуральное мыло на основе трав',
      category: 'care'
    },
    {
      title: 'Бамбуковая посуда',
      price: '1 590 ₽',
      image: 'https://cdn.poehali.dev/projects/3284bc21-2cf6-4c1a-89b4-603f79e5afff/files/4dcf33f3-9cad-4c1b-9cd0-d460e1d77c88.jpg',
      description: 'Набор экологичной посуды для всей семьи',
      category: 'home'
    },
    {
      title: 'Термокружка из стали',
      price: '1 190 ₽',
      image: 'https://cdn.poehali.dev/projects/3284bc21-2cf6-4c1a-89b4-603f79e5afff/files/a81815d6-0d31-4027-b8e6-48f21af4d3c0.jpg',
      badge: 'Хит',
      description: 'Многоразовая кружка для горячих напитков',
      category: 'accessories'
    }
  ];

  return (
    <section id="catalog" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Наш каталог
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя широкий выбор экологичных товаров для дома и личной гигиены
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">Всё</TabsTrigger>
            <TabsTrigger value="home">Дом</TabsTrigger>
            <TabsTrigger value="care">Уход</TabsTrigger>
            <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }} className="animate-scale-in">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="home" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'home').map((product, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }} className="animate-scale-in">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="care" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'care').map((product, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }} className="animate-scale-in">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'accessories').map((product, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }} className="animate-scale-in">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
