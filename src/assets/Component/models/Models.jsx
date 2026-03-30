import React, { use } from 'react';
import ModelsCard from '../modelsCard/ModelsCard';

const Models = ({modelPromise}) => {
    console.log(modelPromise);
    const modelData = use(modelPromise)
    console.log(modelData);
    return (
        <div className='py-20'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity.</p>
            </div>

         {/* card ar jonno map korlam akhane  */}
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15 px-4'>
                {modelData.map(model => <ModelsCard key={model.id} model={model}></ModelsCard>)}
            </div>

        </div>
    );
};

export default Models;