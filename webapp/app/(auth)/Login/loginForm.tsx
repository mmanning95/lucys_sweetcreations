"use client";

import { Card, CardFooter, Input } from "@heroui/react";
import { CldImage } from "next-cloudinary";
import { useFormStatus } from "react-dom";

export function LoginForm() {

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <Card isFooterBlurred  className="border-none " radius="lg">
        <CldImage
          src="IMG_20250427_145318_vjtnsw"
          alt="Description of my image"
          width={500}
          height={500}
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

