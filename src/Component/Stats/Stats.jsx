import { PiLineVerticalThin } from 'react-icons/pi';

const Stats = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15 my-15 text-white'>
            <div className='container mx-auto flex justify-between items-center text-center'>
                <div>
                    <h2 className='text-6xl font-extrabold'>50K+</h2>
                    <p>Active Users</p>
                </div>
                <PiLineVerticalThin className='text-6xl' />
                <div>
                    <h2 className='text-6xl font-extrabold'>200+</h2>
                    <p>Premium Tools</p>
                </div>
                <PiLineVerticalThin className='text-6xl' />
                <div>
                    <h2 className='text-6xl font-extrabold'>4.9</h2>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;