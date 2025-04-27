'use client';
import { Avatar, Image, Card, CardHeader, CardBody, } from "@heroui/react";
import { CldImage } from 'next-cloudinary';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar */}
      <div className="sidenav">
        <Avatar src="https://heroui.com/images/fruit-1.jpeg" 
        className="w-20 h-20"
        />

        <div className="break-all p-2">
          <p>
          I am ______________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          </p>
        </div>
    </div>

      {/* Main content */}
      <div className="main-content">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <CldImage
            width="500"
            height="500"
            src="IMG_20250427_145318_vjtnsw"
            crop="fill"
            removeBackground
            underlay="IMG_20250427_145318_vjtnsw"
            sizes="100vw"
            alt="Description of my image"
          />
      </CardBody>
    </Card>
      </div>

    </div>
  );
}
