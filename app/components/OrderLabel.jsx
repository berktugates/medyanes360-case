export default function OrderLabel({name, value}){
    return (
        <>
            <div className="flex items-center mb-1 ">
                <div className="bg-text-gray rounded-r-md w-36">
                    <h1 className="md:text-xl text-white p-1 ms-2 text-right">{name}:</h1>
                </div>
                <div className="ms-4">
                    <h1 className="font-medium text-text-gray">{value}</h1>
                    
                </div>
            </div>
        </>
    )
}