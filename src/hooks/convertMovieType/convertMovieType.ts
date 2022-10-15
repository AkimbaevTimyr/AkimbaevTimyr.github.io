export function convertMovieType(type: string | undefined | null){
    switch(type){
        case 'tv':
            return 'сериал'
        case 'movie':
            return 'фильм'
        default:
            return "—"
    }
}