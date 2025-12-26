import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  badge?: string;
  description: string;
}

export default function ProductCard({ title, price, image, badge, description }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {badge && (
            <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
              {badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-2">
        <CardTitle className="text-xl font-heading">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2 pt-2">
          <Icon name="Leaf" size={16} className="text-primary" />
          <span className="text-xs text-muted-foreground">Экологичный продукт</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">{price}</span>
        <Button className="rounded-full" size="sm">
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
