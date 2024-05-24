export default function Label ({value}){
    return (
        <>
            <div className="bg-text-gray py-1">
                <h1 className="md:text-2xl text-white ms-2">{value}</h1>
            </div>
        </>
    )
}