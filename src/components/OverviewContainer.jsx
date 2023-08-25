import { OverviewCard, OverviewTodayCard } from "./OverviewCard";
import data from '../../data/data.json'

const convertNumberToK = (number) =>{
  if (number >= 10000) {
    number = number / 1000
    return number + 'k'
  }
  return number
}

// console.log(data.overview)
export const OverviewContainer = () => {

  return (
    <section className="max-w-[1440px] flex flex-wrap gap-8 place-content-center absolute top-[191px] left-0 right-0 mx-auto">
      {data.overview.map((object) => (
        <OverviewCard
          key={object.id}
          network={object.network}
          user={object.user}
          audience={convertNumberToK(object.audience)}
          audienceType={object.audienceType}
          isUp={object.isUp}
          today={object.today}
        />
      ))}
    </section>
  );
}

// console.log(data['overview-today'])
export const OverviewTodayContainer = () => {

  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8">Overview - Today</h2>
      <div className="flex flex-wrap">
        {
          data['overview-today'].map(object =>
            <OverviewTodayCard
              key={object.id}
              network={object.network}
              statsType={object.statsType}
              stats={convertNumberToK(object.stats)}
              percentage={object.percentage}
              isUp={object.isUp}
            />
          )
        }
      </div>
    </section>
  )
}