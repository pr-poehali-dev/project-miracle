import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие грузы вы перевозите?",
      answer:
        "Мы специализируемся на перевозке стекла, стеклопакетов, зеркал, витражей и других хрупких строительных материалов. Также доставляем листовое стекло, триплекс, закалённое стекло любых размеров.",
    },
    {
      question: "Как обеспечивается сохранность стекла?",
      answer:
        "Используем специальные пирамиды-стойки, мягкие прокладки между листами, ремни-стяжки для фиксации. Наши водители обучены работе с хрупкими грузами и проходят по маршрутам с качественным дорожным покрытием.",
    },
    {
      question: "Сколько стоит доставка?",
      answer:
        "Стоимость зависит от расстояния, объёма и типа груза. Оставьте заявку — рассчитаем точную цену за 15 минут. Для постоянных клиентов действуют специальные тарифы.",
    },
    {
      question: "Работаете ли вы с юридическими лицами?",
      answer:
        "Да, мы работаем с юрлицами и ИП. Предоставляем полный пакет закрывающих документов: договор, ТТН, счёт-фактуру, акт выполненных работ. Возможна оплата по безналу с отсрочкой.",
    },
    {
      question: "Какая география доставки?",
      answer:
        "Доставляем по всей России — от Калининграда до Владивостока. Работаем как на межгородских, так и на местных маршрутах. Есть регулярные рейсы по основным направлениям.",
    },
    {
      question: "Что если груз повредят при перевозке?",
      answer:
        "Каждая перевозка застрахована. В случае повреждения груза мы полностью возмещаем стоимость. Перед отправкой делается фото-фиксация состояния груза, при получении — акт приёма-передачи.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о наших услугах, условиях и гарантиях.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
