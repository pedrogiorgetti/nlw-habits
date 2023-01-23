import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface IComponentCheckbox extends Checkbox.CheckboxProps {
  title: string;
  customStyle?: string;
}

export function ComponentCheckbox({ title, customStyle, onCheckedChange, ...rest }: IComponentCheckbox) {
  return (
    <div className="mt-3 flex flex-col gap-3">
      <Checkbox.Root
        className="flex items-center gap-3 group disabled:cursor-not-allowed focus:outline-none"
        onCheckedChange={onCheckedChange}
        {...rest}
      >
        <div
          className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900"
        >
          <Checkbox.Indicator>
            <Check size={20} className="text-white" />
          </Checkbox.Indicator>
        </div>

        <span className={`font-semibold  text-white leading-tight ${customStyle}`}>
          {title}
        </span>
      </Checkbox.Root>
    </div>
  )
}