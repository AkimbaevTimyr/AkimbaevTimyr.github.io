export function convertMovieType(type: string | null){
    switch(type){
        case 'tv':
            return 'сериал'
        case 'movie':
            return 'фильм'
        default:
            return "—"
    }
}