
interface SocialMediaCardProps {
    username: string;
    socialMedia: React.ElementType;
    url: string;
}

export default function SocialMediaCard( {socialMedia : Icon, username, url}: SocialMediaCardProps ) {
    return (
        <div>
            <a className=" bg-[#22222274] px-2 py-1 mt-1 rounded-2xl flex items-center hover:border-1 hover:bg-[#333333] transition-normal duration-300 hover:text-[.7rem] ease-in-out gap-2" href={url}>
                <Icon className=" w-3 h-3 text-[#c4c4c4] hover:text-white cursor-pointer" />
                @{username}</a>
        </div>
    )
}