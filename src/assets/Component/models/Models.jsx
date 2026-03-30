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

            <div className='container mx-auto grid grid-cols-3 gap-3 mt-15'>
                {modelData.map(model => <ModelsCard key={model.id} model={model}></ModelsCard>)}
            </div>

        </div>
    );
};

export default Models;