export default function TopBoxItem({title, value}){
    return (
        <>
            <div className="bg-text-gray rounded-md flex p-1 px-2 md:flex-wrap md:px-0 md:justify-center md:items-center">
                <h1 className="text-gray-300 font-normal text-xs text-center">{title}:</h1>
                <h1 className="text-white font-bold ms-1 text-xs">{value}</h1>
            </div>
        </>
    )
}