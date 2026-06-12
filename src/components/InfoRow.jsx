export default function PriceRow({
    service,
    price,
    hours,
    priceClassName = "text-[#EB1616]",
}) {
    return (
        <div className="flex justify-between border-b border-[#6C7293] pb-1">
            <span className="font-semibold">
                {service}
            </span>

            <span className={priceClassName} >
                {price}
            </span>

        </div>
    );
}