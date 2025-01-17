import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h2>
      <p className="text-gray-600">Username: {username}</p>
      <p className="text-gray-600">Email: {email}</p>
      <div className="my-4">
        <p className="text-gray-600">Address:</p>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: <a href={`https://${website}`} className="text-blue-500 hover:underline">{website}</a></p>
      <div className="my-4">
        <p className="text-gray-600">Company: {company.name}</p>
        <p className="text-gray-600">Catchphrase: {company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
