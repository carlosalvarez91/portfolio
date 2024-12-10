


import { ClassValue } from 'clsx'
import { cn } from '../utils'
import Modal from './Modal'
import { useState } from 'react'


export type ProjectType = {
  className?: ClassValue
  imgUrl: string
  title: string
  description: string | React.ReactNode
  technologies: string[]
  deployUrl: string
  githubUrl: string
}

export default function Project({ className, imgUrl = 'https://placehold.co/600x400', title, description, technologies, deployUrl, githubUrl}: ProjectType) {
    const  [isProjectModalActive, setIsProjectModalActive] = useState(false)
    return (
        <>
        <div className={cn(
            'fnot-prose w-full relative border-2 mb-5 border-border bg-white shadow-light  cursor-pointer',
            className
        )}
        onClick={()=>setIsProjectModalActive(true)} 
        >
            <div
            className='w-full h-40 bg-center bg-no-repeat bg-cover border-b-2 border-black'
            style={{
                backgroundImage: `url(${imgUrl})`
            }}
            />

            <div className='p-4 text-steel-800 flex flex-col gap-2'>
                <h1 className='text-lg font-bold'>{title}</h1>
                <p className='text-sm'>{description}</p>
                <div className='text-sm font-semibold'>
                    <span className='mr-1'>Tech:</span>
                    {technologies.join(', ')}
                </div>
                <div className='flex gap-2'>
                    {deployUrl && <a className='underline font-heading' href={deployUrl} target='_blank' rel='noreferrer'>Deployed</a>}
                    {githubUrl && <a className='underline font-heading' href={githubUrl} target='_blank' rel='noreferrer'>Github</a>}
                </div>
            </div>
        </div>
        <Modal active={isProjectModalActive} setActive={setIsProjectModalActive}>
            <img src={imgUrl} alt={title} />
        </Modal>
        </>
    )
}