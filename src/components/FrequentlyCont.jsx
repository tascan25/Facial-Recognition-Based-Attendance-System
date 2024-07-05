import React from 'react'
import FrequentlyAskedCont from './FrequentlyAskedCont'
function FrequentlyCont() {
  return (
    <div className='flex flex-col gap-4 max-w-fit max-h-fit mx-auto mt-10 '>
        <span className='text-zinc-200 text-xl font-font_pops'>Frequently Asked Question</span>
        <div className='max-w-[80vw] max-h-[60vh] p-2 rounded-md border-0 border-slate-800 mt-5 overflow-y-scroll
            flex flex-col justify-start gap-8'>
            <FrequentlyAskedCont title={"How to use this Model"} cont={"Go to the home tab, through navbar or footer and click on launch model"}/>
            <FrequentlyAskedCont title={"How this model works"} cont={"Go to the About tab, through navbar or footer and check all the points"}/>
            <FrequentlyAskedCont title={"What this model is used for"} cont={"This model is used for marking attendance of students via facial recogniton, for more details plesse check out the about tab"}/>
        </div>
    </div>
  )
}

export default FrequentlyCont
