import { FC } from "react";

import { strings } from "@/constants";
import { useGetApiPlatformData } from "@/services";
import { Card, DonutChart } from "@/components/ui";

import { APIIcon } from "../../icons";

const ApiPlatformCard: FC = () => {
  const { data, isFetching } = useGetApiPlatformData();
  const waiting = data?.version_info.find((v) => v.status === "WAITING")?.count;
  const accepted = data?.version_info.find(
    (v) => v.status === "ACCEPTED"
  )?.count;
  const deprecated = data?.version_info.find(
    (v) => v.status === "DEPRECATED"
  )?.count;
  const notAccepted = data?.version_info.find(
    (v) => v.status === "NOT_ACCEPTED"
  )?.count;

  const chartData = [
    { id: "1", name: strings.approved, amount: accepted || 0 },
    { id: "2", name: strings.waitingForAccept, amount: waiting || 0 },
    { id: "3", name: strings.rejected, amount: notAccepted || 0 },
    { id: "4", name: strings.deprecated, amount: deprecated || 0 },
  ];
  const colors = ["#34B853", "#DD4B39", "#B00020", "#757E7F"];

  return (
    <Card title={strings.apiPlatform} className="justify-start">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <DonutChart data={chartData} loading={isFetching} colors={colors} />
          {isFetching ? (
            <div className="bg-gray-100 animate-pulse w-[200px] h-[80px] rounded-md" />
          ) : (
            <div className="flex flex-col w-fit">
              <h2 className="text-4xl font-medium leading-14 text-left text-zinc-700">
                {data?.total_count}
              </h2>
              <span className="text-sm font-normal text-zinc-700">
                {strings.totalVersions}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col mt-8 gap-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="bg-teal-600/12 text-green-600 p-2 rounded-md">
                <APIIcon />
              </div>
              <p className="text-zinc-700 text-sm font-medium">
                {strings.approved}
              </p>
            </div>
            {isFetching ? (
              <span className="bg-gray-100 animate-pulse w-6 h-8 rounded-md" />
            ) : (
              <span className="text-gray-500 text-sm font-medium">
                {accepted}
              </span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="bg-teal-600/12 text-orange-700 p-2 rounded-md">
                <APIIcon />
              </div>
              <p className="text-zinc-700 text-sm font-medium">
                {strings.waitingForAccept}
              </p>
            </div>
            {isFetching ? (
              <span className="bg-gray-100 animate-pulse w-6 h-8 rounded-md" />
            ) : (
              <span className="text-gray-500 text-sm font-medium">
                {waiting}
              </span>
            )}
          </div>
          <div className="flex justify-between  items-center">
            <div className="flex gap-2 items-center">
              <div className="bg-teal-600/12 text-red-600 p-2 rounded-md">
                <APIIcon />
              </div>
              <p className="text-zinc-700 text-sm font-medium">
                {strings.rejected}
              </p>
            </div>
            {isFetching ? (
              <span className="bg-gray-100 animate-pulse w-6 h-8 rounded-md" />
            ) : (
              <span className="text-gray-500 text-sm font-medium">
                {notAccepted}
              </span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="bg-teal-600/12 text-gray-500 p-2 rounded-md">
                <APIIcon />
              </div>
              <p className="text-zinc-700 text-sm font-medium">
                {strings.deprecated}
              </p>
            </div>
            {isFetching ? (
              <span className="bg-gray-100 animate-pulse w-6 h-8 rounded-md" />
            ) : (
              <span className="text-gray-500 text-sm font-medium">
                {deprecated}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ApiPlatformCard;
