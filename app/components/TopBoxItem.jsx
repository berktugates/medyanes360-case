export default function TopBoxItem({title, value}){
    return (
        <>
            <div className="bg-text-gray rounded-md flex p-1 px-2">
                <h1 className="text-gray-300 font-normal text-xs md:text-base">{title}:</h1>
                <h1 className="text-white font-bold ms-1 text-xs md:text-base">{value}</h1>
            </div>
        </>
    )
}