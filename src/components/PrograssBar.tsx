import React from 'react'
import {CircularProgress} from "@nextui-org/progress";
import { Card, CardFooter } from "@/components/ui/card";
import { CardBody } from "@/components/ui/3d-card";
import { Chip } from "@nextui-org/chip";
function PrograssBar({valuePer,point}:any) {
  return (
    <main className="w-full h-full flex items-center justify-center  gap-4 mb-10">
    <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-blue-600 to-green-500">
    <CardBody className="w-full h-full flex justify-center items-center">
      <CircularProgress
        classNames={{
          svg: "w-36 h-36 drop-shadow-md",
          indicator: "stroke-white",
          track: "stroke-white/10",
          value: "text-3xl font-semibold text-white",
        }}
        showValueLabel={true}
        strokeWidth={4}
        value={valuePer}
      />
    </CardBody>
    <CardFooter className="flex  justify-center items-center pt-0">
      <Chip
        classNames={{
          base: "border-1 border-white/30 mt-2",
          content: "text-white/90 text-small font-semibold",
        }}
        variant="bordered"
      >
        {point}
      </Chip>
    </CardFooter>
  </Card>
  </main>
  )
}

export default PrograssBar
