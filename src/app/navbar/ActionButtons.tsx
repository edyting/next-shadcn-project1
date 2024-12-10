import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { LuAlignJustify } from "react-icons/lu";
import Link from 'next/link';

import React from 'react'

const ActionButton = () => {
  return (
    <div>
      {/* small screen menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                  <div className="flex flex-col mt-10 space-y-4 text-black items-start w-full text-lg">
                    <Link href='/'>
                    Sign IN
                    </Link>
                    <Link href='/'>
                    Get Started
                    </Link>
                    <Link href='/'>
                    Pricing
                    </Link>
                    <Link href='/'>
                    Features
                    </Link>
                    <Link href='/'>
                    Contact
                    </Link>
                    <Link href='/'>
                    About
                    </Link>
                  </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
      {/* top buttons */}

      <div className="hidden md:flex space-x-4">
          <Button variant='ghost' className='text-md ' >
            Sign in
          </Button>
          <Button variant='ghost' className='text-md bg-blue-500 ' >
            Get Started
          </Button>
        </div>
    </div>
  )
}

export default ActionButton
