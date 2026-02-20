import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Директор, СтройГласс Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Работаем с Пром Стекло Снаб уже 3 года. За всё время — ни одного разбитого стеклопакета. Рекомендую всем, кто ценит надёжность.",
  },
  {
    name: "Ольга Сидорова",
    role: "Менеджер по закупкам, ОконПром",
    avatar: "/professional-woman-scientist.png",
    content:
      "Отличный сервис — персональный менеджер, все документы вовремя, груз всегда приходит в идеальном состоянии. Лучшие в перевозке стекла.",
  },
  {
    name: "Марина Ковалёва",
    role: "Руководитель логистики, ВитражСтрой",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Перевозили витражное стекло из Петербурга в Казань — всё дошло без единой царапины. Очень аккуратная и профессиональная команда.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Нам доверяют строительные компании, производители окон и стекольные заводы по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
