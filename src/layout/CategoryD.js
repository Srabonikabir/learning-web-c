import React from 'react';
import { useParams } from 'react-router-dom';
import Leftsisenav from './Leftsisenav';
import Rightsidenav from './Rightsidenav';
import SummaryCard from './SummaryCard/SummaryCard';



const CategoryD = () => {
    const [dataById, setDataById] = React.useState([])
    let { id } = useParams();
    console.log({ id })
    React.useEffect(() => {
        if (id) {
            // const json =  fetch(`http://localhost:5000/classes/${params.id}`);
            async function getData() {
                const res = await fetch(`http://localhost:5000/category/${id}`);
                const data = await res.json();
                console.log({ res, data })
                setDataById(data || [])
            }
            getData()
        }
    }, [id])



    return (
        <div>
            {/* <h2>jhfytjfjyh: {users.length}</h2> */}
            <div>
                <div className="grid grid-cols-6 gap-4 m-8">

                    <div className="col-start-1 col-end-2 ...">
                        <Leftsisenav />
                    </div>


                    <div className="col-span-3 ...">

                       
                        <h2>THis is dynamic route: {dataById?.length} </h2>
{

dataById.map(classes => <SummaryCard
     key={classes._id}
classes={classes}></SummaryCard>)


}

                    </div>
                    <div className="col-end-7 col-span-2 ...">
                        <Rightsidenav />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default CategoryD;