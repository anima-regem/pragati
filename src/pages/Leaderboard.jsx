import LeaderboardComponent from "../components/Leaderboard/LeaderboardComponent";

const Leaderboard = () => {


    return (
        <div className=" h-full bg-black registration__page d-flex pt-28">
        <div className="registration__form d-flex flex-column justify-content-center align-items-center pt-5">
          <LeaderboardComponent />
        </div>
      </div>
    )
}

export default Leaderboard;