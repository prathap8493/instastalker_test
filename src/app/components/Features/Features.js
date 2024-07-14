import {
  ArrowPathIcon,
  BellIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  EyeIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Real-time Updates",
    description:
      "Get real-time updates on new posts, stories, and activity from any public Instagram profile. Stay informed with immediate notifications directly to your dashboard.",
    icon: BellIcon,
  },
  {
    name: "Data Security",
    description:
      "Utilize advanced encryption methods to ensure that all tracked data remains secure and private. Our commitment to security protects your information at all times.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Activity Tracking",
    description:
      "Monitor user interactions such as likes, comments, and follows. Analyze trends and behaviors with comprehensive data on user engagement.",
    icon: EyeIcon,
  },
  {
    name: "Comprehensive Analytics",
    description:
      "Dive deep into user analytics to understand content performance. Explore detailed reports on engagement rates, peak activity times, and audience demographics.",
    icon: ChartBarIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why TheInstaStalker?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform allows you to track and analyze public Instagram
            profiles without notifying the users, providing you with the
            analytics to enhance your digital strategy. From real-time content
            updates to detailed engagement metrics, see how easy it is to stay
            ahead in your market.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-18 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
