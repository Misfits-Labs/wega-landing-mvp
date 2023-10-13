type MainPropsContainerProps = { children?: React.ReactNode };
import 'twin.macro';

const MainContainer: React.FC<MainPropsContainerProps> = ({ children, ...rest }: MainPropsContainerProps) => {
  return (
    <main tw="container mt-36 flex flex-col items-center gap-y-[48px] w-full mx-auto bg-white" {...rest}>
      {children}
    </main>
  )
}
export default MainContainer;
