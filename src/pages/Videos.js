import React from "react";
import "../style/Videos.css";
import YoutubeEmbed from "../components/videos/YoutubeEmbed";

export default function Videos() {
  return (
    <div className="App">
      <div className="Videos">
        <div className="title">Canelo's Head Movement Is Out Of This World</div>
        <YoutubeEmbed embedId="bC9zOSHw_DY" />
      </div>
      <div className="Videos">
        <div className="title">Sugar Ray's Footwork Explained</div>
        <YoutubeEmbed embedId="rGdVMyI3uck" />
      </div>
      <div className="Videos">
        <div className="title">Charley Burley: Analyzing Genius</div>
        <YoutubeEmbed embedId="81non05aKX4" />
      </div>
      <div className="Videos">
        <div className="title">Vasyl Lomachenko Breakdown Analysis</div>
        <YoutubeEmbed embedId="9i7jMCr9GTM" />
      </div>
      <div className="Videos">
        <div className="title">Ray Jones Jr: Superman</div>
        <YoutubeEmbed embedId="eJ2nc9fDsQ4" />
      </div>
      <div className="Videos">
        <div className="title">Floyd Mayweather: Master of Adjustments</div>
        <YoutubeEmbed embedId="2LedObTlp_o" />
      </div>
      <div className="Videos">
        <div className="title">Ricardo Lopez's Perfect Boxing Explained</div>
        <YoutubeEmbed embedId="mcxfPIErv24" />
      </div>
      <div className="Videos">
        <div className="title">Advanced Way to Set Traps and Counters</div>
        <YoutubeEmbed embedId="4pEZbGuwr" />
      </div>
      <div className="Videos">
        <div className="title">Easy Defensive Footwork Trick Nobody Showed You</div>
        <YoutubeEmbed embedId="CJKQYAtsmy4" />
      </div>
      <div className="Videos">
        <div className="title">3 Advanced Elbow Blocks in Boxing</div>
        <YoutubeEmbed embedId="fpy9uogrMm0" />
      </div>
    </div>
  );
}