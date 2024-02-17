import React from 'react'

type Props = {}

const CorporateContact = (props: Props) => {
  return (
    <>
    

<section>
 
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
 
    <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
    
      <div className="flex max-w-2xl flex-col items-start">
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">Let{`'`}s build something exciting together!</h2>
        <p className="mb-6 max-w-lg pb-4 text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
        <p className="mb-8 max-w-lg text-[#647084]">Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis</p>
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png" alt="" className="mr-4 inline-block h-16 w-16 object-cover" />
          <div className="flex flex-col">
            <h6 className="font-bold">Laila Bahar</h6>
            <p className="text-sm text-[#636262]">Designer</p>
          </div>
        </div>
      </div>
     
      <div className="mx-auto max-w-xl bg-[#f2f2f7] p-8 text-center">
      
        <h3 className="text-2xl dark:text-[#1e1d1d] font-bold md:text-3xl">Get a free quote</h3>
        <p className="mx-auto mb-6 mt-4 max-w-md text-sm text-[#647084]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
       
        <form className="mx-auto mb-4 max-w-sm text-left" name="wf-form-password" method="get">
          <div className="mb-4 flex flex-col gap-y-2">
            <label htmlFor="name-2"  className="mb-1 dark:text-[#1e1d1d] font-medium">Your Name</label>
            <input type="text" className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]" placeholder="" />
          </div>
          <div className="mb-4 flex flex-col gap-y-2">
            <label htmlFor="name-2" className="mb-1 dark:text-[#1e1d1d]  font-medium">Email Address</label>
            <input type="text" className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]" placeholder="" />
          </div>
          <div className="mb-8 flex flex-col gap-y-2">
            <label htmlFor="field-3" className="mb-1 dark:text-[#1e1d1d]  font-medium">Project Brief</label>
            <textarea placeholder="" className="h-auto min-h-[186px] w-full overflow-auto bg-white px-3 py-2 text-sm text-[#333333]"> </textarea>
          </div>
          <input type="submit" value="Get free quote" className="inline-block w-full cursor-pointer bg-[#276ef1] px-6 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]" />
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default CorporateContact