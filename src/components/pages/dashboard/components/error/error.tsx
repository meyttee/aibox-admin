import { FC } from "react";
import { CloudAlertIcon } from "lucide-react";

import { Card } from "@/components";

const Error: FC = () => (
  <Card className="h-full min-h-[297px]">
    <div className="h-52 w-full flex justify-center items-center flex-col gap-2">
      <CloudAlertIcon size={48} className="text-gray-500" />
      <p>مشکلی رخ داده است</p>
    </div>
  </Card>
);

export default Error;
