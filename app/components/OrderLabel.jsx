export default function OrderLabel({name, value}){
    return (
        <>
            <div className="flex items-center mb-1 ">
                <div className="bg-sky-700 rounded-r-md w-36">
                    <h1 className="text-sm md:text-lg text-white p-1 ms-2 text-left">{name}:</h1>
                </div>
                <div className="ms-4">
                    <h1 className="text-sm md:text-base font-medium text-text-gray">{value}</h1>
                    
                </div>
            </div>
        </>
    )
}