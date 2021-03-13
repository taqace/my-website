import React, {useState,useEffect} from 'react';

const Age = () => {
    const [age,setAge] = useState();

    const tick = () => {
        const divisor = 1000*60*60*24*365.2421897;
        const birthTime = new Date('1987-09-06T09:24:00');
        setAge(((Date.now() - birthTime) / divisor).toFixed(11));
    };

    useEffect(() => {
        const timer = setInterval(() => tick(),25);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <>{age}</>;
};

const data = [
    {
        key: 'age',
        label: 'Current age',
        value: <Age/>,
    },
    {
        key:'states',
        label: 'States visited',
        value: 22,
        link:
            'https://www.amcharts.com/visited_states/#US-CA,US-CO,US-FL,US-ID,US-IL,US-IN,US-MD,US-MN,US-MT,US-NJ,US-NV,US-NY,US-OH,US-OR,US-PA,US-SD,US-TN,US-UT,US-VA,US-WA,US-WI,US-WY'
    },
    {
        key:'countries',
        label: 'Countries visited',
        value: 3,
        link:
            'https://www.amcharts.com/visited_countries/#CA,MX,US'
    },
    {
        key: 'location',
        label: 'Current city',
        value: 'New York, NY',
    },
];

export default data;