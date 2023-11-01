type MainPropsContainerProps = { children?: React.ReactNode };
import 'twin.macro';

const MainContainer: React.FC<MainPropsContainerProps> = ({ children, ...rest }: MainPropsContainerProps) => {
  return (
    <main tw="container mt-36 flex flex-col items-center w-full mx-auto lg:px-[unset]" {...rest}>
      {children}
    </main>
  )
}
export default MainContainer;
