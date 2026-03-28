import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 backdrop-blur-sm text-sm px-4 py-1">⚡ Мгновенная доставка · 20 ROBUX = 19 ₽</Badge>,
    title: "ROBUX.CORLA",
    showButton: true,
    buttonText: 'Купить ROBUX'
  },
  {
    id: 'pricing',
    title: 'Лучший курс.',
    content: '20 ROBUX = 19 ₽. Никаких скрытых комиссий и накруток — честная цена, мгновенное зачисление на ваш аккаунт ROBLOX.'
  },
  {
    id: 'features',
    title: 'Почему выбирают нас?',
    content: 'Безопасная оплата · Автоматическое зачисление · Поддержка 24/7 · Более 10 000 довольных клиентов · Работаем с 2021 года'
  },
  {
    id: 'testimonials',
    title: 'Отзывы покупателей.',
    content: '⭐⭐⭐⭐ Артём К.: «Купил 400 ROBUX за 380₽, пришли за 2 минуты. Огонь!» · ⭐⭐⭐⭐⭐ Вика Л.: «Уже 3-й раз покупаю, всё четко и быстро» · ⭐⭐⭐⭐ Дима Ч.: «Лучший курс что нашёл, советую всем»'
  },
  {
    id: 'join',
    title: 'Начни играть лучше.',
    content: 'Присоединяйся к тысячам игроков которые уже покупают ROBUX по лучшему курсу. Рейтинг 4.3 ★ на основе 2 400+ отзывов.',
    showButton: true,
    buttonText: 'Купить сейчас'
  },
]
