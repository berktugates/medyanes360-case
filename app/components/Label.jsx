export default function Label ({value}){
    return (
        <>
            <div className="bg-sky-700 py-1">
                <h1 className="md:text-xl text-white ms-2">{value}</h1>
            </div>
        </>
    )
}