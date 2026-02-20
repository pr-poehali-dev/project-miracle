import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Перевозка стекла",
    description: "Специализированная доставка стекла, зеркал и стеклопакетов с использованием пирамид и мягких прокладок.",
    icon: "🪟",
    badge: "Спецгруз",
  },
  {
    title: "Страхование грузов",
    description: "Полное страхование каждой перевозки. Гарантия возмещения в случае повреждения хрупких грузов.",
    icon: "🛡️",
    badge: "Гарантия",
  },
  {
    title: "По всей России",
    description: "Доставка в любую точку страны — от Калининграда до Владивостока. Межрегиональные и местные маршруты.",
    icon: "🌍",
    badge: "Логистика",
  },
  {
    title: "Точно в срок",
    description: "GPS-мониторинг каждого рейса и чёткое соблюдение сроков доставки. Отслеживание груза онлайн.",
    icon: "⏱️",
    badge: "Контроль",
  },
  {
    title: "Собственный автопарк",
    description: "Современные грузовики с оборудованием для безопасной транспортировки хрупких и негабаритных грузов.",
    icon: "🚛",
    badge: "Техника",
  },
  {
    title: "Индивидуальный подход",
    description: "Персональный менеджер, расчёт маршрута и стоимости под ваш груз. Работаем с юрлицами и ИП.",
    icon: "🤝",
    badge: "B2B",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Комплексные решения для безопасной перевозки стекла и хрупких грузов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
