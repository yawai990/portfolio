import { HiHome } from 'react-icons/hi';
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { RiContactsFill, RiProjectorFill } from 'react-icons/ri';

const NavLinks = [
    {
        icon: <HiHome />,
        linkName: 'home'
    },
    {
        icon: <GiSkills />,
        linkName: 'skills'
    },
    {
        icon: <RiProjectorFill />,
        linkName: 'Projects'
    },
    {
        icon: <SiAboutdotme />,
        linkName: 'about'
    }, {
        icon: <RiContactsFill />,
        linkName: 'contact'
    }
]

export default NavLinks;
