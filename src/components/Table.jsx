function Table(props) {
    const {list, deletewa, onEditwa} = props;
  return (
    <div className="flex flex-wrap justify-center mt-8">
      <div className="overflow-y-auto h-80">
        <table className="table-fixed w-[700px] border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 sticky top-0">
              <th className="border border-gray-300 px-4 py-2 w-[500px]">
                {" "}
                {/* Larger width for the first column */}
                Task
              </th>
              <th className="border border-gray-300 px-4 py-2 w-1/5">
                {" "}
                {/* Smaller width for the second column */}
                
              </th>
              <th className="border border-gray-300 px-4 py-2 w-1/5">
                {" "}
                {/* Smaller width for the third column */}
                
              </th>
            </tr>
          </thead>
          <tbody>
          {list.map((task, index) => (
            <tr key = {index}>
              <td className="border border-gray-300 px-4 py-2">
                {task}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="border border-black ml-3 rounded-md p-3 bg-[#FFB0B0] "
                onClick={()=>onEditwa(index)}>Edit</button>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="border border-black  rounded-md p-3 bg-[#FFB0B0] "
                onClick={()=>deletewa(index)}>Delete</button>
              </td>
            </tr>
          ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
