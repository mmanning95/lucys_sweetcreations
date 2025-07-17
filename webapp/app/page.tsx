'use client';

import { Sidebar } from "@/components/sidebar";
import { Avatar, Image, Card, CardHeader, CardBody,Divider, } from "@heroui/react";
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from "react";


type Cake = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category?: string;
  price: number;
  available: boolean;
};

export default function Home() {

  const [cakes, setCakes] = useState<Cake[]>([]);
  useEffect(() => {
    async function fetchCakes() {
      const res = await fetch('/api/cakes', { cache: 'no-store' });

      if (!res.ok) {
        console.error('Failed to fetch cakes:');
        return;
      }

      const data = await res.json();
      setCakes(data);
    }

    fetchCakes();
  }, []);





  return (
    <div className="flex flex-col md:flex-row w-full bg-pink-100">
      {/* Main content */}
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 w-full">
      {cakes.map((cake) => (
    <Card key={cake.id} className="p-4 mt-5 w-full"
        shadow="md"
        radius="lg">
          
      <CardHeader className="flex flex-col items-start">
        <h2 className="text-lg font-bold">{cake.name}</h2>
        <p className="text-gray-500">{cake.category ?? 'Uncategorized'}</p>
      </CardHeader>
      <CardBody>
        <div className="w-full h-80 relative overflow-hidden rounded">
         <CldImage
            fill
            className="object-cover"
            src={cake.imageUrl}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>

        <p className="mt-2">{cake.description}</p>
        <Divider className="bg-pink-400"/>
        {/* <div className="bg-pink-100 p-4 rounded-b-lg"> */}
        <p className="mt-2 font-bold">${cake.price.toFixed(2)}</p>
        <p className="mt-1 text-sm text-green-600">
          {cake.available ? 'Available' : 'Sold Out'}
        </p>
        {/* </div> */}
      </CardBody>
    </Card>

  ))}
      </div>
    </div>
  );
}
