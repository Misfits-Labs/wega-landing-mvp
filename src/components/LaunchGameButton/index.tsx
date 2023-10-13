import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const LaunchButton = () => {
    return (
        <div tw='flex items-center justify-center'>
            <button tw='w-[120px] bg-oranjo p-2 cursor-pointer text-black font-bold rounded-md'><Link to='https://wega.fun'>Play Beta</Link></button>
        </div>
    )
}
//URL to be changed to deployed game url later.
export default LaunchButton;