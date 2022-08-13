import dayjs from "dayjs";
import 'dayjs/locale/ru'
dayjs.locale('ru')

export function convertTimestampToDate(date: string | undefined){
    return dayjs(date).format("D MMMM YYYY")
}