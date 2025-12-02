import { Github, Linkedin } from 'lucide-react'
import SocialMediaCard from './ui/social-media-card'

const linkedInLink = 'https://www.linkedin.com/in/lucio-p%C3%A9rez-0a0047234/'
const githubLink = 'https://github.com/lucioperez01'

export default function Footer() {
    return(
        <footer className="p-2 gap-1 flex flex-col items-center justify-center text-center text-[#c4c4c4] z-10">
            <p className=" text-[0.7rem]">© 2025 Lyric Finder APP. Todos los derechos reservados.</p>
            <div className="flex ">
            <a href="#" className="text-[0.7rem]">Política de privacidad</a>
            <a href="#" className="text-[0.7rem]">Términos de servicio</a>
            </div>

            <div>
                <div className= 'text-[0.6rem] flex items-center justify-center text-center gap-2'>
                    <SocialMediaCard socialMedia ={Github} username="lucioperez01" url={githubLink} />
                    
                    <SocialMediaCard socialMedia ={Linkedin} username="lucio-pérez" url={linkedInLink} />
                </div>
            </div>
        </footer>
    )
}
