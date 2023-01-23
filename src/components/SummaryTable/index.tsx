import dayjs from "dayjs";
import { useEffect } from "react";
import { useReduxDispatch } from "../../hooks/useReduxDispatch";
import { useReduxSelector } from "../../hooks/useReduxSelector";
import { habitActions } from "../../store/slices/habit";
import { utils } from "../../utils";
import { HabitDay } from "../HabitDay";
import { ComponentIsVisible } from "../IsVisible";

const weekDays = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S',
];

const summaryDates = utils.generateDateFromYearBeginning();
const minimumSummaryDatesSize = 18 * 7;
const amountDatesToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  const reduxDispatch = useReduxDispatch();

  const habitsList = useReduxSelector(state => state.habit.getAll.list);

  useEffect(() => {
    reduxDispatch(habitActions.getAllRequest())
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => (
          <div
            key={`${weekDay} - ${index}`} 
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <ComponentIsVisible when={summaryDates.length > 0}>
          {summaryDates.map(summaryDate => {
            const dayInSummary = habitsList.find(summaryHabit => {
              return dayjs(summaryDate).isSame(summaryHabit.date, 'day')
            })

            return (
              <HabitDay
                key={summaryDate.toString()}
                amount={dayInSummary?.amount}
                completed={dayInSummary?.completed}
                date={summaryDate}
              />
            )
          })}
        </ComponentIsVisible>

        {amountDatesToFill > 0 && Array.from({length: amountDatesToFill}).map((_, index) => (
          <div 
            key={index}
            className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
          />
        ))}
      </div>
    </div>
  )
}