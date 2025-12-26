import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-2xl font-heading font-bold">ЭкоСфера</span>
            </div>
            <p className="text-sm text-white/80">
              Экологичные товары для осознанной жизни в гармонии с природой.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Для дома</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Личная гигиена</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Возврат товара</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Подписка</h3>
            <p className="text-sm text-white/80 mb-3">
              Получайте эконовости и специальные предложения
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center">
                <Icon name="Send" size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 ЭкоСфера. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Icon name="Leaf" size={16} className="text-primary" />
            <span>Заботимся о планете вместе</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
