import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">ЭкоСфера</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors font-medium">
              Каталог
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors font-medium">
              О нас
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </button>
            <Button className="rounded-full">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Каталог
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Контакты
              </button>
              <Button className="rounded-full w-full">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Корзина
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
