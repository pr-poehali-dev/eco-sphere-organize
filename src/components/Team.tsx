import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  description: string;
  emoji: string;
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: 'Анна Зеленова',
      role: 'Основатель и эколог',
      experience: '12 лет в экологии',
      description: 'Специалист по устойчивому развитию. Создала ЭкоСферу с миссией сделать экологичную жизнь доступной каждому.',
      emoji: '🌿'
    },
    {
      name: 'Михаил Лесной',
      role: 'Менеджер по качеству',
      experience: '8 лет опыта',
      description: 'Отвечает за отбор поставщиков и проверку продукции. Гарантирует, что каждый товар соответствует эко-стандартам.',
      emoji: '✅'
    },
    {
      name: 'Елена Цветкова',
      role: 'Специалист по продукту',
      experience: '6 лет в ритейле',
      description: 'Изучает потребности клиентов и подбирает лучшие экотовары. Проводит обучающие вебинары об осознанном потреблении.',
      emoji: '🌸'
    },
    {
      name: 'Дмитрий Речкин',
      role: 'Логист',
      experience: '10 лет в логистике',
      description: 'Организует экодоставку с минимальным углеродным следом. Использует только переработанные упаковочные материалы.',
      emoji: '📦'
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессионалы, которые разделяют ценности экологичного образа жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                  {member.emoji}
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="Briefcase" size={18} />
                  <span className="text-sm font-medium">{member.experience}</span>
                </div>
                <p className="text-center text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-2xl shadow-lg animate-fade-in">
            <div className="text-4xl mb-2">🌍</div>
            <h4 className="text-2xl font-bold text-primary mb-2">500+</h4>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="text-4xl mb-2">♻️</div>
            <h4 className="text-2xl font-bold text-primary mb-2">1000+</h4>
            <p className="text-muted-foreground">Экотоваров в каталоге</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl mb-2">🌱</div>
            <h4 className="text-2xl font-bold text-primary mb-2">3 года</h4>
            <p className="text-muted-foreground">На рынке экопродукции</p>
          </div>
        </div>
      </div>
    </section>
  );
}
