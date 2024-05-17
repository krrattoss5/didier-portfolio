import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] mb:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h2 className='heading'>
        Education &  <span className='text-yellow-400'>Skills</span>
        </h2>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
          <div>
            <SkillsItem
              title='React Developer'
              year='2023 - 2024'
           />
            <SkillsItem
              title='PERN Stack Developer'
              year='2023 - 2024'
            />
            <SkillsLanguage
              skil1='HTML'
              skil2='CSS'
              skil3='Javascript'
              level1='w-[90%]'
              level2='w-[80%]'
              level3='w-[80%]'
            />
          </div>
          <div>
            <SkillsItem
              title='React Native'
              year='2023 - 2024'
           />
            <SkillsItem
              title='Node Js Developer'
              year='2023 - 2024'
            />
            <SkillsLanguage
              skil1='React Js'
              skil2='Next Js'
              skil3='Typescript'
              level1='w-[90%]'
              level2='w-[80%]'
              level3='w-[80%]'
            />
          </div>
        </div>
    </div>
  )
}

export default Skills