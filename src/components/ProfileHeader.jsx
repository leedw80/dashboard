export default function ProfileHeader({ name, bio, photo }) {
  return (
    <div className="flex flex-col items-center gap-3 py-8">
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
      />
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-500 text-center">{bio}</p>
    </div>
  )
}
