import { config, collection, fields } from '@keystatic/core';

export default config({
    storage: {
        kind: 'github',
        repo: 'yukkitorie/foxwar-master', // Твой основной репозиторий
    },
    collections: {
        // Коллекция для Мероприятий (Events)
        events: collection({
            label: 'Мероприятия',
            slugField: 'slug',
            path: 'src/content/events/*', // Путь к файлам в основном репо
            format: { contentField: 'content_ru' },
            schema: {
                slug: fields.string({
                    label: 'Техническое имя (Slug)',
                    description: 'Используется в URL. Например: winter-battle-2025'
                }),
                date: fields.date({ label: 'Дата мероприятия' }),
                image: fields.image({
                    label: 'Обложка',
                    directory: 'src/assets/images/uploads', // Твоя папка для картинок
                    publicPath: '@/assets/images/uploads/',
                }),

                // Поля для Русского языка
                title_ru: fields.string({ label: 'Название (RU)' }),
                description_ru: fields.text({ label: 'Описание (RU)', multiline: true }),

                // Поля для Английского языка
                title_en: fields.string({ label: 'Название (EN)' }),
                description_en: fields.text({ label: 'Описание (EN)', multiline: true }),

                // Поля для Латышского языка
                title_lv: fields.string({ label: 'Название (LV)' }),
                description_lv: fields.text({ label: 'Описание (LV)', multiline: true }),
            },
        }),

        // Коллекция для Цен (на основе твоих данных)
        pricing: collection({
            label: 'Цены',
            slugField: 'title_ru',
            path: 'src/content/pricing/*',
            schema: {
                title_ru: fields.string({ label: 'Услуга (RU)' }),
                title_en: fields.string({ label: 'Услуга (EN)' }),
                title_lv: fields.string({ label: 'Услуга (LV)' }),
                price: fields.string({ label: 'Стоимость' }),
            }
        }),
    },
});