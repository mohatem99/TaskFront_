import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from '@headlessui/react'

export default function Settings() {
  return (
    <Popover className="relative ">
      <PopoverButton>Solutions</PopoverButton>
      <PopoverBackdrop className="fixed inset-0  m-3" />
      <PopoverPanel anchor="bottom" className="flex flex-col bg-white border rounded-lg">
        <a href="/analytics" className='p-3 '>Analytics</a>
        <a href="/engagement" className='p-3 '>Engagement</a>
        <a href="/security" className='p-3 '>Security</a>
        <a href="/integrations" className='p-3 '>Integrations</a>
      </PopoverPanel>
    </Popover>
  )
}


