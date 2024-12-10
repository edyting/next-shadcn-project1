import * as React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from './Logo';


const components :{title:string,description:string}[] =[
  {
    title:"new",
    description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque reprehenderit fuga repellendus? Necessitatibus excepturi maxime quasi beatae, culpa commodi mollitia at, repellat quis vel id porro eligendi, dolorum neque."
  },
  {
    title:"new1",
    description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque reprehenderit fuga repellendus? Necessitatibus excepturi maxime quasi beatae, culpa commodi mollitia at, repellat quis vel id porro eligendi, dolorum neque."
  },
  {
    title:"new2",
    description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque reprehenderit fuga repellendus? Necessitatibus excepturi maxime quasi beatae, culpa commodi mollitia at, repellat quis vel id porro eligendi, dolorum neque."
  },
  {
    title:"new3",
    description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque reprehenderit fuga repellendus? Necessitatibus excepturi maxime quasi beatae, culpa commodi mollitia at, repellat quis vel id porro eligendi, dolorum neque."
  },
  {
    title:"new4",
    description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque reprehenderit fuga repellendus? Necessitatibus excepturi maxime quasi beatae, culpa commodi mollitia at, repellat quis vel id porro eligendi, dolorum neque."
  },
  {
    title:"new5",
    description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque reprehenderit fuga repellendus? Necessitatibus excepturi maxime quasi beatae, culpa commodi mollitia at, repellat quis vel id porro eligendi, dolorum neque."
  },
  {
    title:"new6",
    description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque reprehenderit fuga repellendus? Necessitatibus excepturi maxime quasi beatae, culpa commodi mollitia<NavigationMenuLink>Link</NavigationMenuLink> at, repellat quis vel id porro eligendi, dolorum neque."
  },
]


const Navbarlinks = () => {
  return (
    <div>
       <NavigationMenu>
      <NavigationMenuList className='hidden md:flex md:space-x-4'>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Logoipsum by Edyting
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      E-commerce with costumers getting the value of their money in mind. 
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem  title="Introduction">
                Our introductory page gives you an overview if what we do here at logoipsum
              </ListItem>
              <ListItem  title="Get to know more about us">
                Interested in getting to know more about us and what we stand for?
              </ListItem>
              <ListItem  title="Need support?">
                Do you need help in ordering your product? Get in-touch with our customer service.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* make new drop down */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  // href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* make new navigation menu */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      {/* new */}
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      
      {/* new */}
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Products
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
     
    </div>
  )
}

export default Navbarlinks


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"