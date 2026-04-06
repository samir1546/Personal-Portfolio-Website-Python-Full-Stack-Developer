const TitleHeader = ({
    title, number
}) => {
    return (
        <div className="flex justify-between items-center p-16">
            <div className="">
                <h1 className="gradient-title font-semibold text-8xl uppercase">{title}</h1>
            </div>
            <div className="md:flex hidden items-center gap-7">
                <div className="w-36 border border-white/50 "></div>
                <p className="gradient-title text-8xl ">{number}</p>
            </div>
        </div>
    )
}

export default TitleHeader