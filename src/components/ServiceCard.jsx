export default function ServiceCard({
    icon,
    title,
    description,
    price,
}) {
    return (
        <div className="relative flex flex-row gap-0.5 overflow-hidden bg-[#191C24] max-w-96 p-10 mb-2 ps-0">

            <div
                className="bg-black flex items-center justify-center"
                style={{ width: "60px", height: "60px" }}
            >
                <img src={icon} alt={title} />
            </div>

            <div className="flex flex-col gap-3 pt-0 pl-8">
                <h3 className="uppercase text-lg sm:text-2xl font-bold">
                    {title}
                </h3>

                <p className="color text-[16px]">
                    {description}
                </p>

                <span className="uppercase text-sm sm:text-lg text-[#EB1616]">
                    From ${price}
                </span>
            </div>
        </div>
    );
}