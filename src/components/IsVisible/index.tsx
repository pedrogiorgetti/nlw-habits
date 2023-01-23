
interface IComponentIsVisibleProps {
  when: boolean;
  children: React.ReactNode;
}

export function ComponentIsVisible({
  children,
  when
}: IComponentIsVisibleProps){
  
  return <>{when && children}</>
}


