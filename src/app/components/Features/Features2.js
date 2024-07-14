import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowDownIcon,
  ArrowTurnDownLeftIcon,
  BanknotesIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ClockIcon,
  EyeIcon,
  FilmIcon,
  HashtagIcon,
  LightBulbIcon,
  PhotoIcon,
  ReceiptRefundIcon,
  ScaleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "User Profile Details",
    href: "#",
    icon: UserIcon, // Suggests personal user data
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    desc: "Retrieve and display detailed information from public Instagram profiles, including user bio, profile picture, and follower count.",
  },
  {
    title: "Post Analysis",
    href: "#",
    icon: PhotoIcon, // Represents imagery, suitable for posts
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    desc: "Analyze the latest posts of any public Instagram profile, viewing likes, comments, and engagement rates.",
  },
  {
    title: "Story Insights",
    href: "#",
    icon: FilmIcon, // Suitable for Instagram stories
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    desc: "Gain insights into stories from public accounts. Track viewer interactions and discover popular content themes.",
  },
  {
    title: "Hashtag Performance",
    href: "#",
    icon: HashtagIcon, // Direct representation for hashtags
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    desc: "Monitor the performance of specific hashtags used in posts and stories to identify trends and their impact on engagement.",
  },
  {
    title: "Download Content",
    href: "#",
    icon: ArrowDownIcon, // Indicates the download action
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    desc: "Download and save images, videos, and other media from public Instagram profiles directly to your device.",
  },
  {
    title: "Content Archiving",
    href: "#",
    icon: ArchiveBoxIcon, // Suggests storing or archiving information
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    desc: "Keep a record of user profiles and their posting history for long-term analysis and reference.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Features2() {
  return (
    <div className="max-w-6xl mx-auto my-24">
      <h2 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Features Of TheInstaStalker
      </h2>
      <div className="divide-y my-10 divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "group relative bg-white p-6 focus-within:outline-none"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "inline-flex rounded-lg p-3 ring-4 ring-white"
                )}
              >
                <action.icon aria-hidden="true" className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <p className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {action.title}
                </p>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{action?.desc}</p>
            </div>
            {/* <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
