import { Text, Timeline } from "@mantine/core";

import { AnnotationIcon } from "@heroicons/react/solid";

export default function CustomTimeLine() {
  const data = [
    {
      label: "Submission of Full-length Manuscript(opens from)",
      date: "1 August 2022",
    },
    {
      label: "Last date to submit Full-length Manuscript",
      date: "31 August 2022",
    },
    {
      label: "Notification of Acceptance",
      date: "30 September 2022",
    },
    {
      label: "Early Bird Registration",
      date: "30 September 2022 - 15 November 2022",
    },
    {
      label: "Submission of Camera-ready Manuscript",
      date: "15 November 2022",
    },
    {
      label: "Last Date for Registration",
      date: "30 November 2022",
    },
    {
      label: "Pre-Conference Tutorial",
      date: "21 December 2022",
    },
    {
      label: "Conference Dates",
      date: "21-23 December 2022",
    },
  ];

  return (
    <>
      <Timeline active={10} bulletSize={35} lineWidth={3} color="white">
        {data.map((item, index) => (
          <Timeline.Item key={index} bullet={<AnnotationIcon />}>
            <Text className="text-2xl font-bold text-white" color="white">
              {item.label}
            </Text>
            <Text size="md" mt={4} color="green">
              {item.date}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}
