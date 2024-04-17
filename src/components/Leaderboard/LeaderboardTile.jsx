const LeaderboardTile = ({ image, name, point, color }) => {
    return (
        <div className="flex justify-between items-center size-72 p-5 mb-5 relative">
            <div className="flex items-center">
                <img src={image} alt="profile" className="size-24" />
            </div>
            <div className={`absolute backdrop-blur-[1px] size-64 left-2 z-20 flex justify-center items-center`}>
                <p className={`text-md bg-${color} text-black`} >{name}</p>
            </div>
            <p className="text-lg">{point}</p>
        </div>
    )
};

export default LeaderboardTile;