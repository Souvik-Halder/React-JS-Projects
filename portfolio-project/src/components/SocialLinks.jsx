import React, { Children } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
function SocialLinks() {
    const links=[
       { id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30}/> 
            </>
        ),
        href: 'https://www.linkedin.com/in/souvik-halder-107618209',
        style:'rounded-tr-md'
    },
    { id:2,
        child:(
            <>
            Github <FaGithub size={30}/> 
            </>
        ),
        href: 'https://github.com/Souvik-Halder',
        style:''
    },
    { id:3,
        child:(
            <>
            Mail <HiOutlineMail size={30}/> 
            </>
        ),
        href: 'https://gmail.com',
        style:''
    },
    { id:4,
        child:(
            <>
            Resume <BsFillPersonLinesFill size={30}/> 
            </>
        ),
        href: '/Souvik-Halder-Resume.pdf',
        style:'',
        download:true
    }
    ]
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>

    {
        links.map(({id,child,href,style,download})=>(
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-gray-500 hover:rounded-md duration-300 " +" "+style} >
            <a rel="noreferrer" href={href} className="flex justify-between items-center w-full text-white"
            target="_blank"
            download={download}>
             {child}
            </a>
          </li>
        ))
    }


      
      </ul>
    </div>
  );
}

export default SocialLinks;
