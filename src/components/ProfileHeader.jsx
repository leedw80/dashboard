export default function ProfileHeader({ name, bio, photo }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-6">
      <img
        src={photo.startsWith('http') ? photo : `${import.meta.env.BASE_URL}${photo.replace(/^\//, '')}`}
        alt={name}
        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
      />
      <div className="flex flex-col items-center gap-2 px-2">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{name}</h1>
        <p className="text-sm text-gray-500 text-center leading-relaxed max-w-xs">{bio}</p>
      </div>
    </div>
  )
}
