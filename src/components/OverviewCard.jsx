/* eslint-disable react/prop-types */

import facebookLogo from "../assets/icon-facebook.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import instagramLogo from "../assets/icon-instagram.svg";
import youtubeLogo from "../assets/icon-youtube.svg";
import iconUp from "../assets/icon-up.svg";
import iconDown from "../assets/icon-down.svg";

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
};

const networkColors = {
  Facebook: "bg-Facebook",
  Twitter: "bg-Twitter",
  Instagram: "bg-Instagram",
  YouTube: "bg-YouTube",
}

export const OverviewCard = ({ user, audienceType, audience, network, isUp, today }) => {

  return (
    <article className=" bg-Light-Grayish-Blue w-[326px] h-[216px] mb-7 rounded-[5px] overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className={`${networkColors[network]} h-[4px] mb-8`}></div>
      <div className="flex items-center justify-center gap-2">
        <img src={networkLogos[network]} alt={`logo ${network}`} />
        <p className="text-xs text-Dark-Grayish-Blue font-bold">{user}</p>
      </div>
      <p className=" text-[56px] font-bold text-Very-Dark-Blue dark:text-White">{audience}</p>
      <p className=" uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6">
        {audienceType}
      </p>
      <div className="flex items-center justify-center gap-1">
        <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
        <p
          className={`text-xs font-semibold ${isUp ? "text-Lime-Green" : "text-Bright-Red"}`}
        >
          {today} Today
        </p>
      </div>
    </article>
  );
};

export const OverviewTodayCard = ({ network, statsType, stats, percentage, isUp }) => {
  
  return (
    <article className=" bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className="flex items-center justify-between">
        <p className=" text-Dark-Grayish-Blue font-bold">{statsType}</p>
        <img src={networkLogos[network]} alt="" />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[42px] font-bold text-Very-Dark-Blue dark:text-White">{stats}</p>
        <div className="flex items-center justify-center gap-1">
          <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
          <p
            className={`text-xs font-semibold ${
              isUp ? "text-Lime-Green" : "text-Bright-Red"
            }`}
          >
            {percentage}%
          </p>
        </div>
      </div>
    </article>
  );
};