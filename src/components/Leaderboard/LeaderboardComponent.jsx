import { useEffect, useState } from "react";
import "./LeaderboardComponent.css";
const LeaderboardComponent = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      setIsLoading(true);
      const url = "https://script.google.com/macros/s/AKfycbwSyzqogYuGSdz-2LxI-qKnT8VNTix98URC3Su0YCKrMnB3pK-pd6ciyKRUlCTS20_JyQ/exec?type=point";
      // fetch with GET method and body parameter type=point
      const response = await fetch(url);
      const data = await response.json();
      let leaderboardContent = data["message"];
      //sort the content
      let sortedLeaderboardContent = leaderboardContent.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => b.point - a.point);
      setLeaderboard(sortedLeaderboardContent);
      setIsLoading(false);
      console.log(data)
    } catch (error) {
      console.log("Error fetching leaderboard: ", error);
    }
  }
  return (
    <>
      <div className="w-full h-screen main relative">
        {/* <img src={bg}  alt="" className="" /> */}
        <div className="w-full h-1/ flex justify-center items-center">
          <h1 className="text-4xl text-white font-black pb-10">Leaderboard</h1>
        </div>

        <div className="w-full flex flex-col justify-center items-center">

          {
            isLoading && <span className="loading loading-dots loading-lg"></span>
          }


          {
            !isLoading &&
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  {/* <th>Profile</th> */}
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody >
                {
                  leaderboard.map((leader, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* <td><img src={image1} alt="profile" className="size-24" /></td> */}
                      <td>{leader.name}</td>
                      <td>{leader.point}</td>
                    </tr>
                  ))
                }
              </tbody>

            </table>}
        </div>

      </div>
    </>
  );
}

export default LeaderboardComponent;