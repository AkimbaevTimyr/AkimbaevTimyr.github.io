export function convertMovieType(type: string | undefined){
    switch(type){
        case 'tv':
            return 'сериал'
        case 'movie':
            return 'фильм'
        default:
            return "—"
    }
}