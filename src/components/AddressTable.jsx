import Link from "next/link";

const AddressTable = ({ addresses }) => {
  return (
    <div className="flex justify-end mr-6 md:mr-12 lg:mr-24">
      {addresses && addresses.length > 0 ? (
        <table className="w-1/2">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="p-3">Address</th>
              <th className="p-3">City</th>
              <th className="p-3">Country</th>
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address, index) => (
              <tr
                className={
                  index % 2 === 0
                    ? "even:bg-gray-100 dark:even:bg-gray-800 odd:bg-white dark:odd:bg-gray-700 border text-xs"
                    : "odd:bg-white dark:odd:bg-gray-700 border text-xs"
                }
                key={index}
              >
                <td className="p-3 border border-slate-400">
                  <Link href="/edit">{address.address}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href="/edit">{address.city}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href="/edit">{address.country}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href="/edit">{address.name}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href="/edit">{address.type}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No addresses found</p>
      )}
    </div>
  );
};

export default AddressTable;
