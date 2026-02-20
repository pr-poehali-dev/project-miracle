import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Пром<span className="text-red-500">СтеклоСнаб</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Транспортная компания, специализирующаяся на грузоперевозках стекла и хрупких грузов по всей России.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Перевозка стекла
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Страхование грузов
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Как мы работаем
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-space-mono text-gray-400">
                  Москва, Россия
                </span>
              </li>
              <li>
                <a href="tel:+78001234567" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  8 (800) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@promsteklosnab.ru" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  info@promsteklosnab.ru
                </a>
              </li>
              <li>
                <span className="font-space-mono text-gray-400">
                  Пн-Пт: 8:00 — 20:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2025 Пром Стекло Снаб. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
