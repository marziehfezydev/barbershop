export default function BarberCard({
    image,
    name,
    role,
}) {
    return (
        <div className="overflow-hidden bg-[#191C24] text-center text-white transition duration-300 hover:-translate-y-2">
            <img
                src={image}
                alt={name}
                className="h-96 w-full object-cover"
            />

            <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                    {name}
                </h3>

                <p className="text-sm font-semibold text-[#EB1616]">
                    {role}
                </p>
            </div>
        </div>
    );
}