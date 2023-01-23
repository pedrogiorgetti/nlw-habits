import dayjs from "dayjs";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useReduxDispatch } from "../../../hooks/useReduxDispatch";
import { useReduxSelector } from "../../../hooks/useReduxSelector";
import { habitActions } from "../../../store/slices/habit";
import { ComponentCheckbox } from "../../Checkbox";
import { ComponentIsVisible } from "../../IsVisible";

interface IHabitDayListProps {
  date: Date;
}

export function HabitDayList({ date }: IHabitDayListProps) {
  const reduxDispatch = useReduxDispatch();

  const completedHabits = useReduxSelector(state => state.habit.getAllByDay.list.completedHabits);
  const possibleHabits = useReduxSelector(state => state.habit.getAllByDay.list.possibleHabits);
  const dayHabitsIsLoading = useReduxSelector(state => state.habit.getAllByDay.config.isLoading);
  const dayHabitsEmptyMessage = useReduxSelector(state => state.habit.getAllByDay.config.emptyMessage);
  
  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());

  const handleToggleHabit = (habitId: string) => {
    reduxDispatch(habitActions.toggleRequest({
      habitId,
    }));
  }

  useEffect(() => {
    reduxDispatch(habitActions.getAllByDayRequest({
      date: date.toISOString(),
    }))
  }, [reduxDispatch])

  return (
    <div className="mt-6">  
      <ComponentIsVisible when={!dayHabitsIsLoading}>
        <ComponentIsVisible when={possibleHabits.length > 0}>
          {possibleHabits.map(possibleHabit => (
            <ComponentCheckbox
              key={possibleHabit.id}
              onCheckedChange={() => handleToggleHabit(possibleHabit.id)}
              checked={completedHabits.includes(possibleHabit.id)}
              disabled={isDateInPast}
              title={possibleHabit.title}
              customStyle="text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"
            />
          ))}
        </ComponentIsVisible>
        <ComponentIsVisible when={possibleHabits.length <= 0}>
          <span className="text-base text-zinc-400 font-medium max-w-[180px] flex mx-auto text-center">
            {dayHabitsEmptyMessage}
          </span>
        </ComponentIsVisible>
      </ComponentIsVisible>
      <ComponentIsVisible when={dayHabitsIsLoading}>
        <div className="flex items-center justify-center my-2">
          <HashLoader size={32} color="gray" />
        </div>
      </ComponentIsVisible>
    </div>
  )
}