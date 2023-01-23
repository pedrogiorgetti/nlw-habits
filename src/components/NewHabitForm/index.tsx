import { Check } from "phosphor-react";
import { FormEvent, useCallback, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useReduxDispatch } from "../../hooks/useReduxDispatch";
import { useReduxSelector } from "../../hooks/useReduxSelector";
import { habitActions } from "../../store/slices/habit";
import { ComponentCheckbox } from "../Checkbox";
import { ComponentIsVisible } from "../IsVisible";

const availableWeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export function NewHabitForm() {
  const reduxDispatch = useReduxDispatch();

  const createIsLoading = useReduxSelector(state => state.habit.create.config.isLoading);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectWeekDay = (weekDaySelected: number) => {
    if (weekDays.includes(weekDaySelected)) {
      const newWeekDays = weekDays.filter(weekDay => weekDay !== weekDaySelected);

      setWeekDays(newWeekDays);
    } else {
      setWeekDays(currentWeekDays => [...currentWeekDays, weekDaySelected])
    }
  }


  const handleCreateNewHabit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputRef.current?.value.trim() || weekDays.length === 0) {
      setErrorMessage('Please insert the habit name and unless one week day');
      return
    }
    
    reduxDispatch(habitActions.createRequest({
      title: inputRef.current?.value as string,
      weekDays, 
    }));

    
    inputRef.current.value = '';
    setWeekDays([]);
    setErrorMessage('');
  }

  return (
    <form onSubmit={handleCreateNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold text-lg leading-tight text-white">
        What is your commitment?
      </label>

      <input
        type="text"
        id="title"
        autoFocus
        placeholder="Exercise, sleep well, drink water"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        ref={inputRef}
      />

      <label htmlFor=""  className="font-semibold  text-lg leading-tight text-white mt-6">
        What is the recurrence?
      </label>

      {availableWeekDays.map((weekDay, index) => (
        <ComponentCheckbox
          key={weekDay}
          title={weekDay}
          customStyle="text-base"
          onCheckedChange={() => handleSelectWeekDay(index)}
        />
      ))}
      <ComponentIsVisible when={!!errorMessage}>
        <span className="mt-4 mx-auto text-red-500 text-sm text-center max-w-[250px]">
          {errorMessage}
        </span>
      </ComponentIsVisible>


      <button
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background"
        type="submit"
      >
        <ComponentIsVisible when={!createIsLoading}>
          <Check size={20} weight="bold" />
          Confirm
        </ComponentIsVisible>
        <ComponentIsVisible when={createIsLoading}>
          <ClipLoader size={20} color="text-white" />
        </ComponentIsVisible>
      </button>
    </form>
  )
}