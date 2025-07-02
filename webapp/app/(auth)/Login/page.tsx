'use client';

import { title } from "@/components/primitives";
import {Card, CardFooter, Image, Button, Input} from "@heroui/react";
import { useEffect, useState } from "react";

export default function LoginPage() {
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => { // renders once the component is mounted                  
    setMounted(true); // This is to avoid hydration errors in Next.js
  }, []);

  if (!mounted) return null;
  
  return (
    <div>
      <h1 className={title()}>Login</h1>
    <Card isFooterBlurred className="border-none w-full" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src="https://heroui.com/images/hero-card.jpeg"
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input label="Email" size="md" type="email" />
          <Input label="Password" size="md" type="password" />
        </div>
      </CardFooter>
    </Card>
    </div>
  );
}
