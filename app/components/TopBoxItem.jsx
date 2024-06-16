export default function TopBoxItem({title, value}){
    const getColorClass = (value) =>{
        switch(value){
            case 'Başarısız':
                return 'text-red-500'
            case 'Tamamlandı':
                return 'text-green-500'
            case 'Beklemede':
                return 'text-yellow-500'
            case 'Hazırlanıyor':
                return 'text-orange-500'
        }
    }
    return (
        <>
            <div className="rounded-md flex border p-1 px-2 md:flex-wrap md:px-0 md:justify-center md:items-center">
                <h1 className="text-black font-bold text-xs">{title}:</h1>
                <h1 className={`font-bold text-xs ${getColorClass(value)}`}>{value}</h1>
            </div>
        </>
    )
}