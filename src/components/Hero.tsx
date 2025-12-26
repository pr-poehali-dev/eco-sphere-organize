import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Живи в гармонии <span className="text-primary">с природой</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Экологичные товары для осознанной жизни. Качественная продукция, которая заботится о планете.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('catalog')} size="lg" className="rounded-full text-lg">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button onClick={() => scrollToSection('team')} size="lg" variant="outline" className="rounded-full text-lg">
                Узнать больше
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Leaf" size={24} className="text-primary" />
                <span className="text-sm font-medium">100% натурально</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Recycle" size={24} className="text-primary" />
                <span className="text-sm font-medium">Экоупаковка</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/3284bc21-2cf6-4c1a-89b4-603f79e5afff/files/a81815d6-0d31-4027-b8e6-48f21af4d3c0.jpg" 
                alt="Экотовары" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
