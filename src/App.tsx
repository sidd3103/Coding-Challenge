// import axios from "axios";
// import { useState, useEffect } from "react";
import { useEffect } from "react";
import data from "../data.json";
import homes from "../homes.json";
import CommunityCard from "./components/CommunityCard";
import { Community } from "./types/Community";

const avgPrice = (community: Community) => {
  let homesInCommunity = homes.filter((h) => h.communityId == community.id);
  let sum = 0;
  homesInCommunity.forEach((h) => (sum += h.price));
  return sum / homesInCommunity.length;
};

function App() {
  // useEffect(() => {
  //   data.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  // }, []);

  data.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  // useEffect(() => {
  //   const fetch = async () => {
  //     let config = {
  //       method: "get",
  //       maxBodyLength: Infinity,
  //       url: "https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json",
  //       headers: {},
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(JSON.stringify(response.data));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };
  //   fetch();
  // }, []);

  return (
    <div className="bg-yellow-50">
      <div>
        <p className="text-3xl text-center">Welcome to Calgary</p>
        <p className="my-4">
          Calgary, a vibrant city nestled in the heart of Alberta, boasts a
          diverse tapestry of communities, each with its own unique charm.
          Bowness, situated along the picturesque Bow River, offers a blend of
          natural beauty and a close-knit community spirit. Varsity, home to the
          University of Calgary, combines academic energy with residential
          tranquility. These neighborhoods exemplify the city's commitment to
          providing residents with a high quality of life, featuring parks,
          schools, and a rich array of amenities. From the bustling streets of
          downtown to the peaceful streets of Bowness and the academic hub of
          Varsity, Calgary's communities invite residents and visitors alike to
          experience a truly enriching urban lifestyle.
        </p>
      </div>
      <div className="flex flex-col items-center ">
        {data.map((c) => (
          <CommunityCard community={c} avgPrice={avgPrice(c)} />
        ))}
      </div>
    </div>
  );
}

export default App;
