interface IProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: IProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        className="h-3 rounded-xl bg-violet-600 transition-all"
        role="progressbar"
        aria-label="Habits completeds today progress"
        aria-valuenow={progress}
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  )
}