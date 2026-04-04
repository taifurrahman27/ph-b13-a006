import React from 'react';

const Transform = () => {
    return (
        <div className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20'>
            <div className='container mx-auto text-center space-y-5'>
                <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.
                </p>

                <div className='flex justify-center gap-4'>
                    <div className="btn bg-white rounded-full mt-auto border-none">
                        <button className='bg-clip-text font-bold text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                            Explore Products
                        </button>
                    </div>
                    <button className='btn btn-outline rounded-full px-4 py-2'>
                        View Pricing
                    </button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;