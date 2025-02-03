import useAuth from '../../../Provider/useAuth';
import SingleCard from './SingleCard';

const AllCategories = () => {
  const { jobs } = useAuth();
  console.log(jobs);

  return (
    <div>
      <h3 className="text-2xl font-bold text-center">All Jobs Categories</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14 my-20">
        {jobs.map(job => (
          <SingleCard key={job._id} job={job}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
