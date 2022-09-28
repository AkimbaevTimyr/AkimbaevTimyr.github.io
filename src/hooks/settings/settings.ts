export function useSettings(){
    type Option = {
        id: number;
        name: string;
    }
    const genres: any = {
        'Драма': 18,
        "Боевик": 28,
        "Приключение": 12,
        "Ужасы": 27,
        "Триллер": 53
    }
    const options: Option[] = [
        {id: 18, name:  "Драма"},
        {id: 28, name:  "Боевик"},
        {id: 12, name:  "Приключение"},
        {id: 27, name:  "Ужасы"},
        {id: 53, name:  "Триллер"},
    ]
    const navigation = [
        { name: 'Главная', href: '/', testId: "main-link" },
        { name: 'Избранное', href: '/watchlist', testId: "favorite-link" },
        { name: 'Фильмы', href: '/films', testId: "films-link"},
        { name: 'Сериалы', href: '/tvshows', testId: "tv-link"},
    ]
    
    return {
        genres, options, navigation 
    }
}