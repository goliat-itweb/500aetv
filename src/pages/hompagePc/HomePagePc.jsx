import { React, useEffect, useState } from "react";
import MatchPc from "./matchPc/MatchPc";
import CommunityPc from "./communitypc/CommunityPc";
import Banner from "../home/banner/Banner";
import StoryPc from "./storyPc/StoryPc";
import PartnerLivePc from "./partnerlive/PartnerLivePc";
import "./HomePagePc.css";
const HomePagePc = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/rooms/list`
        );
        const result = await response.json();
        const filteredDataCdn = result.rooms
          .filter((match) => match.cdnlink !== "1")
          .sort((a, b) => {
            const dateTimeA = new Date(`${a.date}T${a.time}`);
            const dateTimeB = new Date(`${b.date}T${b.time}`);
            return dateTimeA - dateTimeB;
          });
        setData(filteredDataCdn);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...Homepage</div>;
  }
  if (data) {
    {
      console.log(data);
    }
    if (data.length > 1) {
      return (
        <div className="responsive_hompagePC">
          <MatchPc data={data}></MatchPc>
          <PartnerLivePc></PartnerLivePc>
          <CommunityPc></CommunityPc>
          <StoryPc></StoryPc>
          <Banner></Banner>
        </div>
      );
    } else {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgb(7 18 137 / 22%)" }}
        >
          <div className="responsive_hompagePC">
            <MatchPc data={data}></MatchPc>
            <PartnerLivePc></PartnerLivePc>
            <div className=" d-flex justify-content-center align-items-center">
              <div className="comu-story-container">
                <div className="comu-container">
                  <CommunityPc></CommunityPc>
                </div>
                <div className="story-container">
                  <StoryPc></StoryPc>
                </div>
              </div>
            </div>
            <Banner></Banner>
          </div>
        </div>
      );
    }
  }
};
export default HomePagePc;
